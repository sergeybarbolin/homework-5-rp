import React, { useState, Fragment } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export const WithTooltip = ({ children }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const onClick = () => setTooltipVisible(!tooltipVisible);

  return (
    <Fragment>
      { tooltipVisible ? <div data-testid="tooltip">Hello, i'm Tooltip</div> : null }
      { children(onClick) }
    </Fragment>
  )
};
