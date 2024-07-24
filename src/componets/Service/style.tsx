import styled from "styled-components";
import {GeneralPropsType} from "../../types";
import {getBackgroundColor} from "../../getBackgroundColor";

export const SService = styled.div<Pick<GeneralPropsType, 'variant' >>`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => getBackgroundColor(props.variant)}
`