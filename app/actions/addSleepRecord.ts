"use server"

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface RecordData {
    text: string;
    amount: number;
    date: string;
}

interface RecordResult {
    data?: RecordData;
    error?: string;
}

async function addSleepRecord(formData: FormData): Promise<RecordResult> {
    
    // Extract data from the form
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');
    const dateValue = formData.get('date');


    // Check for input values
    if (!textValue || textValue === "" || !amountValue || !dateValue || dateValue === "") {
        return {
            error: 'Please fill in all fields'
        }
    } 
    

    const text: string = textValue.toString(); // Ensure text is a string
    const amount: number = parseFloat(amountValue.toString()); // Ensure amount is a number
    let date: string;
    try {
        date = new Date(dateValue.toString()).toISOString(); // Convert date to ISO string
    } catch (error) {
        console.error('Error parsing date:', error);
        return {
            error: 'Invalid date format'
        }
    }


    // Get user
    const {userId} = await auth();

    // Check if user is logged in
    if(!userId){
        return {error: "User not found"};
    }

    try {
        const existingRecord = await db.record.findFirst({
            where: {
                userId,
                date: date,
            },
        })

        let recordData: RecordData;

        if(existingRecord){
            const updatedRecord = await db.record.update({
                where: { id: existingRecord.id},
                data: {
                    text,
                    amount,
                }
            });
            recordData = {
                text: updatedRecord.text,
                amount: updatedRecord.amount,
                date: updatedRecord.date?.toISOString() || date,
            };
        } else {
            // create a new record
            const createdRecord = await db.record.create({
                data: {
                    text,
                    amount,
                    date,
                    userId,
                    },
            })

            recordData = {
                text: createdRecord.text,
                amount: createdRecord.amount,
                date: createdRecord.date?.toISOString() || date,
            }
           
        }
        revalidatePath("/");
        return {
            data: recordData
        };
    }
    catch(error){
        console.error('Error adding record:', error);
        return {
            error: 'Error adding record'
        }

    }


}

export default addSleepRecord