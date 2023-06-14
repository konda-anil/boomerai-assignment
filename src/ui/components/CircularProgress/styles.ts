import { styled } from "styled-components";

export const CircularProgressContainer = styled.div`
    position: relative;
    display: inline-flex;
    & .MuiCircularProgress-root {
        &.yellow {
            color: var(--yellow-color);
        }
        &.red {
            color: var(--red-color);
        }
        &.green {
            color: var(--green-color);
        }
    }
`