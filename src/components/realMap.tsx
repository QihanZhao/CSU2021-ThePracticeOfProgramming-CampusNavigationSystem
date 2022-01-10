import React from 'react';
import { LineLayer, MapboxScene } from '@antv/l7-react';
const table: any = {
  node1: {
    node2: "path2",
    node9: "path1",
  },
  node2: {
    node1: "path2",
    node3: "path3"
  },
  node3: {
    node2: "path3",
    node4: "path4",
    node7: "path5",
    node5: "path6"
  },
  node4: {
    node3: "path4",
    node7: "path7"
  },
  node5: {
    node3: "path6",
    node6: "path9",
    node8: "path10"
  },
  node6: {
    node5: "path9",
    node7: "path8"
  },
  node7: {
    node4: "path7",
    node3: "path5",
    node6: "path8",
    node10: "path11"
  },
  node8: {
    node5: "path10",
    node10: "path12"
  },
  node9: {
    node1: "path1",
    node10: "path13"
  },
  node10: {
    node9: "path13",
    node7: "path11",
    node8: "path12"
  }
};
export default React.memo(function Map(props: { solution: string[] }) {
  //   const fixPosition = (obj:GeoJSON.FeatureCollection<LineString>)=>{
  //       obj.features[0].geometry.coordinates = obj.features[0].geometry.coordinates.map(cor=>[cor[0]+0.00509619713,cor[1]-0.00525421806]);
  //         return obj;
  //     }
  const convert = (solution: string[]): { source: string, target: string }[] => {
    let edges = new Array();
    for (let i = 0; i < solution.length - 1; i++) {
      edges[i] = {
        source: solution[i] + "",
        target: solution[i + 1] + "",
      };
    }
    return edges;
  }
  const edges = convert(props.solution);
  const fetchData = (edges: { source: string, target: string }[]) => {
    return edges.map(edge => table[edge.target][edge.source] + '.json').map(filename => require("../static/" + filename));
    //map((obj:GeoJSON.FeatureCollection<LineString>) =>fixPosition(obj))
  }
  const myLayer = (data: any) => {
    return (
      <LineLayer
        key={'2'}
        source={{
          data: data
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
    )
  }
  console.log("data>>>", fetchData([{ source: "node2", target: "node1" }, { source: "node2", target: "node3" }]));
  return (
    <>
      <MapboxScene
        map={{
          center: [112.93636322021484, 28.15468707009379],
          pitch: 0,
          style: 'dark',
          zoom: 10,
        }}
        style={{
          position: 'relative',
          height: 400,
          width: 600
        }}
      >
        {fetchData(convert(props.solution)).map(obj => myLayer(obj))}
      </MapboxScene>
    </>
  );
});