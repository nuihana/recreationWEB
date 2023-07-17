import React from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import { Layout } from "components/molecule";

import {
    RootPage
} from 'pages/v1';

import 'styles/index.scss';

export const routes = {
    v1: [
        { path: '/', element: <RootPage />}
    ]
};

const routeList = [];

Object.entries(routes).forEach(([key, value]) =>
    value.forEach((route) => {
        routeList.push(
            <Route key={`/${key}${route.path}`} path={`/${key}${route.path}`} element={route.element} />
        );
    }),
);

const RootRouter = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routeList}
                    <Route path="*" element={<Navigate replace to="/v1/" />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default RootRouter;
