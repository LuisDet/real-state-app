import Button from '../../components/ui/button';
import { useRouter } from 'next/router';
import { useRef, useContext } from 'react';

import { ClientContext } from '../../context/ClientContext';

export default function ProjectCreate() {
  const { createClient } = useContext(ClientContext);
  const router = useRouter();
  const nameRef = useRef();
  const phoneRef = useRef();
  const documentRef = useRef();
  const budgetRef = useRef();

  const handleCancel = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      document: documentRef.current.value,
      budget: budgetRef.current.value
    };

    createClient(newClient);
    router.push('/client');
  };

  return (
    <section>
      <h2>Crear Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' className='form-input' ref={nameRef} />
        </div>
        <div className='form-control'>
          <label htmlFor='phone'>Telefono</label>
          <input type='tel' id='phone' className='form-input' ref={phoneRef} />
        </div>
        <div className='form-control'>
          <label htmlFor='document'>Documento</label>
          <input
            type='text'
            id='document'
            className='form-input'
            ref={documentRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='budget'>Presupuesto</label>
          <input
            type='number'
            id='budget'
            className='form-input'
            ref={budgetRef}
          />
        </div>
        <Button style='primary'>Guardar</Button>
        <Button onClick={handleCancel} style='cancel'>
          Cancelar
        </Button>
      </form>

      <style jsx>{`
        h2 {
          text-align: center;
          font-size: 28px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .form-control {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        label {
          font-size: 14px;
          font-weight: 600;
        }

        .form-input {
          font-size: 14px;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          box-shadow: var(--shadow);
          width: 100%;
          background: #fff;
        }
      `}</style>
    </section>
  );
}
