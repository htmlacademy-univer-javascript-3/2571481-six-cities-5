import { memo, useCallback } from 'react';
import { Cities, City } from '@appTypes/city';
import { useAppDispatch } from '@hooks/index';
import { changeCity } from '@store/engine-process/engine-process';

const styles: { container: React.CSSProperties } = {
  container: {
    cursor: 'pointer',
  },
};

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback((city: City) => {
    dispatch(changeCity(city));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <li key={city.name} className="locations__item">
          <div className="locations__item-link tabs__item" onClick={() => handleCityChange(city)} style={styles.container}>
            <span>{city.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);
export default MemoizedCitiesList;
