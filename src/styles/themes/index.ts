import dark from "./dark";
import light from "./light";

const themes = {
  dark,
  light,
};

export default themes;

export type ThemeType = typeof light;
