import React, { useState } from 'react';
import { Label, Modal, TextInput } from 'flowbite-react';
import ButtonBig from '../../components/Button/ButtonBig';

const WritePlanPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [schedule, setSchedule] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setSchedule('');
  }

  const handleAddPlan = () => {
    setOpenModal(true);
  };

  const handleWrite = () => {};

  return (
    <div className="mx-6 my-7">
      <p className="block mb-7 text-[15px] font-['Nexon-Bold'] text-gray-900 underline underline-offset-8 decoration-2">
        새로운 여행을 계획하세요
      </p>

      <div className="plan-table">
        <p className="ml-1 mb-1 font-['Nexon-Medium'] text-[15px]">월 일</p>

        <ButtonBig
          text={'계획 추가'}
          bgColor={'white'}
          onClick={handleAddPlan}
        ></ButtonBig>
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
        <Modal.Body className="bg-white rounded-lg">
          <div className="px-8 py-5 space-y-5">
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

      <div className="fixed left-0 w-full p-6 bg-white bottom-14">
        <ButtonBig
          text={'작성하기'}
          bgColor={'main-green'}
          onClick={handleWrite}
        />
      </div>
    </div>
  );
};

export default WritePlanPage;
