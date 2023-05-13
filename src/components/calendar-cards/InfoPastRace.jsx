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
  console.log(races);
  return (
    <PastRaceContainer>
      <Mobile>
        <h4>Position</h4>
        {races?.map((item, index) => (
          <h5 key={index}>{item.position}</h5>
        ))}
      </Mobile>
      <Tablet>
        <h4>Grid</h4>
        {races?.map((item, index) => (
          <h5 key={index}>{item.grid}</h5>
        ))}
      </Tablet>
      <Mobile>
        <h4>Driver</h4>
        {races?.map((item, index) =>
          item.FastestLap?.rank === "1" ? (
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
          )
        )}
      </Mobile>
      <Desktop>
        <h4>Car</h4>
        {races?.map((item, index) => (
          <h5 key={index}>{item.Constructor.name}</h5>
        ))}
      </Desktop>
      <Tablet>
        <h4>Laps</h4>
        {races?.map((item, index) => (
          <h5 key={index}>{item.laps}</h5>
        ))}
      </Tablet>
      <Mobile>
        <h4>Time</h4>
        {races?.map((item, index) =>
          item.status == "Finished" ? (
            <h5 key={index}>{item.Time?.time}</h5>
          ) : (
            <h5>{item.status}</h5>
          )
        )}
      </Mobile>
      <Mobile>
        <h4>Points</h4>
        {races?.map((item, index) => (
          <h5 key={index}>{item.points}</h5>
        ))}
      </Mobile>
      <Desktop>
        <h4>Fastest Lap</h4>
        {races?.map((item, index) =>
          item.FastestLap?.rank === "1" ? (
            <h5 key={index}>{item.FastestLap?.Time.time}</h5>
          ) : (
            <h5>{"-"}</h5>
          )
        )}
      </Desktop>
    </PastRaceContainer>
  );
};
const PastRaceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  /* justify-content:  center; */
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
const Tablet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;
const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  @media ${device.lg} {
    display: block;
  }
`;
