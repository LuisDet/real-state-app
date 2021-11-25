import Button from '../../components/ui/button';
import { useRouter } from 'next/router';
import useProjectContext from '../../hooks/useProjectContext';
import { useRef } from 'react';

export default function ProjectCreate() {
  const router = useRouter();
  const { createProject } = useProjectContext();
  const nameRef = useRef('');
  const builderRef = useRef('');
  const locationRef = useRef('');
  const comissionRef = useRef('');
  const dateFromRef = useRef('');
  const dateToRef = useRef('');
  const commentRef = useRef('');

  const handleCancel = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name: nameRef.current.value,
      builder: builderRef.current.value,
      location: locationRef.current.value,
      comission: comissionRef.current.value,
      dateFrom: dateFromRef.current.value,
      dateTo: dateToRef.current.value,
      comment: commentRef.current.value
    };

    createProject(newProject);
    router.push('/project');
  };
  return (
    <section>
      <h2>Crear Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' className='form-input' ref={nameRef} />
        </div>
        <div className='form-control'>
          <label htmlFor='builder'>Constructora</label>
          <input
            type='text'
            id='builder'
            className='form-input'
            ref={builderRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='location'>Ubicacion</label>
          <input
            type='text'
            id='location'
            className='form-input'
            ref={locationRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='commision'>Comision</label>
          <input
            type='text'
            id='commision'
            className='form-input'
            ref={comissionRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='date-from'>Desde</label>
          <input
            type='date'
            id='date-from'
            className='form-input'
            ref={dateFromRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='date-to'>Hasta</label>
          <input
            type='date'
            id='date-to'
            className='form-input'
            ref={dateToRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='comentary'>Descripcion</label>
          <textarea
            id='comentary'
            rows='4'
            className='form-input'
            ref={commentRef}
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
