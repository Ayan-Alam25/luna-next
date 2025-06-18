import AddNewRecord from "@/components/AddNewRecord";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import RecordChart from "../components/RecordChart";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorstSleep";
import RecordHistory from "@/components/RecordHistory";
import { GoHistory } from "react-icons/go";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-sm">
            <img
              src={user.imageUrl}
              alt={`${user.firstName}'s profile`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 bg-clip-text">
                Welcome Back, {user.firstName}!
              </h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Your sleep insights are ready. Let's explore how you've been
                resting.
              </p>
              <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  Member since {new Date(user.createdAt).toLocaleDateString()}
                </div>
                <div className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full">
                  Last active:{" "}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleDateString()
                    : "Recently"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Sleep Input */}
        <div className="lg:col-span-1 space-y-6">
          <AddNewRecord />
        </div>

        {/* Right Column - Stats */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AverageSleep />
            <BestWorstSleep />
          </div>
          <RecordChart />
        </div>
      </section>

      {/* Sleep History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GoHistory className="text-blue-500" />
            Your Sleep History
          </h2>
          <RecordHistory />
        </div>
      </section>
    </main>
  );
}
