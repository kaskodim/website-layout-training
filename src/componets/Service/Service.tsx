import {SService} from "./style";
import {GeneralPropsType} from "../../types";

export function Service (props: GeneralPropsType){
    return(
        <SService variant={props.variant}>{props.text}</SService>
    )
}