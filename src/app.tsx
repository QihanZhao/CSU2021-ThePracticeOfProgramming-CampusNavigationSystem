import React from "react";
import ReactDom from "react-dom";
import Point from "./components/pieces/point";
import Switch from "./components/pieces/switch";
import AbGraph from "./components/abGraph";
import Intro from "./components/Intro";
import RealMap from "./components/realMap";
import { IComponentProps } from "./interface/IComponentProps";

const graphFromJson = require("./static/graph.json");

class App extends React.Component<null,IComponentProps>{
    constructor(){
        super(null);
        this.state = { selected:[], switched:false};
    }
    handleClick() {
        if(this.state.switched === false)
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
                arr.splice(0,1);
            }
        }

        arr.push(key)
        this.setState({
            selected: arr
        })
    }

    render(): React.ReactNode {
        const buttons = Object.keys(graphFromJson["nodes"]).map(key => <button onClick={() => this.handleChose(key)}>{key}</button>);
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    {/* <RealMap selected={this.state.selected} switched={this.state.switched}/> */}
                    <AbGraph selected={this.state.selected} switched={this.state.switched}/>
                    <Intro selected={this.state.selected} switched={this.state.switched}/>
                </div>
                {buttons}
                <Switch selected={this.state.selected} switched={this.state.switched} operation={()=>this.handleClick()}/>
            </div>
        )
    }
}
ReactDom.render(
    React.createElement(App),
    document.getElementById('root')
)