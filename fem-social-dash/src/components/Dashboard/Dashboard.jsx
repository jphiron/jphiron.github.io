import { Followers } from "../Followers/Followers";
import { Overview } from "../Overview/Overview";

const Dashboard = props => {
  return (
    <>
      <Followers />
      <Overview />
    </>
  );
};

export { Dashboard };
