import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Label, Modal, TextInput, Textarea } from 'flowbite-react';
import ButtonBig from '../../components/Button/ButtonBig';

interface Plan {
  date: string;
  startTime: string;
  endTime: string;
  schedule: string;
  place: string;
  cost: string;
  content: string;
}

const WritePlanPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [schedule, setSchedule] = useState('');
  const [place, setPlace] = useState('');
  const [cost, setCost] = useState('');
  const [content, setContent] = useState('');
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [days, setDays] = useState<{ date: Date; dayString: string }[]>([]);
  const [searchParams] = useSearchParams();
  const plansEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const p_id = searchParams.get('p_id');

  useEffect(() => {
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const daysArray: { date: Date; dayString: string }[] = [];
      const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
      for (
        let date = new Date(start);
        date <= end;
        date.setDate(date.getDate() + 1)
      ) {
        const newDate = new Date(date);
        daysArray.push({
          date: newDate,
          dayString: `${newDate.getMonth() + 1}월 ${newDate.getDate()}일 (${dayNames[newDate.getDay()]})`,
        });
      }
      setDays(daysArray);
    }
  }, [searchParams]);

  useEffect(() => {
    if (plansEndRef.current) {
      plansEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [plans]);

  const onCloseModal = () => {
    setOpenModal(false);
    setStartTime('');
    setEndTime('');
    setSchedule('');
    setPlace('');
    setCost('');
    setContent('');
  };

  const handleAddPlan = (date: Date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
    setOpenModal(true);
  };

  const handleWrite = async () => {
    if (!startTime || !endTime || !schedule || !place || !cost || !content) {
      alert('모두 입력해주세요.');
      return;
    }

    const newPlan: Plan = {
      date: selectedDate,
      startTime,
      endTime,
      schedule,
      place,
      cost,
      content,
    };
    setPlans([...plans, newPlan]);

    try {
      await axios.post('http://localhost:8080/api/plans', {
        p_id,
        pl_date: selectedDate,
        pl_startTime: startTime,
        pl_endTime: endTime,
        pl_schedule: schedule,
        pl_place: place,
        pl_cost: cost,
        pl_content: content,
      });
      onCloseModal();
    } catch (error) {
      console.error('Error inserting plan:', error);
    }
  };

  const handleSubmit = () => {
    navigate('/main');
  };

  return (
    <div className="mx-6 my-7">
      <p className="block mb-7 text-[15px] font-['Nexon-Bold'] text-gray-900 underline underline-offset-8 decoration-2">
        새로운 여행을 계획하세요
      </p>

      <div className="mb-32 plan-table">
        {days.map((day, index) => (
          <div key={index} className="mb-4">
            <p className="ml-1 mb-1 font-['Nexon-Medium'] text-[15px]">
              {day.dayString}
            </p>
            {plans
              .filter(
                (plan) => plan.date === day.date.toISOString().split('T')[0],
              )
              .map((plan, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 my-2 border-2 rounded-md border-main-green"
                >
                  <p>
                    <span className="font-[Nexon-Bold] mr-5">시간</span>
                    {plan.startTime} - {plan.endTime}
                  </p>
                  <p>
                    <span className="font-[Nexon-Bold] mr-5">일정</span>
                    {plan.schedule}
                  </p>
                  <p>
                    <span className="font-[Nexon-Bold] mr-5">장소</span>
                    {plan.place}
                  </p>
                  <p>
                    <span className="font-[Nexon-Bold] mr-5">비용</span>
                    {plan.cost}
                  </p>
                  <p>
                    <span className="font-[Nexon-Bold] mr-5">내용</span>
                    {plan.content}
                  </p>
                </div>
              ))}
            <ButtonBig
              text={'계획 추가'}
              bgColor={'white'}
              onClick={() => handleAddPlan(day.date)}
            />
          </div>
        ))}
        <div ref={plansEndRef} />
      </div>

      {/* 계획 작성 모달 */}
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <Modal.Header />
        <Modal.Body className="p-5 bg-white rounded-lg">
          <div className="px-2 space-y-5">
            {/* 시간 */}
            <form className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="start-time"
                  className="block mb-1 ml-1 text-sm font-['Nexon-Midium'] text-gray-900"
                >
                  Start time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-hover-green"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="time"
                    id="start-time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="outline-none bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hover-green focus:border-hover-green block w-full p-2.5"
                    min="09:00"
                    max="18:00"
                    placeholder="00:00"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="end-time"
                  className="block mb-1 ml-1 text-sm font-['Nexon-Midium'] text-gray-900"
                >
                  End time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-hover-green"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="time"
                    id="end-time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="outline-none bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hover-green focus:border-hover-green block w-full p-2.5"
                    min="09:00"
                    max="18:00"
                    required
                  />
                </div>
              </div>
            </form>

            {/* 일정 */}
            <div>
              <div className="block mb-2">
                <Label
                  htmlFor="text"
                  value="일정"
                  className="ml-1 text-sm font-['Nexon-Midium']"
                />
              </div>
              <TextInput
                id="schedule"
                type="text"
                placeholder="일정을 입력하세요"
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
                required
              />
            </div>

            {/* 장소 */}
            <div>
              <div className="block mb-2">
                <Label
                  htmlFor="text"
                  value="장소"
                  className="ml-1 text-sm font-['Nexon-Midium']"
                />
              </div>
              <TextInput
                id="place"
                type="text"
                placeholder="장소를 입력하세요"
                value={place}
                onChange={(event) => setPlace(event.target.value)}
                required
              />
            </div>

            {/* 비용 */}
            <div>
              <div className="block mb-2">
                <Label
                  htmlFor="text"
                  value="비용"
                  className="ml-1 text-sm font-['Nexon-Midium']"
                />
              </div>
              <TextInput
                id="price"
                type="text"
                placeholder="비용을 입력하세요"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
                required
              />
            </div>

            {/* 내용 */}
            <div>
              <div className="block mb-2">
                <Label
                  htmlFor="text"
                  value="내용"
                  className="ml-1 text-sm font-['Nexon-Midium']"
                />
              </div>
              <Textarea
                id="content"
                placeholder="내용을 입력하세요"
                rows={4}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </div>

            <ButtonBig
              text={'일정 추가'}
              bgColor={'main-green'}
              onClick={handleWrite}
            />
          </div>
        </Modal.Body>
      </Modal>

      <div className="fixed left-0 w-full px-6 pt-1 pb-6 bg-white bottom-14">
        <ButtonBig
          text={'작성하기'}
          bgColor={'main-green'}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default WritePlanPage;
