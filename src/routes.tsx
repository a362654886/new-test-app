import React from "react";
import { RouteObject } from "react-router-dom";
import MainPage from "./page/MainPage";

export const routes: RouteObject[] = [{ path: "/", element: <MainPage /> }];
