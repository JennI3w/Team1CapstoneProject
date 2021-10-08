
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';




const Links = () => {







    return (


        <div className="App">
            <title>MorningStarDance</title>
            <header>
                <TopBanner />
                <NavigationBar />
            </header>


            <div class="flex-container">
                <div class="link-page">
                    <a href="https://yagp.org/">YAGP</a><br></br>
                    <a href="http://americanballetcompetition.com/">American Ballet Competition</a> <br></br>
                    <a href="http://www.worldballetcompetition.com/">World Ballet Competition</a><br></br>
                    <a href="https://www.goshowstopper.com/">Show Stopper</a><br></br>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>

    );








}
export default Links;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component