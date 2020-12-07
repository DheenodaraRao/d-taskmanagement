import React from 'react';
import { Constants } from '../../constants/Constant';
import UserIcon from "../../img/donn-gabriel-baleva-U-Z4P2H3KFE-unsplash.png";

export default function AppBar(props) {

  const userIconStyle = {
    width: '48px',
    height: '48px',
    marginLeft: '10px'
  };

  const logoutBtnStyle = {
    color: '#6D8187',
    textAlign: 'right'
  }

  const containerStyle = {
    background: '#FFFFFF',
    boxShadow: '0px 3px 6px #00000029'
  }

  return (
      <div style={containerStyle}>
        <div className="d-flex flex-row ml-3 mr-3 pt-3 mb-2">
        <div className="p-2">
          <img src={UserIcon} alt="usericon" />
        </div>

        <div 
            className="p-2 align-self-center">
               <p>{localStorage.getItem(Constants.NAME)}</p>
        </div>
        <div className="p-2 align-self-center ml-auto">
            <p onClick={() => props.handleLogout()} style={logoutBtnStyle} >
              LogOut
            </p>
        </div>
        </div>
      </div>
  );
}