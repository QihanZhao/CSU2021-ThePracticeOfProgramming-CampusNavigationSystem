import React from "react";
import ReactDom from "react-dom";
import Point from "./components/pieces/point";
import Switch from "./components/pieces/switch";
import AbGraph from "./components/abGraph";
import Intro from "./components/Intro";
import RealMap from "./components/realMap";
import { IComponentProps } from "./interface/IComponentProps";
import { msTree } from "./utils/prim";

const graphFromJson = require("./static/graph.json");

class App extends React.Component<null, IComponentProps>{

    constructor() {
        super(null);
        this.state = { selected: [], switched: false, mintree: false };
    }
    handleClick() {
        if (this.state.switched === false)
            this.setState({
                switched: true
            })
        else
            this.setState({
                switched: false
            })
    }

    handleChose(key: string) {
        const arr = this.state.selected;
        if (arr.length === 0) {

        } else if (arr.length === 1) {
            if (this.state.switched === true) {
                arr.pop();
            } else if (this.state.switched === false) {

            }
        } else if (arr.length === 2) {
            if (this.state.switched === true) {
                arr.pop();
                arr.pop();
            } else if (this.state.switched === false) {
                arr.splice(0, 1);
            }
        }

        arr.push(key)
        this.setState({
            selected: arr
        })
    }

    handlePrim() {
        if (this.state.mintree === false) {
            this.setState({
                mintree: true
            })
        } else {
            this.setState({
                mintree: false
            })
        }
    }

    render(): React.ReactNode {
        const Button =(props: { name: string })=>{
            console.log("button>>>", props);
            return (<button type="button" className="border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2"
                onClick={() => this.handleChose(props.name)}
            >
                {props.name}
            </button>)
        }
        const buttons = Object.keys(graphFromJson["nodes"]).map(key => <Button key={key} name={key}/>);
        console.log(buttons);
        return (
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row h-4/5">
                    {/* <RealMap selected={this.state.selected} switched={this.state.switched}/> */}
                    <AbGraph selected={this.state.selected} switched={this.state.switched} mintree={this.state.mintree} />
                    <Intro selected={this.state.selected} switched={this.state.switched} />
                </div>
                <div className="w-full h-1/5 flex flex-row">
                    <div className="flex flex-row items-center">
                        {buttons}
                    </div>
                    <Switch selected={this.state.selected} switched={this.state.switched} operation={() => this.handleClick()} />
                    <button onClick={() => this.handlePrim()}>"最小生成树"</button>
                </div>
            </div>
        )
    }
}
ReactDom.render(
    React.createElement(App),
    document.getElementById('root')
)