import React from 'react';
import { Plan } from '../../types';

interface PlanTableProps {
  plans: Plan[];
}

const PlanTable: React.FC<PlanTableProps> = ({ plans = [] }) => {
  if (!plans.length) {
    return <div>계획이 없습니다.</div>;
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            시간
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            장소
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {plans.map((plan, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`${plan.pl_startTime} - ${plan.pl_endTime}`}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {plan.pl_place}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlanTable;
