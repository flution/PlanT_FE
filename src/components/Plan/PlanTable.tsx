import React from 'react';
import { Plan } from '../../slices/planSlice';

interface PlanTableProps {
  plans: Plan[];
}

const PlanTable: React.FC<PlanTableProps> = ({ plans }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-gray-600 font-bold border border-gray-300 w-2/5">
              Date
            </th>
            <th className="p-2 text-gray-600 font-bold border border-gray-300 w-3/5">
              Schedule
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index} className="bg-white border border-gray-300">
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  value={plan.date}
                  readOnly
                  className="w-full bg-white text-gray-900"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  value={plan.schedule}
                  readOnly
                  className="w-full bg-white text-gray-900"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
