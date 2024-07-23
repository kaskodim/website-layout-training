import {GeneralPropsType} from "../../types";
import {getBackgroundColor} from "../../getBackgroundColor";
import styled from "styled-components";

export const SNavElem = styled.div<Pick<GeneralPropsType, 'variant'>>`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;

    ${(props) => getBackgroundColor(props.variant)}
`

