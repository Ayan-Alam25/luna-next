"use client";
import { useState } from "react";
import { Record } from "@/types/Record";
import deleteRecord from "@/app/actions/deleteRecord";
import { GiNightSleep } from "react-icons/gi";
import { toast } from "sonner";

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    toast.success(<span className="text-center text-red-500">Delete record successfully</span>);
    setIsLoading(false);
  };

  const getSleepQualityColor = (amount: number) => {
    if (amount >= 8) return "bg-blue-100 text-blue-800";
    if (amount >= 6) return "bg-green-100 text-green-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-lg ${getSleepQualityColor(record.amount)}`}
        >
          <GiNightSleep />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">
              {record.amount} hours
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${getSleepQualityColor(
                record.amount
              )}`}
            >
              {record.text}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(record.date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => handleDeleteRecord(record.id)}
        disabled={isLoading}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Delete record"
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default RecordItem;
