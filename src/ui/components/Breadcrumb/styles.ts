import styled from "styled-components";

export const BreadcrumContainer = styled.div`
    padding: 2rem;
    padding-bottom: 0;
    & .title {
        > svg {
            font-size: 20px;
            color: var(--primary-color);
        }
        > span {
            font-size: 1.2rem;
            font-weight: 500;
            margin-left: 1rem;
        }
    }

    & .path {
        > span {
            font-weight: 500;
            font-size: .8rem;
        }
    }
`