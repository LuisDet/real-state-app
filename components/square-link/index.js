import Link from 'next/link';
import Card from '../card';

export default function SquareLink({ url, text, children }) {
  return (
    <>
      <Link href={`/${url}`}>
        <a>
          <Card
            flex={{
              alignItems: 'center',
              justifyContent: 'center',
              direction: 'column',
              gap: 5
            }}
          >
            {children}
            <p>{text}</p>
          </Card>
        </a>
      </Link>
      <style jsx>{`
        p {
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
