import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  const handleBack = (e) => {
    router.back();
  };
  return (
    <>
      <div className='header-menu'>
        <div className='upper-bar'>
          <div>
            <button className='back-arrow' onClick={handleBack}>
              &larr;
            </button>
          </div>
          <input type='text' placeholder='Buscar...' className='search-bar' />
        </div>
        <div className='bottom-bar'>
          <Link href='/project'>
            <a>Projectos</a>
          </Link>
          <Link href='/client'>
            <a>Clientes</a>
          </Link>
          <Link href='/calculator'>
            <a>Calculadora</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header-menu {
          margin-top: 15px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .upper-bar {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .search-bar {
          border: none;
          background-color: #fff;
          padding: 8px 15px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          color: #000;
          width: 100%;
        }
        .back-arrow {
          font-size: 20px;
          background: transparent;
          border: none;
        }
        .bottom-bar {
          display: flex;
          gap: 5px;
        }
        .bottom-bar > * {
          font-size: 12px;
          background: #fff;
          padding: 5px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </>
  );
}
