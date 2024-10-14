import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter, useLocation } from "react-router-dom";
import { ListPage } from "../pages/listPage";
import { DetailPage } from "../pages/detailPage";
import { ListRickMorty } from "../pages/listRickMorty";
import Header from "../common/header";
import { SearchProviderRickMorty } from "../context/searchContextRickMorty";
import { SearchProviderGithub } from "../context/searchContextGithub";


export const App = () => {

    useEffect(() => {
        if (window.location.pathname === '/') {
            window.location.replace('/API/list1');
        }
    }, [])

    return (
        <>

            <Router basename="/API">

                <Header />
                <main>

                    <SearchProviderGithub>
                        <Routes>
                            <Route path="/" element={<Navigate to="/list1" replace />} />
                            <Route path="/list1" element={<ListPage />} />
                            <Route path="/list1/detail/:id" element={<DetailPage />} />
                        </Routes>
                    </SearchProviderGithub>

                    <SearchProviderRickMorty>
                        <Routes>
                            <Route path="/list2" element={<ListRickMorty />} />
                            <Route path="/list2/detail/:id" element={<DetailPage />} />
                        </Routes>
                    </SearchProviderRickMorty>

                </main>
            </Router>
        </>


    );
};