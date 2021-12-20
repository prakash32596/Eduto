
import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import PrimaryHeader from '../Components/header/PrimaryHeader';
import SecondaryHeader from '../Components/header/SecondaryHeader';
import About from '../Pages/About/About';
import Footer from '../Components/footer/Footer';



const MainScreen = () => {
    return (
        <div className="MainScreen">
            <PrimaryHeader />
            <SecondaryHeader />
            <section className="p-0">
               <About />
            </section>
            <Footer />
        </div>

    );
}

export default MainScreen;