import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { SearchProviderGithub } from "../context/searchContextGithub"
import React, { useEffect } from "react"
import { ListPage1, ListPage2, DetailPage } from "@/scenes";
import { SearchProviderRickMorty } from "../context/searchContextRickMorty";

export const RouterComponent: React.FC = () => {

    useEffect(() => {
        if (window.location.pathname === '/') {
            window.location.replace('/API/list1');
        }
    }, [])


    return (
        <>
            <Router basename="/API">
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

    )
}