import { useTheme } from "@mui/material/styles";

export const useResponsiveStyles = () => {
  const theme = useTheme();

  const tabletDesign = (styles) => {
    return {
      [theme.breakpoints.down("md")]: {
        ...styles,
      },
    };
  };

  const mobileDesign = (styles) => {
    return {
      [theme.breakpoints.down("sm")]: {
        ...styles,
      },
    };
  };

  const desktopDesign = (styles) => {
    return {
      [theme.breakpoints.up("lg")]: {
        ...styles,
      },
    };
  };

  return { tabletDesign, mobileDesign, desktopDesign };
};
