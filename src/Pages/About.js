
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';
import { Button } from 'react-bootstrap';




const About = () => {

    const [component, setComponent] = useState(null);

    const LoadComponent = async location => {
        const { default: component } = await import(`../PageLoad/AboutPage/${location}`);
        setComponent(component);
    };




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
                        <h1>Choose an option!</h1>
                        <button onClick={() => LoadComponent("AboutUs")}>
                            About Us
                         </button>
                        <button onClick={() => LoadComponent("Instructors")}>
                            Instructors
                          </button>
                        <button onClick={() => LoadComponent("Employment")}>
                            Employment
                        </button>

                            {component}


                    </body>
                </div>
            </body>




            <footer>
                <Footer />
            </footer>
        </div>

    );








}
export default About;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component