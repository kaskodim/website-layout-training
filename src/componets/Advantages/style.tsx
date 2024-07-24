import styled from "styled-components";
import {getBackgroundColor} from "../../getBackgroundColor";
import {GeneralPropsType} from "../../types";

export const SAdvantagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: white;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
`

export const SAdvantages = styled.div<Pick<GeneralPropsType, 'variant'>>`
    padding: 20px;
    width: 50%;
    ${(props) => getBackgroundColor(props.variant)}
`

export const STextBlockOfBuns = styled.p`
    display: block;
    text-align: center;
    color: white;
    font-size: 24px;
`

export const SBunsWrapper = styled.div`
    display: flex;
    gap: 20px;
`

