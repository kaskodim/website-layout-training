import styled from "styled-components";

export const SImageWrapper = styled.div`
    width: 100%;
    position: relative;
`

export const SMainImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

export const STextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    background-color: #0000007d;
`

export const STextHeading = styled.p`
    font-size: 28px;
    font-weight: bold;
`

export const STextDescription = styled.p`
    padding: 10px;
    margin: 0;
    text-align: center;
    font-weight: bold;
`