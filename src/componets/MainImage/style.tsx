import styled from "styled-components";

export const SImageWrapper = styled.div`
    width: 100%;
    position: relative;
`

export const SMainImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

export const STextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: white;
`

export const STextHeading = styled.h1`
    font-size: 20px;
`

export const STextDescription = styled.p`
    margin: 0;
    font-size: 12px;
    text-align: center;
    font-weight: bold;

`