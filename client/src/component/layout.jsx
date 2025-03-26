import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const layout = () => {
    return (
        <main>
            <header>
                <Header />
            </header>
                <section>
                    <Outlet />
                </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
    }

    export default layout;