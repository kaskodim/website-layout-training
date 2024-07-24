import {GeneralPropsType} from "../../types";
import {SAdvantages} from "./style";

export function Advantages(props: GeneralPropsType) {
    return (
        <SAdvantages variant={props.variant}>{props.text}</SAdvantages>

    )
}