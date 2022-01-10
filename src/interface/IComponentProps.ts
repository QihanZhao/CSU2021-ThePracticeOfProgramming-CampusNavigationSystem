import { IPoint } from "./IPoint";
interface IComponentProps{
    selected: Array<string>
    switched: boolean
    mintree?: boolean
    solutions?:Array<string[]>
    selectSolutionIndex?:number
}
export { IComponentProps }