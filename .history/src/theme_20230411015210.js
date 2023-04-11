const theme = {
  config: {
    useColorSchemeMediaQuery: "system",
    useCustomProperties: true,
    initialColorMode: "system"
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    secondary: "#11a",
    inverseText: "#1408e6",
    highlight: "#efeffe",
    gray: "#777",
    accent: "#609",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#0ae",
        inverseText: "#93F9B9",
        highlight: "#29112c",
        gray: "#999",
        accent: "#c0f",
        muted: "#111",
      },
      deep: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)"
      },
      swiss: {
        text: "hsl(10, 20%, 20%)",
        background: "hsl(10, 10%, 98%)",
        primary: "hsl(10, 80%, 50%)",
        secondary: "hsl(10, 60%, 50%)",
        highlight: "hsl(10, 40%, 90%)",
        accent: "hsl(250, 60%, 30%)",
        muted: "hsl(10, 20%, 94%)",
        gray: "hsl(10, 20%, 50%)"
      }
    },
  },
};

export default theme;
