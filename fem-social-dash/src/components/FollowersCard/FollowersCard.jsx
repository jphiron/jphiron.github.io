import {
  Card,
  Handle,
  Followers,
  FollowersCount,
  FollowersLabel,
  FollowersChange,
  FollowersChangeIcon,
  FollowersChangeCount,
} from "./FollowersCard.styles";

import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import YoutubeIcon from "../../assets/images/icon-youtube.svg";
import UpIcon from "../../assets/images/icon-up.svg";
import DownIcon from "../../assets/images/icon-down.svg";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const socialImages = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const FollowersCard = ({ social, handle, followerCount, followerChange }) => {
  const { theme } = useContext(ThemeContext);
  const getArrow = (count) => {
    if (count < 0) {
      return DownIcon;
    } else if (count > 0) {
      return UpIcon;
    }
  }
  return (
    <Card theme={theme} social={social}>
      <Handle theme={theme}>
        <img src={socialImages[social]} alt={`${social} logo`} /> {handle}
      </Handle>
      <Followers>
        <FollowersCount>{followerCount}</FollowersCount>
        <FollowersLabel theme={theme}>
          {social === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
        </FollowersLabel>
      </Followers>
      <FollowersChange followerChange={followerChange}>
        <FollowersChangeIcon>
          {followerChange === 0 ? (
            "–"
          ) : (
            <img src={getArrow(followerChange)} alt="Up arrow icon" />
          )}
        </FollowersChangeIcon>
        <FollowersChangeCount>{Math.abs(followerChange)} Today</FollowersChangeCount>
      </FollowersChange>
    </Card>
  );
};

export { FollowersCard };
