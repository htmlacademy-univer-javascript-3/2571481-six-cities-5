import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Cities } from '@appTypes/city';
import { AppRoute } from '@const';
import { useAppDispatch } from '@hooks/index';
import { redirectToRoute } from '@store/action';
import { changeCity } from '@store/engine-process/engine-process';

function LoginPicSection(): JSX.Element {
  const dispatch = useAppDispatch();
  const randomCity = Cities[Math.floor(Math.random() * 6)];
  const handleClick = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    dispatch(changeCity(randomCity));
    dispatch(redirectToRoute(AppRoute.MainPage));
  };

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" onClick={handleClick} to='/'>
          <span>{randomCity.name}</span>
        </Link>
      </div>
    </section>
  );
}

const MemoizedLoginPicSection = memo(LoginPicSection);
export default MemoizedLoginPicSection;
