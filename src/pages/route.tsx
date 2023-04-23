import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import s from '../styles/pages/Route.module.scss'
import Text from "../components/UI/Text";
import Map from "../components/Map";
import {YMaps} from "@pbe/react-yandex-maps";
import { IRoute } from 'src/types/routes.types';
import { Storage } from 'src/utils/Storage';
import any_img from '../static/any.png'
import back_img from '../static/back.png'
import side_img from '../static/side.png'
import data from '../test.json'

const Routes: React.FC = () => {

  const [routes, _setRoutes] = useState<IRoute[]>(data.map((el: IRoute) => {
    el.geo = el.geo.map((el) => {
      return [el[1], el[0]]
    })
    return el
  }))

  const [route, setRoute] = useState<IRoute | null>(null)
  const {index} = useParams();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(index){
      setRoute(routes.find((_el, index2)=>index2 === +index) || null)
    }
  },[])

  if(!route){
    return <div>
      not found
    </div>
  }

  return (
    <>
    <Text no_td
          className={s.route__back}
          type={'link'}
          href={(()=>{
            if (typeof window !== 'undefined') {
              return Storage.get('prevPage')
            }
          })()}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      Назад</Text>
      <div className={s.route}>
        <div className={s.route__points}>
          {route.names.map((el, index) => {
            return <>
              <Text color={'dark'} size={'big'}>{el}</Text>
              {index !== route.names.length - 1 && <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5H17M17 5.5L13 1.5M17 5.5L13 9.5" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
            </>
          })}
        </div>
        <div className={s.route__map}>
          <YMaps>
            <Map pointNames={route.names} coords={route.geo} />
          </YMaps>
        </div>
        <div className={s.route__info}>
          <div className={s.route__info__table}>
            <table>
              <tr>
                <td>Общее расстояние:</td>
                <td className={s.route__map__table__td_sec}>{`${route.distance}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}км</td>
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
          <div className={s.route__info__type}>
            {route.type === 'Любой' ? (
              <div className={s.route__info__type__info}>
                <img src={any_img} alt="" />
                <Text>Любой тип загрузки означает, что вы сможете загрузиться как сзади, так и сбоку.</Text>
              </div>
            ) : route.type === 'Сзади' ? (
              <div className={s.route__info__type__info}>
                <img src={back_img} alt="" />
                <Text>Тип погрузки сзади означает, что вы сможете загрузиться только сзади.</Text>
              </div>
              ) : (
                <div className={s.route__info__type__info}>
                  <img src={side_img} alt="" />
                  <Text>Тип погрузки сбоку означает, что вы сможете загрузиться только сбоку.</Text>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Routes;