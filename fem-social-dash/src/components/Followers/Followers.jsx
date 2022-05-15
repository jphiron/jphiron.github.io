import { Grid } from "../Grid/Grid";
import { FollowersCard } from "../FollowersCard/FollowersCard";

const Followers = props => {
  return (
    <Grid numRows={1} numCols={4}>
      <FollowersCard
        social="facebook"
        handle="@nathanf"
        followerCount={1987}
        followerChange={12}
      />
      <FollowersCard
        social="twitter"
        handle="@nathanf"
        followerCount={1044}
        followerChange={99}
      />
      <FollowersCard
        social="instagram"
        handle="@realnathanf"
        followerCount={"11k"}
        followerChange={1099}
      />
      <FollowersCard
        social="youtube"
        handle="Nathan F."
        followerCount={8239}
        followerChange={-144}
      />
    </Grid>
  );
};

export { Followers };
