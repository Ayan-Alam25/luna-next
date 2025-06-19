"use client";
import { useRef, useState } from "react";
import addSleepRecord from "@/app/actions/addSleepRecord";
import { FiCalendar } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";


const AddNewRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [date, setDate] = useState<Date>();

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);

    formData.set("amount", amount.toString());
    formData.set("text", sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      toast.error(<span className="text-center text-red-500">{error}</span>);
    } else {
      toast.success(<span className="text-center text-green-500">Successfully added new record</span> 
      );
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
            <Select
              value={sleepQuality}
              onValueChange={setSleepQuality}
              required
            >
              <SelectTrigger className="w-full border-gray-300 rounded-lg  text-gray-700 py-5 pr-1 border-2">
                <SelectValue placeholder="How did you feel?" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="Refreshed">🌞 Refreshed</SelectItem>
                  <SelectItem value="Tired">😴 Tired</SelectItem>
                  <SelectItem value="Neutral">😐 Neutral</SelectItem>
                  <SelectItem value="Exhausted">😫 Exhausted</SelectItem>
                  <SelectItem value="Energetic">⚡ Energetic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Sleep Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal py-5 ",
                    "border-2 border-gray-300 rounded-lg text-gray-700",
                    "h-[42px] pl-10 bg-white hover:bg-gray-50",
                    !date && "text-gray-400"
                  )}
                >
                  <FiCalendar className="absolute h-5 w-5 text-gray-400 ml-30" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="px-auto">Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="border-2 border-gray-300 rounded-lg"
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                />
              </PopoverContent>
            </Popover>
            {/* Hidden input for form submission */}
            <input
              type="hidden"
              name="date"
              value={date?.toISOString() || ""}
              required
            />
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

    </div>
  );
};

export default AddNewRecord;
