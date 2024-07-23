import {SNavElem} from "./style";
import {GeneralPropsType,} from "../../types";

export function NavElem(props: GeneralPropsType) {
    return (
        <SNavElem variant={props.variant}>{props.text}</SNavElem>
    )
}

