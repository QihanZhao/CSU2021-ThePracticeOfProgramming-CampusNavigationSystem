import React from "react";
import { IComponentProps } from "../interface/IComponentProps";
const graphFromJson = require("../static/graph.json");

export default class Intro extends React.Component<IComponentProps>{
    render() {
        let tmp = this.props.selected[0];
        const data = this.props.switched ? graphFromJson["nodes"][tmp] : {
            imgURL: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-993153e2ecf1fabad50b884b85baa222_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644295939&t=020ca1af5fff53c899a95a94a5a8cb48",
            name: 'Campus Navigation System For CSU ',
            intro: 'Welcom to CSU !'
        };
        return (
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                    <img alt="blog photo" src={data.imgURL} className="max-h-40 w-full object-cover" />
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-indigo-500 text-md font-medium">
                        </p>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {data.name}
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                            {data.intro}
                        </p>
                    </div>
                </a>
            </div>
        );
    }

}