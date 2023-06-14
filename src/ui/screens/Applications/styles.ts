import { styled } from "styled-components";

export const VulnerabilityContainer = styled.div`
    & .table-container {
        background: none;
        box-shadow: none;
        margin: 0px 2rem;
        & .vul-table {
            
        }
       & .table-head > tr > th {
            background-color: var(--background-color);
            border-top: 1px solid var(--border-color);
            padding: 5px;
            font-weight: 600;
            color: gray;

            > svg {
                height : .7em;
                margin-left: 8px;
                padding-bottom: 1px;
            }
       }

       & .group-name {
            max-width: 400px;
            overflow-x: hidden;
        }

       & .table-body > tr > td {
            padding: 5px;
            border-radius: 4px;
            & .file-name-container {
                display: flex;
                & .icon-container {
                    background-color: var(--background-color);
                    margin-right: 12px;
                    padding: 0 10px;
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    font-size: 12px;
                    color: gray;
                    & .count {
                        margin-left: 5px;
                    }
                }
            }
       }

       & .collapsable-row {
        > td {
            border: none;
            border-top: none;
            box-shadow: none;
        }
       }
       & .first-column {
            border-left: 1px solid var(--border-color);
            width: 20px;

       }
       & .last-column {
        border-right: 1px solid var(--border-color);
        
   }
    }
`
export const ProgressContainer = styled.div`

`

export const TableCellContainer = styled.td`

`