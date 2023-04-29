import React from 'react';
import s from '../styles/components/Card.module.scss'
import Text from '../components/UI/Text';
import Map from '../components/Map';
import {IRoute} from "../types/routes.types";
import { NavLink } from 'react-router-dom';
import { Storage } from 'src/utils/Storage';
import Button from './UI/Button';

interface ICardProps {
  route: IRoute;
  index: number;
  key?: number;
}

const Card: React.FC<ICardProps> = ({route, index, key}) => {

  return (
    <div key={key} className={s.card}>
      <div className={s.card__map}>
        <Map coords={route.geo} pointNames={route.names} />
      </div>
      <div className={s.card__info}>
        <NavLink to={`/route/${index}`}
                 onClick={()=>{
                  Storage.set('prevPage', `${window.location.pathname}${window.location.search}`)
                 }}
        >
          <div className={s.card__info__points}>
            {route.names.map((el, index) => {
              return <>
                <Text color={'dark'} size={'big'}>{el}</Text>
                {index !== route.names.length - 1 && <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H17M17 5.5L13 1.5M17 5.5L13 9.5" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              </>
            })}
          </div>
        </NavLink>
        <div className={s.card__info__table}>
          <table>
            <tr>
              <td>Общее расстояние:</td>
              <td className={s.card__info__table__td_sec}>{`${route.distance}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}км</td>
            </tr>
            <tr>
              <td>Время в пути:</td>
              <td>2 д 5 ч</td>
            </tr>
            <tr>
              <td>Тип загрузки:</td>
              <td>Любой</td>
            </tr>
          </table>
        </div>
        <Button size={'medium'}
                href={'/routes'}
                type={'link'}>Предложить цену
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L7.5 7L1.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Card;