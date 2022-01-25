import Button from '../../components/ui/button'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'

export default function ProjectCreate() {
  const router = useRouter()

  const handleCancel = e => {
    e.preventDefault()
    router.back()
  }

  const handleSubmit = value => {
    window
      .fetch('/api/project/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })
      .then(respoonse => {
        console.log(respoonse)
        router.push('/project')
      })
  }

  return (
    <section>
      <h2>Crear Proyecto</h2>
      <Formik
        initialValues={{ name: '', builder: '', location: '', comission: '' }}
        onSubmit={handleSubmit}
      >
        {({}) => (
          <Form>
            <div className='form-control'>
              <label htmlFor='builder'>Nombre</label>
              <Field
                type='name'
                name='name'
                render={({ field }) => (
                  <input {...field} className='form-input' />
                )}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='builder'>Comision</label>
              <Field
                type='comission'
                name='comission'
                render={({ field }) => (
                  <input {...field} className='form-input' />
                )}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='comentary'>Descripcion</label>
              <Field
                type='comentary'
                name='comentary'
                render={({ field }) => (
                  <textarea {...field} rows='4' className='form-input' />
                )}
              />
            </div>
            <Button style='primary'>Guardar</Button>
            <Button onClick={handleCancel} style='cancel'>
              Cancelar
            </Button>
            {/* <div className='form-control'>
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
      </div> */}
          </Form>
        )}
      </Formik>

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
  )
}
