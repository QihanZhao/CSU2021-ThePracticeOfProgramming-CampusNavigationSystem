import React from 'react';
import { LineLayer, AMapScene } from '@antv/l7-react';
export default React.memo(function Map() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
      );
      const raw = await response.json();
      setData(raw);
    };
    fetchData();
  }, []);
  return (
    <>
      <AMapScene
        map={{
          center: [112.93636322021484, 28.15468707009379],
          pitch: 0,
          style: 'dark',
          zoom: 30,
        }}
        style={{
            position: 'relative',
            height:400,
            width:600
        }}
      >
        {data && (
          <LineLayer
            key={'2'}
            source={{
              data,
            }}
            size={{
              values: 1,
            }}
            color={{
              values: '#fff',
            }}
            shape={{
              values: 'line',
            }}
            style={{
              opacity: 1,
            }}
          />
        )}
      </AMapScene>
    </>
  );
});