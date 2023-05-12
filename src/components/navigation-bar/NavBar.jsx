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
export const NavBar = ({ handleLoading }) => {
  const { clicked, handleLinkClick, toggleClicked } = useNavBar(handleLoading);
  const styleIcon = {
    filter: " drop-shadow(1px 1px 1px #222)",
    marginRight: "0.5rem",
    height: "100%",
  };
  const iconSize = "2rem";
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
        <NavLink onClick={handleLinkClick} className="link" to="/News">
          <Unicons.UilNewspaper style={styleIcon} />
          <span className="text">News</span>
        </NavLink>
        <NavLink onClick={handleLinkClick} className="link" to="/History">
          <Unicons.UilChartBar style={styleIcon} />
          <span className="text">History</span>
        </NavLink>
        <NavLink onClick={handleLinkClick} className="link" to="/Tools">
          <Unicons.UilCodeBranch style={styleIcon} />
          <span className="text">Tools</span>
        </NavLink>
      </LinksContainer>
      <Menu>
        <MenuButton clicked={clicked} toggleClicked={toggleClicked} />
        <BgMenu className={`${clicked ? "open-menu" : ""} `}></BgMenu>
      </Menu>
    </NavBarContainer>
  );
};
