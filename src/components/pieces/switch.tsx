import React from "react";
import { IComponentProps } from "../../interface/IComponentProps";

interface SwithchProps extends IComponentProps {
    operation: Function
}

export default class Switch extends React.Component<SwithchProps>{

    render() {
        return (
            <input
                type="checkbox"
                className="switch"
                onClick={()=>this.props.operation()}
            />
        )
    }
}