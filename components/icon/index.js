export const Bars = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 27 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.5 0C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1C0.5 1.26522 0.605357 1.51957 0.792893 1.70711C0.98043 1.89464 1.23478 2 1.5 2H25.5C25.7652 2 26.0196 1.89464 26.2071 1.70711C26.3946 1.51957 26.5 1.26522 26.5 1C26.5 0.734784 26.3946 0.48043 26.2071 0.292893C26.0196 0.105357 25.7652 0 25.5 0H1.5ZM0.5 9C0.5 8.73478 0.605357 8.48043 0.792893 8.29289C0.98043 8.10536 1.23478 8 1.5 8H25.5C25.7652 8 26.0196 8.10536 26.2071 8.29289C26.3946 8.48043 26.5 8.73478 26.5 9C26.5 9.26522 26.3946 9.51957 26.2071 9.70711C26.0196 9.89464 25.7652 10 25.5 10H1.5C1.23478 10 0.98043 9.89464 0.792893 9.70711C0.605357 9.51957 0.5 9.26522 0.5 9ZM0.5 17C0.5 16.7348 0.605357 16.4804 0.792893 16.2929C0.98043 16.1054 1.23478 16 1.5 16H25.5C25.7652 16 26.0196 16.1054 26.2071 16.2929C26.3946 16.4804 26.5 16.7348 26.5 17C26.5 17.2652 26.3946 17.5196 26.2071 17.7071C26.0196 17.8946 25.7652 18 25.5 18H1.5C1.23478 18 0.98043 17.8946 0.792893 17.7071C0.605357 17.5196 0.5 17.2652 0.5 17Z'
      fill='#07282B'
    />
  </svg>
)

export const Builder = props => (
  <svg
    className='icon icon-tabler icon-tabler-bulldozer'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <circle cx={4} cy={17} r={2} />
    <circle cx={13} cy={17} r={2} />
    <path d='M18 13v6h3M13 19H4M4 15h9M8 12V7h2a3 3 0 0 1 3 3v5' />
    <path d='M5 15v-2a1 1 0 0 1 1-1h7M18 17h-3' />
  </svg>
)

export const Date = props => (
  <svg
    className='icon icon-tabler icon-tabler-calendar-minus'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <rect x={4} y={5} width={16} height={16} rx={2} />
    <path d='M16 3v4M8 3v4M4 11h16M10 16h4' />
  </svg>
)

export const Location = props => (
  <svg
    className='icon icon-tabler icon-tabler-map-pin'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <circle cx={12} cy={11} r={3} />
    <path d='M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z' />
  </svg>
)

export const Percentage = props => (
  <svg
    className='icon icon-tabler icon-tabler-percentage'
    width={20}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <circle cx={17} cy={17} r={1} />
    <circle cx={7} cy={7} r={1} />
    <path d='M6 18 18 6' />
  </svg>
)

export const Book = props => (
  <svg
    className='icon icon-tabler icon-tabler-book'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13' />
  </svg>
)
