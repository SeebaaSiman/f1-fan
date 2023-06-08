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
  } else if (type === "team") {
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
  } = profileData;

  return (
    <ProfileContainer variant={variant} BgColor={BgColor}>
      <span>
        <h1>{`${name} ${name2}`}</h1>
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
        <ImgContainer>
          <img src={img} />
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
          <ContentTeam   constructors={constructorsName}/>
        )}
      </Wrapper>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  span {
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 12px;
    box-shadow: ${BoxStyle.boxShadow};
    border-radius: 25px;
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
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 25px;
  @media ${device.lg} {
    margin-left: 1rem;
  }
  img {
    width: 562px;
    height: 640px;
    object-fit: cover;
  }
`;
