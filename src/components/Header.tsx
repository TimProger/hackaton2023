import React from 'react';
import s from '../styles/components/Header.module.scss'
import Text from '../components/UI/Text';
import {useLocation} from "react-router";
import classNames from "classnames";
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {

  const { pathname } = useLocation()

  return (
    <div className={s.header}>
      <NavLink to={'/'}>
        <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_45_861)">
            <path d="M110 0.5H-2V35.5H110V0.5Z" fill="white"/>
            <path d="M26 18.5657C26 25.9914 20.6383 30 12.883 30H2V7H12.883C20.6383 7 26 11.14 26 18.5657ZM21.5 18.5657C21.5 13.7357 17.9255 11.2057 12.883 11.2057H6.40425V25.7943H13.3617C18.1489 25.6629 21.5 23.2643 21.5 18.5657Z" fill="#2C2C3C"/>
            <path d="M80 11.2057H69.7578V30H65.2425V11.2057H55V7H80V11.2057Z" fill="#2C2C3C"/>
            <path d="M44.0714 7L55 30H50.1786L46.675 22.6728H36.2286L32.7572 30H28L38.9286 7H44.0714ZM41.4678 11.6657L38.1572 18.6314H44.7786L41.4678 11.6657Z" fill="url(#paint0_linear_45_861)"/>
            <path d="M96.4763 7L107 30H102.357L98.9834 22.6728H88.9238L85.5811 30H81L91.5237 7H96.4763ZM93.9691 11.6657L90.7809 18.6314H97.1573L93.9691 11.6657Z" fill="url(#paint1_linear_45_861)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_45_861" x1="28" y1="7" x2="55.9084" y2="8.16084" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4C8EF0"/>
              <stop offset="0.5625" stop-color="#F069B2"/>
              <stop offset="1" stop-color="#BC4CF0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_45_861" x1="81" y1="7" x2="107.878" y2="8.07658" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4C8EF0"/>
              <stop offset="0.5625" stop-color="#F069B2"/>
              <stop offset="1" stop-color="#BC4CF0"/>
            </linearGradient>
            <clipPath id="clip0_45_861">
              <rect width="110" height="35" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
      </NavLink>
      <div className={s.header__links}>
        <div className={s.header__links__link}>
          <Text
                type={'link'}
                href={'/'}
                no_td
                color={pathname === "/" ? 'gradient' : 'dark'}>Главная</Text>
          <div className={classNames({[s.header__links__underline]: pathname === "/"})}></div>
        </div>
        <div className={s.header__links__link}>
          <Text
            type={'link'}
            href={'/routes'}
            no_td
            color={pathname === "/routes" ? 'gradient' : 'dark'}>Рейсы</Text>
          <div className={classNames({[s.header__links__underline]: pathname === "/routes"})}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;