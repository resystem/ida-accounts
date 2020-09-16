import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    brandColor: {
      primary: {
        darkest: string;
        dark: string;
        medium: string;
        light: string;
        lightest: string;
        gradient: string;
      };
      secondary: {
        darkest: string;
        dark: string;
        medium: string;
        light: string;
        lightest: string;
      };
    };
    neutralColor: {
      8: string;
      7: string;
      6: string;
      5: string;
      4: string;
      3: string;
      2: string;
      1: string;
    };
    alarmColor: {
      success: {
        dark: string;
        medium: string;
        light: string;
      };
      warning: {
        dark: string;
        medium: string;
        light: string;
      };
      fail: {
        dark: string;
        medium: string;
        light: string;
      };
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    lineHeight: {
      near: string;
      far: string;
      further: string;
    };
    fontWeight: {
      thin: number;
      light: number;
      regular: string;
      medium: number;
      bold: string;
      black: number;
    };
    spacingStack: {
      quark: string;
      nano: string;
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      huge: string;
      giant: string;
    };
    spacingInset: {
      quark: string;
      nano: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    spacingSquish: {
      quarck: string;
      nano: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    spacingInline: {
      quarck: string;
      nano: string;
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    shadowLevel: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    opacityLevel: {
      semiopaque: number;
      intense: number;
      midium: number;
      light: number;
      semitransparent: number;
    };
    borderWidth: {
      none: string;
      hairline: string;
      thin: string;
      thick: string;
      heavy: string;
    };
    borderRadius: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      pill: string;
      circular: string;
    };
  }
}
