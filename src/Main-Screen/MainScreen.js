
import React from 'react';
import PrimaryHeader from '../Components/header/PrimaryHeader';
import SecondaryHeader from '../Components/header/SecondaryHeader';
import About from '../Pages/About/About';
import Footer from '../Components/footer/Footer';



const MainScreen = () => {
    return (
        <div className="MainScreen">
            <PrimaryHeader className="m-display" />
            <SecondaryHeader />
            <section className="p-0">
               <About />
            </section>
            <Footer />
        </div>

    );
}

export default MainScreen;