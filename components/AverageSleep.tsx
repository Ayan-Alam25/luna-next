import React from "react";
import getUserRecord from "@/app/actions/getUserRecord";
import { TbAlarmAverage } from "react-icons/tb";

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    // Ensure valid numbers
    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    // Calculate the average sleep for the days with records
    const averageSleep = validRecord / validDays;

    // Extract hours and minutes
    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <TbAlarmAverage className="text-blue-500" />
          Average Sleep Duration
        </h3>
        <div className="flex items-center justify-center py-4">
          <p className="text-3xl font-bold text-gray-800">
            {hours}
            <span className="text-xl font-medium text-gray-500">h</span>{" "}
            {minutes}
            <span className="text-xl font-medium text-gray-500">m</span>
          </p>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Based on {validDays} {validDays === 1 ? "day" : "days"} of tracking
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user record:", error);
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Error Loading Data
        </h3>
        <p className="text-gray-600">
          Unable to calculate your average sleep duration. Please try again
          later.
        </p>
      </div>
    );
  }
};

export default AverageSleep;
