import styled from "styled-components";

export const NavItemsContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    background-color: var(--white-color);
    box-shadow: 4px 0px 4px 2px rgba(1, 1, 1, 0.2);
    > li > a{
        padding: .9rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        &.active {
            color: var(--primary-color);
            background-color: var(--light-primary-color);
            border-bottom: 3px solid var(--primary-color);
        }
        margin-right: 3rem;
        .title {
            font-weight: 500;
            margin-left: .5rem;
        }
    }
    
`