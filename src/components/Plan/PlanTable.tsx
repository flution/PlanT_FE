import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const PlanTable: React.FC = () => {
  const plans = useSelector((state: RootState) => state.plan.plans);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Schedule
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {plan.date}
              </th>
              <td className="px-6 py-4">{plan.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
