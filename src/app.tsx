import React from "react";
import ReactDom from "react-dom";
import Point from "./components/pieces/point";
import Switch from "./components/pieces/switch";
import AbGraph from "./components/abGraph";
import Intro from "./components/Intro";
import RealMap from "./components/realMap";
import { IComponentProps } from "./interface/IComponentProps";
class App extends React.Component<null,IComponentProps>{
    constructor(){
        super(null);
        this.state = { selected: [], switched:false};
    }
    render(): React.ReactNode {
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <RealMap selected={this.state.selected} switched={this.state.switched}/>
                    <AbGraph selected={this.state.selected} switched={this.state.switched}/>
                    <Intro selected={this.state.selected} switched={this.state.switched}/>
                </div>
                <Switch selected={this.state.selected} switched={this.state.switched}/>
            </div>
        )
    }
}
ReactDom.render(
    <h1>Hello, Hanx</h1>,
    document.getElementById('root')
)