import styled from "styled-components";
import {MainContent} from "./componets/MainContent/MainContent";

export const SWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 15px;
    font-size: 18px;
    color: white;
`
export const SHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 1px;
`

export const SContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;
`

export const SServiceWrapper = styled.div`
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const SMainContent = styled(MainContent)`
    width: 100%;
`

