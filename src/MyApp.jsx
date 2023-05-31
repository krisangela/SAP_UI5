import React, { useState } from "react";
import {
    Avatar,
    ShellBar,
    ShellBarItem,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useNavigate } from "react-router-dom";


export function MyApp() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
      navigate("./");
    };
    
    

    return (
        <div>
            <ShellBar
                logo={<img src="reactLogo.png" />}
                profile={
                    <Avatar>
                        <img src="profilePictureExample.png" />
                    </Avatar>
                }
                primaryTitle="My App"
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
        </div>
    );
}
