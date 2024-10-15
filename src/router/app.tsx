import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter, useLocation } from "react-router-dom";

import { SearchProviderRickMorty } from "../core/context/searchContextRickMorty";
import { SearchProviderGithub } from "../core/context/searchContextGithub";
import { DetailPage } from "@/scenes/detail";
import { ListPage1 } from "@/scenes/list1";
import { ListPage2 } from "@/scenes/list2";

export const App = () => {

    useEffect(() => {
        if (window.location.pathname === '/') {
            window.location.replace('/API/list1');
        }
    }, [])

    return (
        <>

            <Router basename="/API">

                {/* <Header /> */}
                <main>

                    <SearchProviderGithub>
                        <Routes>
                            <Route path="/" element={<Navigate to="/list1" replace />} />
                            <Route path="/list1" element={<ListPage1 />} />
                            <Route path="/list1/detail/:id" element={<DetailPage />} />
                        </Routes>
                    </SearchProviderGithub>

                    <SearchProviderRickMorty>
                        <Routes>
                            <Route path="/list2" element={<ListPage2 />} />
                            <Route path="/list2/detail/:id" element={<DetailPage />} />
                        </Routes>
                    </SearchProviderRickMorty>

                </main>
            </Router>
        </>


    );
};