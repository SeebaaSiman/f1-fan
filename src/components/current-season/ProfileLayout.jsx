import styled from "styled-components";
import { BoxStyle, device } from "@/Layout/StylesGlobal";
import {
  BgColor,
  ContentDriver,
  ContentTeam,
  Divider,
  useProfileDriver,
  useProfileTeam,
} from "@/components";
export const ProfileLayout = ({ id, type }) => {
  let profileData = {};
  if (type === "drivers") {
    profileData = useProfileDriver(id);
  } else {
    profileData = useProfileTeam(id);
  }
  const {
    pointsTotal,
    constructorsName,
    winsTotal,
    championsWorlds,
    bestPosition,
    variant,
    depur2,
    name,
    name2,
    numberDriver,
    img,
    imgCar,
    
  } = profileData;

  return (
    <ProfileContainer variant={variant} BgColor={BgColor}>
      <span>
        {type === "drivers" ? <h1>{`${name} ${name2}`}</h1> : <h1>{id}</h1>}
        {type === "drivers" ? (
          <>
            <Divider />
            <h1>{numberDriver}</h1>
          </>
        ) : (
          ""
        )}
      </span>

      <Wrapper>
        <ImgContainer ss={type}>
          {type === "drivers" ? <img src={img} /> : <img src={imgCar} />}
        </ImgContainer>
        {type === "drivers" ? (
          <ContentDriver
            constructors={constructorsName}
            dataCurrent={depur2}
            totalPoints={pointsTotal}
            totalWins={winsTotal}
            bestPosition={bestPosition}
            championsWorlds={championsWorlds}
          />
        ) : (
          <ContentTeam id={id} />
        )}
      </Wrapper>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin-bottom: 1rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto 1rem auto;
    width: 88%;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));

    padding: 12px;
    box-shadow: ${BoxStyle.boxShadow};
    border-radius: 22px;
    background: ${(props) => props.BgColor[props.variant] || ""};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media ${device.lg} {
    flex-wrap: nowrap;
  }
`;

const ImgContainer = styled.div`
  width: 90%;
  background-color: ${(props) => (props.ss === "drivers" ? "#e2dfdd" : "")};
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 25px;
  filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));

  @media ${device.lg} {
    margin-left: 1rem;
  }
  img {
    box-shadow: ${(props) =>
      props.ss === "drivers" ? "" : `${BoxStyle.boxShadow}`};
    border-radius: ${(props) => (props.ss === "drivers" ? "" : "25px")};
    object-fit: cover;
    width: ${(props) => (props.ss === "drivers" ? "100%" : "100%")};
    overflow: hidden;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
`;
