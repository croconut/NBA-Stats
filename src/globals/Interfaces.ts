export interface Colors {
  primary: string;
  card: string;
  background: string;
  // the secondarys cannot be swapped to ?
  // always supply a secondary background and
  // secondary text color
  backgroundSecondary: string;
  text: string;
  textSecondary: string;
  border: string;
  notification: string;
}

export interface Theme {
  dark: boolean;
  colors: Colors;
}
