import Home from "../pages/Home";

interface RouteType {
  path: string;
  Page: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    Page: Home,
    name: "Home Screen",
    protected: true,
  },
];

export default routes;
