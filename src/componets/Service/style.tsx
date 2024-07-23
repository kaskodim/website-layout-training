import styled from "styled-components";
import {GeneralPropsType} from "../../types";
import {getBackgroundColor} from "../../getBackgroundColor";

export const SService = styled.div<Pick<GeneralPropsType, 'variant'>>`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid black;

    ${(props) => getBackgroundColor(props.variant)}

`