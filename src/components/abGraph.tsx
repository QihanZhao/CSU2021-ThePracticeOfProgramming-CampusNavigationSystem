import React, { useEffect } from "react";
import { IComponentProps } from "../interface/IComponentProps";
import { convertJSONtoG6 } from "../utils/convertToG6";
import { findShortestPath, findAllPath } from "@antv/algorithm";
import { Graph, GraphData } from "@antv/g6";
import { msTree } from "../utils/prim";
const graphFromJson = require("../static/graph.json");
interface IAbGraphProps extends IComponentProps {
    setSolutions: (solutions: Array<string[]>) => void
}
export default class AbGraph extends React.Component<IAbGraphProps>{
    private graph:Graph = null;
    solutionsSubmited:boolean = false;
    renderG6Graph = (G6Data: GraphData) => {
        this.graph = new Graph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
            layout: {
                type: 'random',
            }
        });
        this.graph.data(G6Data);
        this.graph.render();
    }
    updateG6Graph = (G6Data:GraphData) =>{
        this.graph.clear();
        this.graph.data(G6Data);
        this.graph.render();
    }
    drawShortestPath = (selected: string[], G6Data: any) => {
        if (selected.length === 2) {
            const { length, path, allPath } = findShortestPath(G6Data, selected[0], selected[1], false, "weight");
            for (let i = 0; i < path.length - 1; i++) {
                for (let j = 0; j < G6Data["edges"].length; j++) {
                    if (path[i] === G6Data["edges"][j]["source"] && path[i + 1] === G6Data["edges"][j]["target"]
                        || path[i + 1] === G6Data["edges"][j]["source"] && path[i] === G6Data["edges"][j]["target"]) {

                        G6Data["edges"][j].style = {
                            stroke: 'red'
                        }
                    }
                }
            }
        }
        return G6Data;
    }
    drawMinTree = (G6Data: GraphData) => {
        G6Data["edges"] = msTree;
        for (let i = 0; i < G6Data["nodes"].length; i++) {
            G6Data["nodes"][i]["style"] = undefined;
        }
        return G6Data;
    }
    submitAllPath = (G6Data: any, selected: string[]) => {
        const allPath = findAllPath(G6Data, selected[0], selected[1], false);
        this.solutionsSubmited = true;
        this.props.setSolutions(allPath);
    }
    componentDidMount(): void {
        const temp = convertJSONtoG6(graphFromJson, this.props.selected);
        this.renderG6Graph(temp);
    }
    shouldComponentUpdate(nextProps: Readonly<IAbGraphProps>, nextState: Readonly<{}>, nextContext: any): boolean {
        if(this.solutionsSubmited===true){
            this.solutionsSubmited = false;
            return false;
        }
        return true;
    }
    componentDidUpdate(prevProps: Readonly<IAbGraphProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props.selected);
        const temp = convertJSONtoG6(graphFromJson, this.props.selected);
        if (this.props.mintree) {
            const data = this.drawMinTree(temp);
            this.updateG6Graph(data);
            return;
        }
        if (this.props.selected.length === 1) {
            this.updateG6Graph(temp);
            return;
        }
        const data = this.drawShortestPath(this.props.selected, temp);
        this.submitAllPath(temp,this.props.selected);
        this.updateG6Graph(data);
    }
    render(): React.ReactNode {
        return (
            <div id="mountNode"></div>
        )
    }
}