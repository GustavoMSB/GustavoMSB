import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundPages: string;
      gray1: string;
      gray2: string;
      gray4: string;
      secondary: string;
      tertiary: string;
      text: string;
      title: string;
      black1: string;
      black2: string;
      inputbg: string;
      green: string;
    };
  }
}
