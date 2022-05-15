import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CardGrid } from "../CardGrid/CardGrid";
import {
  Card,
  Title,
  SocialIcon,
  Count,
  Change,
  ChangeIcon,
  ChangeValue,
} from "./OverviewCard.styles";

import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import YoutubeIcon from "../../assets/images/icon-youtube.svg";
import UpIcon from "../../assets/images/icon-up.svg";
import DownIcon from "../../assets/images/icon-down.svg";

const socialImages = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const OverviewCard = ({ metric, social, count, change }) => {
  const { theme } = useContext(ThemeContext);
  const getArrow = (count) => {
    if (count < 0) {
      return DownIcon;
    } else if (count > 0) {
      return UpIcon;
    }
  }
  return (
    <Card theme={theme}>
      <CardGrid>
        <Title theme={theme}>{metric}</Title>
        <SocialIcon src={socialImages[social]} alt={`${social} logo`} />
        <Count>{count}</Count>
        <Change change={change} theme={theme}>
          { change === 0 ? (
            <div style={{marginRight: ".25rem"}}>-</div>
            ) : (
            <ChangeIcon src={getArrow(change)} />
          )}
          <ChangeValue>{`${Math.abs(change)}%`}</ChangeValue>
        </Change>
      </CardGrid>
    </Card>
  );
};

export { OverviewCard };
