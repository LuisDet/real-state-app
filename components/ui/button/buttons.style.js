import css from 'styled-jsx/css';

export default function getButtonStyles(buttonStyle) {
  return css.resolve`
    button {
      border: none;
      background-color: ${buttonStyle.background};
      font-size: 18px;
      color: ${buttonStyle.color};
      font-weight: 600;
      cursor: pointer;
      ${buttonStyle.padding ? `padding: ${buttonStyle.padding}px;` : null};
      border-radius: 5px;
    }
  `;
}
