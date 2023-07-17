import React from "react";

export const Layout = ({ children }) => {
    return (
        <>
            <div className="layoutWrapper">
                <div className="layoutContent">
                    {children}
                </div>
            </div>
        </>
    )
}
