import { TwitterTimelineEmbed } from "react-twitter-embed";
import styled from "styled-components";

export const TwitterTimeLine = ({ screenName, tweetLimit }) => {
  return (
    <Container>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={screenName}
        options={{ height: "800px", width: "550px", tweetLimit }}
      />
    </Container>
  );
};
const Container = styled.div`
  margin: 1rem;
`;
