import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BreadcrumContainer } from "./styles";

type BreadcrumbComponentProps = {
  title: string;
  path: string[];
};

const BreadcrumbComponent = ({ title, path }: BreadcrumbComponentProps) => {
    console.log('path ::', window.location.pathname);
  return <BreadcrumContainer>
    <div className="title">
        <FontAwesomeIcon icon={faCodeFork}/>
        <span>{title}</span>
    </div>
    <div className="path">
        {path.map((p, index) => <span key={p+index}> {p} {index != path.length - 1 ? '/' : ''}</span>)}
    </div>
  </BreadcrumContainer>
};

export default BreadcrumbComponent;
