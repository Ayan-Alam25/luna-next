import getBestWorstSleep from '@/app/actions/getBestWorstSleep';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { TbMathMaxMin } from 'react-icons/tb';

const BestWorstSleep = async () => {
  const { bestSleep, worstSleep } = await getBestWorstSleep();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <TbMathMaxMin className="text-blue-500" />
        Sleep Extremes
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Best Sleep */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <BsArrowUp className='text-blue-800' />
            </div>
            <div>
              <h4 className="text-sm font-medium text-blue-800">Best Sleep</h4>
              <p className="text-2xl font-bold text-gray-900">
                {bestSleep !== undefined ? `${bestSleep}h` : "--"}
              </p>
            </div>
          </div>
        </div>

        {/* Worst Sleep */}
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <BsArrowDown className='text-red-800' />
            </div>
            <div>
              <h4 className="text-sm font-medium text-red-800">Worst Sleep</h4>
              <p className="text-2xl font-bold text-gray-900">
                {worstSleep !== undefined ? `${worstSleep}h` : "--"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWorstSleep;