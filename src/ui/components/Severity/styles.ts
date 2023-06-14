import { styled } from "styled-components";

export const SeverityContainer = styled.div`
    display: flex;
    color: var(--white-color);
    & .sev-container {
        display: flex;
        margin-right: 10px;
        &.LOW {
            & .name {
                background-color: var(--light-green-color);
                color: var(--green-color);

            }
            & .count {
                background-color: var(--green-color);
            }
        }
        &.MEDIUM {
            & .name {
                background-color: var(--light-yellow-color);
                color: var(--yellow-color);
            }
            & .count {
                background-color: var(--yellow-color);
            }
        }
        &.HIGH {
            & .name {
                background-color: var(--light-red-color);
                color: var(--red-color);
            }
            & .count {
                background-color: var(--red-color);
            }
        }
    }
    & .label {
        padding: 1px 8px;
    }

    & .name {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    & .count {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`