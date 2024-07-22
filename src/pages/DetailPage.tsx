import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import { loadPlanById } from '../slices/actions';
import PlanTable from '../components/Plan/PlanTable';
import PlanTimeline from '../components/Plan/PlanTimeline';

const DetailPage: React.FC = () => {
  const { p_id } = useParams<{ p_id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, plans } = useSelector(
    (state: RootState) => state.planDetail,
  );

  useEffect(() => {
    if (p_id) {
      console.log(`Dispatching loadPlanById with p_id: ${p_id}`);
      dispatch(loadPlanById(p_id));
    }
  }, [dispatch, p_id]);

  useEffect(() => {
    console.log('Plans updated:', plans);
  }, [plans]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading plans:', error);
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen font-[Nexon]">
      <div className="flex w-full h-[70px] bg-white">
        <label
          htmlFor="email"
          className="block ml-5 text-2xl font-bold text-gray-900 mt-7 mb-7 dark:text-white"
        >
          일정 테이블
        </label>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 mb-16">
        <div className="w-full max-w-4xl p-4">
          <div className="flex flex-col items-start space-y-8">
            <PlanTable plans={plans || []} />
            <div className="w-full">
              <div className="flex w-full h-[70px] bg-white">
                <label
                  htmlFor="email"
                  className="block ml-5 text-2xl font-bold text-gray-900 mt-7 mb-7 dark:text-white"
                >
                  타임라인
                </label>
              </div>
              <PlanTimeline plans={plans || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
