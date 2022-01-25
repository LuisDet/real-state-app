const Date = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
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

export default Date