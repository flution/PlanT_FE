import { Plan } from '../features/plan/planSlice';

export const fetchMockPlans = async (): Promise<Plan[]> => {
  return [
    {
      date: '2024-07-15',
      startTime: '10:00',
      endTime: '12:00',
      schedule: 'Meeting',
      place: 'Office',
      cost: 'Free',
      content: 'Discuss project status',
    },
    {
      date: '2024-07-16',
      startTime: '14:00',
      endTime: '15:00',
      schedule: 'Lunch',
      place: 'Cafeteria',
      cost: '$10',
      content: 'Lunch with team',
    },
    {
      date: '2024-07-17',
      startTime: '09:00',
      endTime: '11:00',
      schedule: 'Workshop',
      place: 'Conference Room',
      cost: 'Free',
      content: 'Workshop on new technologies',
    },
  ];
};
