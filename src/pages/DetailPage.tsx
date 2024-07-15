import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMockPlans } from '../api/mockPlanApi'; // Mock 데이터를 가져오는 import
// import { fetchPlans } from '../api/planapi'; // 실제 데이터를 가져오는 import
import { setPlans } from '../features/plan/planSlice';
import PlanTable from '../components/Plan/PlanTable';
import PlanTimeline from '../components/Plan/PlanTimeline';

const DetailPage: React.FC = () => {
  const dispatch = useDispatch();

  // 실제 db에서 api값을 가져올때 쓸 코드
  // useEffect(() => {
  //   const getPlans = async () => {
  //     const plans = await fetchPlans();
  //     dispatch(setPlans(plans));
  //   };

  useEffect(() => {
    const getPlans = async () => {
      const plans = await fetchMockPlans();
      dispatch(setPlans(plans));
    };

    getPlans();
  }, [dispatch]);

  return (
    <div>
      <PlanTable />
      <PlanTimeline />
    </div>
  );
};

export default DetailPage;
