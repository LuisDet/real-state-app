const Percentage = props => (
  <svg
    className='icon icon-tabler icon-tabler-percentage'
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
    <circle cx={17} cy={17} r={1} />
    <circle cx={7} cy={7} r={1} />
    <path d='M6 18 18 6' />
  </svg>
)

export default Percentage
