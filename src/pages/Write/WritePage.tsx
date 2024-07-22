import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import ButtonBig from '../../components/Button/ButtonBig';
import { fetchUser } from '../../slices/authSlice';
import axios from 'axios';
import { RootState, AppDispatch } from '../../store/store';

const WritePage: React.FC = () => {
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(latLng);
  };

  const handleNextPage = async () => {
    if (!title || !startDate || !endDate || !address) {
      alert('모두 입력해주세요.');
      return;
    }

    try {
      if (!user) {
        throw new Error('유저 정보가 없습니다.');
      }

      const response = await axios.post(
        'http://localhost:8080/api/posts',
        {
          title,
          uno: user.uno,
          p_like: 0,
        },
        { withCredentials: true },
      );

      const p_id = response.data.insertId;
      console.log('p_id: ' + p_id);

      navigate(
        `/write/plan?p_id=${p_id}&startDate=${startDate}&endDate=${endDate}`,
      );
    } catch (error) {
      console.error('포스팅 실패했습니다.', error);
      alert('다시 시도해주세요.');
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}
      libraries={['places']}
    >
      <div className="mx-6 my-7">
        <p className="block mb-7 text-[15px] font-['Nexon-Bold'] text-gray-900 underline underline-offset-8 decoration-2">
          새로운 여행을 계획하세요
        </p>

        <div className="relative z-0 mb-7">
          <input
            type="text"
            id="floating_standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hover-green peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_standard"
            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hover-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-1 font-['Nexon-Midium']"
          >
            제목
          </label>
        </div>

        <div className="mb-7">
          <div>
            <label
              htmlFor="startDate"
              className="font-['Nexon-Midium'] text-[15px]"
            >
              여행 시작일
            </label>
            <input
              type="date"
              id="startDate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hover-green peer"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="mb-1 text-[15px] font-['Nexon-Midium']"
            >
              여행 종료일
            </label>
            <input
              type="date"
              id="endDate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hover-green peer"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="relative z-0 mb-7">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div className="relative">
                <input
                  {...getInputProps({
                    type: 'text',
                    id: 'floating_address',
                    placeholder: ' ',
                    className:
                      'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hover-green peer',
                  })}
                />
                <label
                  htmlFor="floating_address"
                  className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hover-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-1 font-['Nexon-Midium']"
                >
                  여행 장소
                </label>
                {suggestions.length > 0 && (
                  <div className="mt-2 border-2 rounded-md border-hover-green bg-gray-50">
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      const style = suggestion.active
                        ? {
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            padding: '0.5rem',
                          }
                        : {
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            padding: '0.5rem',
                          };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                          key={suggestion.placeId}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div className="flex justify-center mt-10 mb-20">
          <ButtonBig
            text={'다음으로'}
            bgColor={'main-green'}
            onClick={handleNextPage}
          />
        </div>
      </div>
    </LoadScript>
  );
};

export default WritePage;
