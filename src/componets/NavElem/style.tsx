import {GeneralPropsType} from "../../types";
import {getBackgroundColor} from "../../getBackgroundColor";
import styled from "styled-components";

export const SNavElem = styled.div<Pick<GeneralPropsType, 'variant'>>`
    width: 100%;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${(props) => getBackgroundColor(props.variant)}
`

