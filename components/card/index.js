import getCardStyles from './card.styles';
export default function Card({ children, flex = null, className }) {
  const { className: cardStyle, styles } = getCardStyles(flex);
  return (
    <>
      <div className={`${cardStyle} ${className}`}>{children}</div>
      {styles}
    </>
  );
}
