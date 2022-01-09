import React from "react";
import { IComponentProps } from "../interface/IComponentProps";
import G6 from '@antv/g6';
import { convertJSONtoG6 } from "../utils/convertToG6";
const graphFromJson = require("../static/graph.json");

export default class AbGraph extends React.Component<IComponentProps>{
    private graph: any = null;
    componentDidMount() {
        this.graph = new G6.Graph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
            layout: {
                type: 'grid',
                workerEnabled: true
            }
        });
        const temp = convertJSONtoG6(graphFromJson,this.props.selected);
        this.graph.data(temp);
        this.graph.render();
    }
    componentDidUpdate() {
        this.graph.clear();
        const temp = convertJSONtoG6(graphFromJson, this.props.selected);
        this.graph.data(temp);
        this.graph.render();
    }
    render() {
        return (
            <div id="mountNode"></div>
       ) 
    }
}