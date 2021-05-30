import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import ButtonsTheme from '../../ui/Buttons';

type ButtonProps = Props & HTMLAttributeProps;

interface Props {
  children?: React.ReactNode;
  size?: 'xs' | 'm';
  design?: 'success' | 'primary';
  isAbsoluteWidth?: boolean;
  position?: 'left' | 'center' | 'right';
}

interface HTMLAttributeProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { children, design = 'success', size = 'm', isAbsoluteWidth = false, position = 'left', onClick } = props;

  const buttonWidth = isAbsoluteWidth ? ButtonsTheme.isAbsoluteWidth : null;
  const buttonStyle = { ...ButtonsTheme.design[design], ...ButtonsTheme.size[size], ...buttonWidth };

  return (
    <button type="button" className={s.root} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
