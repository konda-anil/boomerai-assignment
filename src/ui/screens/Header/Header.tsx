import React from "react";
import { HeaderContainer } from "./styles";
import BomanLogo from '../../../assets/images/boman-logo.png';
import TextInput from "../../components/TextInput/TextInput";
import { faAngleDown, faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faBell } from "@fortawesome/free-regular-svg-icons";
import ProfilePicture from '../../../assets/images/stark.jpg';

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <div className="left-container">
        <div className="brand-container">
          <div className="logo-container">
            <img src={BomanLogo} alt=""/>
          </div>
          <div className="name-container">Boman.ai</div>
        </div>
        <div className="search-container">
          <TextInput icon={faSearch} placeholder="Search Applications"/>
        </div>
      </div>
      <div className="right-container">
        <div className="icon">
          <FontAwesomeIcon icon={faGear}/>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faBell}/>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCircleQuestion}/>
        </div>
        <div className="user">
          <div className="profile">
            <img src={ProfilePicture} alt=""/>
          </div>
          <FontAwesomeIcon icon={faAngleDown}/>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
