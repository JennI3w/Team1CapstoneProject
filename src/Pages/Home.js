
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';




const Home = () => {







    return (
        

        <div className="App">

          
            <TopBanner />

            <div class="flex-container">

               <p> 2016 Chinese Spring Festival Gala News
                In addition to the super stars and professional artists, a group of US student ballerinas, from MorningStar Dance Academy, performed extremely well and gave wow the audience with a dance that combines the beauty of oriental and western art.

                Our forty-nine young and delicate ballerinas were dancing to the tune of a traditional Chinese ballad, the Jasmine Flower. This group dance integrates China's traditional fan-dance with ballet.

                While the girls gave a stunning performance to Chinese audiences, they are also getting a once in a lifetime experience, celebrating the Spring Festival together with the over one billion Chinese people. More videos in Youtube in USA and CCTV in China
                    </p>
            </div>
          
        
        </div>
        
        );







    
}
export default Home;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component