import { Paper } from "@mui/material";
import { FC } from "react";

type MainProps = { children: JSX.Element | JSX.Element[] };

const Main: FC<MainProps> = ({ children }) => {
  return <Paper>{children}</Paper>;
};

export default Main;
