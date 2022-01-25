import css from 'styled-jsx/css'

export default function getCardStyles(flex) {
  return css.resolve`
    div {
      background-color: #fff;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      ${flex
        ? `
      display: flex;
      align-items: ${flex.alignItems || 'normal'};
      justify-content: ${flex.justifyContent || 'normal'};
      flex-direction: ${flex.direction || 'row'};
      gap: ${flex.gap || '0'}px;
      `
        : ''}
    }
  `
}
