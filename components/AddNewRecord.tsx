"use client";
import { useRef, useState } from "react";
import addSleepRecord from "@/app/actions/addSleepRecord";
import { FiCalendar } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";

const AddNewRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set("amount", amount.toString());
    formData.set("text", sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType("error");
    } else {
      setAlertMessage("Sleep record added successfully!");
      setAlertType("success");
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality("");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <VscNewFile className="text-blue-500" />
        Add New Sleep Record
      </h3>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className="space-y-5"
      >
        {/* Sleep Quality and Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sleep Quality */}
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sleep Quality
            </label>
            <select
              id="text"
              name="text"
              value={sleepQuality}
              onChange={(e) => setSleepQuality(e.target.value)}
              className="w-full border-gray-300 rounded-lg  text-gray-700 p-1 border-2"
              required
            >
              <option value="" disabled>
                How did you feel?
              </option>
              <option value="Refreshed">🌞 Refreshed</option>
              <option value="Tired">😴 Tired</option>
              <option value="Neutral">😐 Neutral</option>
              <option value="Exhausted">😫 Exhausted</option>
              <option value="Energetic">⚡ Energetic</option>
            </select>
          </div>

          {/* Sleep Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <div className="relative ">
              <input
                type="date"
                id="date"
                name="date"
                className="w-full  border-gray-300 rounded-lg text-gray-700 pl-10 p-1 border-2 "
                required
                onFocus={(e) => e.target.showPicker()}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Hours Slept */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hours Slept:{" "}
            <span className="font-semibold text-blue-600">{amount}h</span>
          </label>
          <div className="mt-2">
            <input
              type="range"
              min="0"
              max="12"
              step="0.5"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
              <span>0h</span>
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-4 bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 hover:from-blue-500 hover:via-blue-800 hover:to-violet-800 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all ${
            isLoading ? "opacity-80 cursor-not-allowed" : "hover:shadow-md"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
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
              Adding...
            </div>
          ) : (
            "Add Sleep Record"
          )}
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-md text-sm ${
            alertType === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default AddNewRecord;
