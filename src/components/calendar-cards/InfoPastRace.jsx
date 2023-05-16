import styled from "styled-components";
import { API_BASE_URL, CURRENTyear } from "../../hook/api";
import useAxios from "../../hook/useAxios";
import { device } from "../../Layout/StylesGlobal";
import { driversHelmet } from "../current-season/dataImage";

export const InfoPastRace = ({ round }) => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/${round}/results.json`
  );
  const races = data?.MRData.RaceTable.Races[0].Results;
  return (
    <>
      <PastRaceContainer>
        <Mobile>
          <h4>Position</h4>
        </Mobile>
        <Tablet>
          <h4>Grid</h4>
        </Tablet>
        <Mobile>
          <h4>Driver</h4>
        </Mobile>
        <Desktop>
          <h4>Car</h4>
        </Desktop>
        <Tablet>
          <h4>Laps</h4>
        </Tablet>
        <Mobile>
          <h4>Time</h4>
        </Mobile>
        <Mobile>
          <h4>Points</h4>
        </Mobile>
        <Desktop>
          <h4>Fastest Lap</h4>
        </Desktop>
      </PastRaceContainer>

      {races?.map((item, index) => (
        <PastRaceContainer key={index}>
          <Mobile>
            <h5>{item.position}</h5>
          </Mobile>
          <Tablet>
            <h5 key={index}>{item.grid}</h5>
          </Tablet>
          <Mobile ss={true}>
            {item.FastestLap?.rank === "1" ? (
              <HelmetContainer>
                <h5
                  key={index}
                  style={{ color: "red" }}
                >{`${item.Driver.givenName} ${item.Driver.familyName}`}</h5>
                <img src={driversHelmet[item.Driver.familyName] || ""} alt="" />
              </HelmetContainer>
            ) : (
              <h5
                key={index}
              >{`${item.Driver.givenName} ${item.Driver.familyName}`}</h5>
            )}
          </Mobile>
          <Desktop ss={true}>
            <h5 key={index}>{item.Constructor.name}</h5>
          </Desktop>
          <Tablet>
            <h5 key={index}>{item.laps}</h5>
          </Tablet>
          <Mobile ss={true}>
            {item.status == "Finished" ? (
              <h5 key={index}>{item.Time?.time}</h5>
            ) : (
              <h5>{item.status}</h5>
            )}
          </Mobile>
          <Mobile>
            <h5 key={index}>{item.points}</h5>
          </Mobile>
          <Desktop>
            {item.FastestLap?.rank === "1" ? (
              <h5 key={index}>{item.FastestLap?.Time.time}</h5>
            ) : (
              <h5>{"-"}</h5>
            )}
          </Desktop>
        </PastRaceContainer>
      ))}
    </>
  );
};
const PastRaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
`;
const HelmetContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
  }
`;
const Mobile = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.ss ? 3 : 1)};

  width: calc(100% / 4);
  /* flex-direction: column; */
  align-items: left;
  /* justify-content:  center; */
`;
const Tablet = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.ss ? 2 : 1)};

  width: calc(100% / 6);
  /* flex-direction: column; */
  align-items: center;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;
const Desktop = styled.div`
  width: calc(100% / 8);
  display: flex;
  flex-grow: ${(props) => (props.ss ? 2 : 1)};

  /* flex-direction: column; */
  align-items: center;
  display: none;
  @media ${device.lg} {
    display: block;
  }
`;
