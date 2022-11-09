import * as React from "react";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App: FC = () => {
  const element = useRoutes(routes);
  return (
    <>
      <div>{element}</div>
    </>
  );
};

export default App;
