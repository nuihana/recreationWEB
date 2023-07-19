import React from "react";
import { Navigation } from "components/organism";

export const Layout = ({ children }) => {
    return (
        <>
            <div className="layoutWrapper">
                <div className="layoutContent">
                    {children}
                    <Navigation />
                </div>
            </div>
        </>
    )
}
