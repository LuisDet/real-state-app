const Builder = props => (
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

export default Builder
