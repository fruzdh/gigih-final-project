import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    appBlue: {
      light: "#51C9CD",
      dark: "#17A0B2",
    },
  },
  components: {
    Button: {
      variants: {
        normal: {
          backgroundColor: "unset",
          color: "white",
          border: "1px solid white",
          _hover: {
            backgroundColor: "unset",
            color: "appBlue.light",
            borderColor: "appBlue.light",
            boxShadow: "0 0 4px var(--chakra-colors-appBlue-light)",
          },
          _active: {
            backgroundColor: "unset",
            color: "appBlue.dark",
            borderColor: "appBlue.dark",
            boxShadow: "0 0 4px var(--chakra-colors-appBlue-dark)",
          },
        },
      },
      defaultProps: {
        variant: "normal",
      },
    },
  },
});

export default theme;
