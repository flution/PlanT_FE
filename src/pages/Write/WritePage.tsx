import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Datepicker } from 'flowbite-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { LoadScript } from '@react-google-maps/api';

import ButtonBig from '../../components/Button/ButtonBig';

const WritePage: React.FC = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(latLng);
  };

  const handleNextPage = () => {
    navigate('/write/plan');
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

        <label
          htmlFor=""
          className="mb-1 ml-1 font-['Nexon-Midium'] text-[15px]"
        >
          제목
        </label>
        <input
          type="text"
          className="text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-hover-green focus:border-hover-green w-full p-2.5 mb-7"
          placeholder="여행 제목을 입력하세요"
          required
        />

        <div className="mb-7">
          <div>
            <label
              htmlFor="text"
              className="mb-1 ml-1 font-['Nexon-Midium'] text-[15px]"
            >
              여행 시작일
            </label>
            <Datepicker className="my-1" />
          </div>
          <div>
            <label
              htmlFor="text"
              className="mb-1 ml-1 text-[15px] font-['Nexon-Midium']"
            >
              여행 종료일
            </label>
            <Datepicker className="mt-1" />
          </div>
        </div>

        <div className="mb-7">
          <label
            htmlFor="text"
            className="mb-1 ml-1 font-['Nexon-Midium'] text-[15px]"
          >
            여행 장소
          </label>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: '여행 장소를 검색하세요...',
                    className:
                      'text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-hover-green focus:border-hover-green w-full p-2.5',
                  })}
                />
                <div>
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                        key={suggestion.placeId} // key 속성 추가
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <ButtonBig
          text={'다음으로'}
          bgColor={'main-green'}
          onClick={handleNextPage}
        />
      </div>
    </LoadScript>
  );
};

export default WritePage;
