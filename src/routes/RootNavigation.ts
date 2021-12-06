export type AppRootParamList = {
  Home: undefined;
  Scheduling: undefined;
  Profile: undefined;
  Login: undefined;
  Content: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList { }
  }
}