
import {GeneralPropsType} from "../../types";
import {SBuns, STextBuns} from "./style";


export function Buns (props: GeneralPropsType) {
    return (
        <SBuns variant={props.variant}>
            <img src={props.src} width={50} alt={'svg'}/>
           <STextBuns>
               {props.text}
           </STextBuns>
        </SBuns>
    )

}