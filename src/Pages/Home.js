
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';




const Home = () => {







    return (
        
        <section class="fill-height-or-more">
        <div className="App">
            <title>MorningStarDance</title>
            <header>
                <TopBanner />
                <NavigationBar />
            </header>

                <div class="main-container">
            <div class="flex-container">
              
               <p> 2016 Chinese Spring Festival Gala News
                In addition to the super stars and professional artists, a group of US student ballerinas, from MorningStar Dance Academy, performed extremely well and gave wow the audience with a dance that combines the beauty of oriental and western art.
                    </p> <br></br>
               <p> Our forty-nine young and delicate ballerinas were dancing to the tune of a traditional Chinese ballad, the Jasmine Flower. This group dance integrates China's traditional fan-dance with ballet.
    
                While the girls gave a stunning performance to Chinese audiences, they are also getting a once in a lifetime experience, celebrating the Spring Festival together with the over one billion Chinese people. More videos in Youtube in USA and CCTV in China
                   </p>
            </div>
          </div>
            <footer>
            <Footer />
             </footer>
        </div>
        </section>
        );







    
}
export default Home;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component