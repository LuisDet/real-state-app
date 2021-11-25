import getButtonStyles from './buttons.style';

export default function Button({ children, style, ...props }) {
  const buttonStyle = () => {
    if (style === 'primary') {
      return {
        background: '#06A0A2',
        color: '#fff',
        padding: '10'
      };
    }
    if (style === 'cancel') {
      return {
        background: '#EB5757',
        color: '#fff',
        padding: '10'
      };
    }
    return {
      background: 'transparent',
      color: '#06A0A2'
    };
  };
  const { className, styles } = getButtonStyles(buttonStyle());
  return (
    <>
      <button className={className} {...props}>
        {children}
      </button>
      {styles}
    </>
  );
}
