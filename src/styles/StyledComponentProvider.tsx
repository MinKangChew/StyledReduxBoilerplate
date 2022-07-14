import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
import GlobalStyles from "./GlobalStyles";
import { ProviderProps } from "utils/common/types";

const StyledComponentProvider = ({ children }: ProviderProps): ReactElement => {
  // TODO: Get theme from store to choose theme
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentProvider;
