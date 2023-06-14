import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    background-color: var(--header-color);
    color: var(--white-color);
    & .left-container {
        display: flex;
        align-items: center;
        & .brand-container {
            margin-right: 2rem;
            display: flex;
            align-items: center;
            & .logo-container {
                width: 60px;
                > img {
                    width: 100%;
                }
            }
            & .name-container {
                margin-left: 1rem;
                font-weight: 600;
            }
        }
        & .search-container {
            width: 250px;
        }
    }
    & .right-container {
        display: flex;
        align-items: center;

        & .icon {
            margin-left: 1rem;
            cursor: pointer;
        }

        & .user {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            cursor: pointer;
            & .profile {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 4px;
                > img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
        }
    }
`