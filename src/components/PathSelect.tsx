import React from "react";
const graphFromJson = require("../static/graph.json");
export default class PathSelect extends React.Component<{ solutions: Array<string[]>, setIndex:(index:number)=>void }>{
    render(): React.ReactNode {
        const Card1 = (order:number,text:string) => {
            return (
                <button className="w-full bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        onClick={()=>this.props.setIndex(order)}
                >
                    <dt className="text-sm font-medium text-gray-500">
                        {order+1}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {text}
                    </dd>
                </button>
            )
        }
        const Card2 = (order:number,text:string) => {
            return (
                <button className="w-full bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        onClick={()=>this.props.setIndex(order)}
                >
                    <dt className="text-sm font-medium text-gray-500">
                        {order+1}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {text}
                    </dd>
                </button>
            )
        }
        const solutionToString =(solution:string[])=>{
            return solution.map(key=>graphFromJson['nodes'][key].name).reduce((acc,cur)=>acc+'->'+cur.toString(),'');
        }
        return (

            <div className="bg-white max-w-2xl max-h-96 shadow overflow-y-scroll sm:rounded-lg">
                <div className="border-t border-gray-200">
                    <dl>
                        {this.props.solutions.map((solution,index)=>index%2===0? Card1(index,solutionToString(solution)):Card2(index,solutionToString(solution)))}
                    </dl>
                </div>
            </div>

        )
    }
}