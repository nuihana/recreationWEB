import React from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import { Layout } from "components/molecule";

import {
    RootPage,
    MusicPageHome,
    MusicPageDetail,
    PersonPageHome,
    PersonPageDetail,
    ProverbPageHome,
    ProverbPageDetail,
} from 'pages/v1';

import 'styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const routes = {
    v1: [
        { path: '/', element: <RootPage />},
        { path: '/music', element: <MusicPageHome />},
        { path: '/music/detail', element: <MusicPageDetail />},
        { path: '/person', element: <PersonPageHome />},
        { path: '/person/detail', element: <PersonPageDetail />},
        { path: '/proverb', element: <ProverbPageHome />},
        { path: '/proverb/detail', element: <ProverbPageDetail />}
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
