import styled from "styled-components";
import {GeneralPropsType} from "../../types";
import {getBackgroundColor} from "../../getBackgroundColor";

export const SBuns = styled.div<Pick<GeneralPropsType, 'variant'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    padding: 20px;
    text-align: center;

    ${(props) => getBackgroundColor(props.variant)}
`

export const STextBuns = styled.p`
    color: white;
    font-size: 14px;
`