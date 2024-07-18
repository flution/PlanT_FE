import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import { loadPlanById } from '../slices/planSlice';
import PlanTable from '../components/Plan/PlanTable';
import PlanTimeline from '../components/Plan/PlanTimeline';

const DetailPage: React.FC = () => {
  const { p_id } = useParams<{ p_id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, plans } = useSelector(
    (state: RootState) => state.plan,
  );

  useEffect(() => {
    if (p_id) {
      dispatch(loadPlanById(p_id));
    }
  }, [dispatch, p_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-16 mb-16">
      <div className="w-full max-w-4xl p-4">
        <PlanTable plans={plans} />
        <div className="mt-8">
          <PlanTimeline plans={plans} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
