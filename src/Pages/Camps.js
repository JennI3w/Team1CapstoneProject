
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';




const Information = () => {







    return (


        <div className="App">
            <title>MorningStarDance</title>
            <header>
                <TopBanner />
                <NavigationBar />
            </header>

            <body>
            <div class="flex-container">
                    <body>
                        <span>
                            <h2> Class Information </h2>
                            <p> Classical Ballet </p>
                            <p> Contemporary Ballet </p>
                            <p> Point </p>
                            <p> Modern </p>
                            <p> Character </p>
                            <p> Jazz </p>
                            <p> Chinese Traditional and Folk Dance </p>
                            <p> Adult Ballet </p>
                            <p> Adult Exercises </p>
                            <p> Adult Chinese Traditional and Folk </p>

                    </span>
                    </body>
                </div>
              </body>
            <footer>
                <Footer />
            </footer>
        </div>

    );








}
export default Information;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component