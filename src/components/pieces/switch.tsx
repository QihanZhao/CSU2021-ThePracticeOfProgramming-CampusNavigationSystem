import React from "react";
import { IComponentProps } from "../../interface/IComponentProps";

interface SwithchProps extends IComponentProps {
    operation: Function
}

export default class Switch extends React.Component<SwithchProps>{

    render() {
        return (
            <div className="mb-3 flex flex-row content-center justify-center">
                <span className="text-gray-400 font-medium">
                    路径查询
                </span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id="Blue" disabled={this.props.mintree} className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        onChange={()=>this.props.operation()}
                    />
                    <label htmlFor="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    </label>
                </div>
                <span className="text-gray-400 font-medium">
                    景点查询
                </span>
            </div>
        )
    }
}