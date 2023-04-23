const theme = {
  config: {
    useColorSchemeMediaQuery: "system",
    useCustomProperties: true,
    initialColorMode: "system",
  },
  colors: {
    text: "#1B1B2F",
    background: "#E8F4F8",
    primary: "#2c3e50",
    secondary: "#6c5ce7",
    inverseText: "#000000",
    highlight: "#00FF7F",
    modes: {
      dark: {
        text: "#D3D3D3",
        background: "radial-gradient(100% 100% at 50% 100%, #1F1E1B 21.52%, #1B1A17 100%)",
        primary: "#3498DB",
        secondary: "#55efc4",
        inverseText: "#FFFFFF",
        highlight: "#F7DC6F",
      },
    }
  },
};

export default theme;
