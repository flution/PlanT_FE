import React from 'react';
import { Plan } from '../../slices/planSlice';

interface PlanTimelineProps {
  plans: Plan[];
}

const PlanTimeline: React.FC<PlanTimelineProps> = ({ plans }) => {
  return (
    <ol
      className="relative border-s border-gray-200 dark:border-gray-700"
      style={{ width: '300px', overflow: 'auto' }}
    >
      {plans.map((plan, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <span className="mr-2">{index + 1}.</span>
            <time>{plan.date}</time>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {plan.startTime} - {plan.endTime} / {plan.place}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Cost: {plan.cost}
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {plan.content}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default PlanTimeline;
