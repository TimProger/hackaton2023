import React, {useState} from 'react';
import s from '../styles/pages/Main.module.scss'
import Button from '../components/UI/Button';
import Text from '../components/UI/Text';
import Card from "../components/Card";
import {YMaps} from "@pbe/react-yandex-maps";
import data from '../test.json'
import { IRoute } from 'src/types/routes.types';

const App: React.FC = () => {

  const [routes, _setRoutes] = useState<IRoute[]>(data.splice(0, 10))

  return (
    <div className={s.main}>
      <div className={s.main__info}>
        <Text color={'dark'} size={'bigger'}>Эффективные грузоперевозки: <Text size={'bigger'} color={'gradient'} type={'span'}>оптимизируем маршруты</Text> для максимальной эффективности</Text>
        <Text>
          Узнайте, как наша компания может оптимизировать маршруты вашего
          груза для экономии времени и денег.
        </Text>
        <div className={s.main__info__btns}>
          <Button size={'medium'}
                  onClick={()=>{
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }}
                  style={'borderless'}>
            О компании
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L5 17M5 17L9 13M5 17L0.999999 13" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button size={'medium'}
                  href={'/routes'}
                  type={'link'}>Найти рейс
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L7.5 7L1.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
      <div className={s.main__about}>
        <Text color={'dark'} size={'bigger'}>Наша компания сделает ваши рейсы <Text size={'bigger'} color={'gradient'} type={'span'}>выгоднее</Text></Text>
        <Text>
          Наша компания может оптимизировать маршруты для экономии времени и денег, что сможет дать вам большие возможности в развитии и доставки грузов. Для грузоперевозчиков это хорошая возможность экономить топливо и время, ведь с нашей платформой он сможет выбирать круговые маршруты для доставки грузов.
        </Text>
      </div>
      <div className={s.main__routes}>
        <Text color={'dark'} size={'bigger'}>Рейсы</Text>
        <YMaps>
          {routes.length > 0 && routes.map((el, index) => (<Card index={index} key={index} route={el}/>))}
        </YMaps>
        <Button size={'medium'}
                href={'/routes'}
                type={'link'}>Показать все
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L7.5 7L1.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default App;