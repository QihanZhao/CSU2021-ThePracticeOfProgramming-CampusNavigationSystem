import React from "react";
import { IComponentProps } from "../interface/IComponentProps";
const graphFromJson = require("../static/graph.json");

export default class Intro extends React.Component<IComponentProps>{
     

    render() {
        let tmp = this.props.selected[0]
        if (this.props.switched !== true) {
            return (
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-993153e2ecf1fabad50b884b85baa222_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644295939&t=020ca1af5fff53c899a95a94a5a8cb48" />
            );
        } else {
            return (
                <div>
                    
                    <img src={graphFromJson["nodes"][tmp].imgURL} />

                    <button
                        className="name"
                    >
                        {graphFromJson["nodes"][tmp].name}
                    </button>

                    <button
                        className="index"
                    >
                        {graphFromJson["nodes"][tmp].index}
                    </button>

                    <button
                        className="intro"
                    >
                        {graphFromJson["nodes"][tmp].intro}
                    </button>
                </div>

            );
        }
        
    }

}