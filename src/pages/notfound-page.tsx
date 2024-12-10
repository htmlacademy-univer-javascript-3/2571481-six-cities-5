import Footer from '@components/footer';
import Header from '@components/header';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const styles: { container: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '45px',
    height: '700px',
  },
};

export function NotFoundPage(): JSX.Element {
  return(
    <Fragment>
      <Header/>
      <div style={styles.container}>
        <h1>
          404.
          <br />
          <small>Page not found</small>
        </h1>
        <Link to="/"><u>Go to main page</u></Link>
      </div>
      <Footer/>
    </Fragment>
  );
}
