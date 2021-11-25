import { h2 } from './fonts.style';

function H2({ children }) {
  return (
    <>
      <h2>{children}</h2>
      <style jsx>{h2}</style>
    </>
  );
}

export { H2 };
