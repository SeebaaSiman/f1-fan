import { useParams } from "react-router-dom";
import { ProfileLayout } from "./ProfileLayout";

export const ProfileId = ({ type }) => {
  const { id } = useParams();

  return <ProfileLayout id={id} type={type} />;
};
