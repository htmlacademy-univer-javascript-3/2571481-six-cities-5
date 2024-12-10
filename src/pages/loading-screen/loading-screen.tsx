import { ClipLoader } from 'react-spinners';

export function LoadingScreen(): JSX.Element {
  return (
    <div style={styles.container}>
      <p>Loading...</p>
      <ClipLoader size={50} color="#133ae9" />
    </div>
  );
}

const styles: { container: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    height: '100vh',
  },
};
