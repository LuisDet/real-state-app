import '../styles/globals.css';
import NavBar from '../components/header/nav-bar';
import ContextProvider from '../context';
import HomeIcon from '../components/icon/home';
import MarketIcon from '../components/icon/shop';
import BarsIcon from '../components/icon/bars';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const componentName = { Component }.Component.name.toLowerCase();
  return (
    <div className='page-container'>
      {componentName === 'home' || componentName === 'projectcreate' ? (
        <span></span>
      ) : (
        <NavBar />
      )}
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      <div className='footer-bar'>
        <Link href='/'>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <MarketIcon />
        <BarsIcon />
        <style jsx>{`
          .footer-bar {
            height: 50px;
            background-color: #f2f2f2;
            position: sticky;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          span {
            width: 24px;
            height: 24px;
            background: red;
            display: block;
          }
        `}</style>
      </div>
    </div>
  );
}

export default MyApp;
