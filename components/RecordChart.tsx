import getRecords from "@/app/actions/getRecords";
import BarChart from "./BarChart";
import { BsGraphDown } from "react-icons/bs";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          No Sleep Records Found
        </h3>
        <p className="text-gray-600 text-center">
          Start tracking your sleep to see your records here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BsGraphDown className="text-blue-500" />
        Sleep Overview
      </h3>
      <div className="h-64">
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;
