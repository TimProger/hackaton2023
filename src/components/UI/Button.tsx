import React from 'react';
import s from '../../styles/components/UI/Button.module.scss'
import classNames from "classnames";
import {NavLink} from 'react-router-dom'

export interface IButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  id?: string;
  key?: number | string;
  type?: 'link' | 'btn';
  href?: string;
  disabled?: boolean;
  full?: boolean;
  style?: 'filled' | 'borderless';
  size?: 'medium' | 'small';
  external?: boolean;
}

const Button: React.FC<IButtonProps> = ({
                                          children,
                                          className,
                                          onClick,
                                          type = 'btn',
                                          href,
                                          disabled,
                                          full,
                                          style = 'filled',
                                          size = 'small',
                                          external,
                                          key = null,
                                          id = '',
                                        }) => {
  const cn = classNames(
    s.btn,
    className,
    {[s.btn_medium]: size === 'medium'},
    {[s.btn_small]: size === 'small'},
    {[s.btn_borderless]: style === 'borderless'},
    {[s.btn_filled]: style === 'filled'},
    {[s.btn_full]: full})
  switch (type){
    case 'link':
      return (
        <NavLink
          id={id}
          key={key}
          to={href || '/d'}
          target={external ? '_blank' : ''}
          onClick={(e: React.MouseEvent) => {
            if(!disabled && onClick){
              onClick(e)
            }
          }}
          className={cn}
        >
          {children}
        </NavLink>
      )
    case 'btn':
      return (
        <button
          id={id}
          key={key}
          disabled={disabled}
          onClick={(e: React.MouseEvent) => {
            if(!disabled && onClick){
              onClick(e)
            }
          }}
          className={cn}
        >
          {children}
        </button>
      )
  }
};

export default Button;