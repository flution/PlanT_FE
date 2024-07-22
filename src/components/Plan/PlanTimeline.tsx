import React from 'react';
import { Plan } from '../../types';

interface PlanTimelineProps {
  plans: Plan[];
}

const PlanTimeline: React.FC<PlanTimelineProps> = ({ plans = [] }) => {
  return (
    <div className="timeline">
      {plans.map((plan, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h2>{`${plan.pl_startTime} - ${plan.pl_endTime}`}</h2>
            <p>{plan.pl_schedule}</p>
            <p>{plan.pl_place}</p>
            <p>{plan.pl_cost}</p>
            <p>{plan.pl_content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanTimeline;
