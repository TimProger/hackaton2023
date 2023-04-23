import React, {useEffect, useState} from 'react';
import s from '../styles/pages/Main.module.scss'
import Text from "../components/UI/Text";
import Card from "../components/Card";
import Button from "../components/UI/Button";
import {YMaps} from "@pbe/react-yandex-maps";
import data from '../test.json'
import { IRoute } from 'src/types/routes.types';

const Routes: React.FC = () => {

  const [counter, setCounter] = useState<number>(10)
  const [routes, setRoutes] = useState([...data.map((el: IRoute) => {
    el.geo = el.geo.map((el) => {
      return [el[1], el[0]]
    })
    return el
  })].splice(0, counter))

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  const seeMore = () => {
    setCounter(counter + 10)
    setRoutes(prev => [...prev, ...data.map((el: IRoute) => {
      el.geo = el.geo.map((el) => {
        return [el[1], el[0]]
      })
      return el
    }).splice(counter, 10)])
  }

  return (
    <>
      <div className={s.main__routes}>
        <Text color={'dark'} size={'bigger'}>Рейсы</Text>
        <YMaps>
          {routes.length > 0 && routes.map((el, index) => (<Card index={index} key={index} route={el}/>))}
        </YMaps>
        <Button size={'medium'}
                onClick={seeMore}>Показать ещё
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L7.5 7L1.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </>
  );
}

export default Routes;