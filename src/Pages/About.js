
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';
import { Button } from 'react-bootstrap';
import { send } from 'emailjs-com';
import Employment from '../PageLoad/AboutPage/Employment';


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
                        <center>
                        <h1>Choose an option!</h1>
                        <button class="Mini-nav" onClick={() => LoadComponent("AboutUs")}>
                                About Us
                            </button>
                       
                        <button class="Mini-nav" onClick={() => LoadComponent("Instructors")}>
                            Instructors
                          </button>
                        <button class="Mini-nav" > 
                            Employment
                        </button>
                        </center>
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
//https://medium.com/how-to-react/pass-data-or-event-from-a-child-component-to-parent-component-in-both-functional-and-class-ae2f8b7ccda2
//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component