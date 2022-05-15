import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Grid } from "../Grid/Grid";
import { OverviewCard } from "../OverviewCard/OverviewCard";

const Overview = props => {
  const { theme } = useContext(ThemeContext);
  const h2Style =
    theme === "dark"
      ? { color: "hsl(0, 0%, 100%)" }
      : { color: "hsl(228, 12%, 44%)" };
  return (
    <div>
      <h2 style={{ ...h2Style, marginBottom: "2rem" }}>Overview - Today</h2>
      <Grid numCols={4} numRows={2}>
        <OverviewCard
          metric="Page views"
          social="facebook"
          count={87}
          change={3}
        />
        <OverviewCard metric="Likes" social="facebook" count={52} change={-2} />
        <OverviewCard
          metric="Likes"
          social="instagram"
          count={5462}
          change={2257}
        />
        <OverviewCard
          metric="Profile views"
          social="instagram"
          count={"52k"}
          change={1375}
        />
        <OverviewCard
          metric="Retweets"
          social="twitter"
          count={117}
          change={303}
        />
        <OverviewCard
          metric="Likes"
          social="twitter"
          count={507}
          change={553}
        />
        <OverviewCard
          metric="Likes"
          social="youtube"
          count={107}
          change={-19}
        />
        <OverviewCard
          metric="Total views"
          social="youtube"
          count={1407}
          change={-12}
        />
      </Grid>
    </div>
  );
};

export { Overview };
