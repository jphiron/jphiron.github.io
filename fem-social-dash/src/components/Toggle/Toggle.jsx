import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {Switch, Checkbox, Slider} from "./Toggle.styles";


export const Toggle = props => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Switch>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onClick={handleClick}
        onChange={handleChange}
      />
      <Slider />
    </Switch>
  );
};
