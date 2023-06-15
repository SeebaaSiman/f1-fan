import { NavLink } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import { MenuButton } from "./MenuButton";
import logo from "@/assets/logo.png";
import {
  BgMenu,
  LinksContainer,
  Logo,
  Menu,
  NavBarContainer,
} from "./NavBarStyle";
import { useNavBar } from "./useNavBar";
import useDeviceType from "../../hook/useDeviceType";

export const NavBar = ({ onLoading }) => {
  const { clicked, handleLinkClick, toggleClicked } = useNavBar(onLoading);
  const styleIcon = {
    filter: " drop-shadow(1px 1px 1px #222)",
    marginRight: "0.5rem",
    height: "100%",
  };
  // const iconSize = "2rem";

  const deviceType = useDeviceType();
  return (
    <NavBarContainer>
      <Logo src={logo} alt="Logo" />

      <LinksContainer className={`${clicked ? "open-menu" : ""} `}>
        <NavLink onClick={handleLinkClick} className="link" to="/">
          <Unicons.UilCalender style={styleIcon} />
          <span className="text">Calendar</span>
        </NavLink>

        <NavLink
          onClick={handleLinkClick}
          className="link"
          to="/Current-Season"
        >
          <Unicons.UilAnalysis style={styleIcon} />
          <span className="text">Current Season</span>
        </NavLink>

        {deviceType === "desktop" ? (
          <NavLink onClick={handleLinkClick} className="link" to="/News">
            <Unicons.UilNewspaper style={styleIcon} />
            <span className="text">News</span>
          </NavLink>
        ) : null}

        <NavLink onClick={handleLinkClick} className="link" to="/History">
          <Unicons.UilChartBar style={styleIcon} />
          <span className="text">History</span>
        </NavLink>
      </LinksContainer>

      <Menu>
        <MenuButton clicked={clicked} toggleClicked={toggleClicked} />
        <BgMenu className={`${clicked ? "open-menu" : ""} `}></BgMenu>
      </Menu>
    </NavBarContainer>
  );
};
