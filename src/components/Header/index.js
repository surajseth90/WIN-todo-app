import Logo from "../../assets/images/logo.svg";
import AddTodoIcon from "../../assets/images/add-list-icon.svg";

import "./style.scss";
import { useEffect, useState } from "react";

function Header(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="header">
      <div className="header-circle"></div>
      <div className="header-wrapper">
        <div className="header-left-container">
          <img className="header-logo" src={Logo} />
        </div>
        <div className="header-right-container">
          <button
            className="header-add-item"
            onClick={() => props.setScreen(2)}
          ></button>
          <div className="header-user-profile">
            <img
              className="header-user-image"
              src={userData.results && userData?.results[0]?.picture?.medium}
              alt="user"
            />
            <span>{userData.results && userData?.results[0]?.name?.first}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
