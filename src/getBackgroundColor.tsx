import {GeneralPropsType} from "./types";
import {css} from "styled-components";

export function getBackgroundColor(color: GeneralPropsType['variant']) {

    switch (color) {
        case 'blue':
            return css`background-color: rgb(60 128 238)`;
        case 'green':
            return css`background-color: rgb(90 165 24)`;
        case 'yellow':
            return css`background-color: rgb(209 172 38)`;
        case 'violet':
            return css`background-color: rgb(81 50 171)`;
        case 'orange':
            return css`background-color: rgb(210 71 37)`;
        case 'pink':
            return css`background-color: rgb(171 51 143)`;
        case 'red':
            return css`background-color: rgb(186 22 22)`;
    }
}