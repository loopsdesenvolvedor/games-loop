import theme from "@/styles/theme";

type ThemePorps = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemePorps {}
}
