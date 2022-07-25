import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./pages/Layout";
import Catalog from "./pages/catalog";
import NotFoundPage from "./pages/notFoundPage";
import MainPage from "./pages/mainPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="Catalog" element={<MainPage />}/>
                <Route path="Catalog1" element={<Catalog />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}

ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById('root'),
);