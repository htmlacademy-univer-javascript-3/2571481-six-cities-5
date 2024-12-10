import React from 'react';
import { Cities, City } from '@appTypes/city';
import { useAppDispatch } from '@hooks/index';
import { changeCity } from '@store/engine-process/engine-process';
import { Link } from 'react-router-dom';

const CitiesList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <li key={city.name} className="locations__item">
          <Link className="locations__item-link tabs__item" onClick={() => handleCityChange(city)} to='/'>
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(CitiesList, () => true);
