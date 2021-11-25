import { H2 } from '../ui/fonts';
import Button from '../ui/button';

import { useRouter } from 'next/router';

export default function HeadArticle({ title, link }) {
  const router = useRouter();

  const handlePush = () => {
    console.log(link);
    router.push(link);
  };

  return (
    <>
      <div className='flex'>
        <H2>{title}</H2>
        <Button onClick={handlePush}>Crear</Button>
      </div>
      <style jsx>{`
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
