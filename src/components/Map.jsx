// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {YMaps, Map, Polyline, Placemark} from '@pbe/react-yandex-maps';

const MapComponent = ({coords, pointNames}) => {

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const ymaps = window.ymaps;
    ymaps.ready(() => {
      coords.map((_el, index) => {
        if(index === coords.length - 1) return
        ymaps
          .route([coords[index], coords[index+1]])
          .then(route => {
            setRoutes(prev => [...prev, route]);
          }, (e)=>{
            console.log(JSON.stringify(e))
          })
      })
    });
  }, []);

  return (
      <Map
        style={{width: '100%', height: '100%'}}
        defaultState={{
          center: coords[0],
          zoom: 6
        }}>
        {coords.length > 0 && coords.map((el, index)=>{
          if(index === coords.length - 1){
            return (
              <>
                {JSON.stringify(coords[0]) !== JSON.stringify(coords[index]) && <Placemark
                  key={index + 'h'}
                  geometry={coords[index]}
                  options={{
                    iconColor: index === 0 ? 'red' : 'blue'
                  }}
                />}
              </>
            )
          }
          return <Placemark
            key={index}
            balloonOpen={true}
            geometry={el}
            options={{
              iconColor: index === 0 ? 'red' : 'blue'
            }}
          />
        })}
        {routes.length > 0 && routes.map((el, index)=>(<Polyline
          key={index}
          geometry={el.getPaths().get(0).geometry}
          options={{
            strokeColor: el.color,
            strokeWidth: 5,
            strokeOpacity: 0.8,
          }}
        />))}
      </Map>
  );
}

export default MapComponent;