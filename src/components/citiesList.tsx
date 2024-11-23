import { CityName } from '@appTypes/city';
import { useAppDispatch } from '@hooks/index';
import { changeCity } from '@store/action';

type CitiesListProps = {
  cities: CityName[];
};

export function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
