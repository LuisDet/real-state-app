import { useState, useEffect } from 'react';

export default function Calculator() {
  const [amount, setAmount] = useState(0);
  const [booking, setBookin] = useState(0);
  const [separation, setSeparation] = useState(0);
  const [separationAmount, setSeparationAmount] = useState(0);
  const [construction, setConstruction] = useState(0);
  const [constructionAmount, setConstructionAmount] = useState(0);
  const [final, setFinal] = useState(100);
  const [finalAmout, setFinalAmout] = useState(0);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleBookingChange = (e) => setBookin(e.target.value);
  const handleSeparationChange = (e) => {
    const calc = (+amount - +booking) * (+e.target.value / 100);
    setSeparation(+e.target.value);
    setSeparationAmount(calc);
  };
  const handleConstructionChange = (e) => {
    const calc = (+amount - +booking) * (+e.target.value / 100);
    setConstruction(+e.target.value);
    setConstructionAmount(calc);
  };

  useEffect(() => {
    const calc = 100 - (separation + construction);
    setFinal(calc);
    setFinalAmout(amount * (calc / 100));
  }, [separation, construction, amount]);

  return (
    <section>
      <h2>Calculadora</h2>
      <form>
        <div className='form-control'>
          <label htmlFor='amount'>Monto</label>
          <input
            type='number'
            id='amount'
            className='form-input'
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='booking'>Reserva</label>
          <input
            type='number'
            id='booking'
            className='form-input'
            value={booking}
            onChange={handleBookingChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='document'>Separacion</label>
          <div className='form-divisor'>
            <input
              type='number'
              id='document'
              className='form-input'
              min='1'
              max='100'
              value={separation}
              onChange={handleSeparationChange}
            />
            <input
              type='number'
              className='form-input disabled'
              value={separationAmount}
              disabled
            />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='budget'>Cuotas en construccion</label>
          <div className='form-divisor'>
            <input
              type='number'
              id='document'
              className='form-input'
              min='1'
              max='100'
              value={construction}
              onChange={handleConstructionChange}
            />
            <input
              type='number'
              className='form-input disabled'
              value={constructionAmount}
              disabled
            />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='budget'>Pago Final</label>
          <div className='form-divisor'>
            <input
              type='number'
              id='document'
              className='form-input'
              min='1'
              max='100'
              value={final}
            />
            <input
              type='number'
              className='form-input disabled'
              value={finalAmout}
              disabled
            />
          </div>
        </div>
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
        .form-divisor {
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr 2fr;
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
        .disabled {
          background: #e0e0e0;
        }
      `}</style>
    </section>
  );
}
