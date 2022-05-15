import { Grid } from "../Grid/Grid";
import { FollowersCard } from "../FollowersCard/FollowersCard";

const Followers = props => {
  return (
    <Grid numRows={1} numCols={4}>
      <FollowersCard
        social="facebook"
        handle="@jbrewster"
        followerCount={1987}
        followerChange={12}
      />
      <FollowersCard
        social="twitter"
        handle="@jbrewster"
        followerCount={1044}
        followerChange={99}
      />
      <FollowersCard
        social="instagram"
        handle="@jbrewster"
        followerCount={"11k"}
        followerChange={1099}
      />
      <FollowersCard
        social="youtube"
        handle="Jonny B."
        followerCount={8239}
        followerChange={-144}
      />
    </Grid>
  );
};

export { Followers };
