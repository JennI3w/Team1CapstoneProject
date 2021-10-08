
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext, useRef } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import TopBanner from '../WebpageComponents/TopBanner';
import Footer from '../WebpageComponents/Footer';
import NavigationBar from '../WebpageComponents/NavigationBar';
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_g4oYOtObrTqkhRVkjkxKh");



const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_contactus', form.current, 'user_g4oYOtObrTqkhRVkjkxKh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

       
    }



    return (


        <div className="App">
            <title>MorningStarDance</title>
            <header>
                <TopBanner />
                <NavigationBar />
            </header>


            <div className="flex-container">
                <center><img class="ContactBanner" src="http://info.morningstardance.com/img/schoolpic2.jpg" alt="" /> </center> 
                <h3> MorningStar Dance Academy Of Atlanta </h3>
                <form ref={form} onSubmit={sendEmail} >
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                );
            </div>

            <footer>
                <Footer />
            </footer>
        </div>

    );








}
export default Contact;

//https://www.w3schools.com/css/css3_flexbox.asp
//https://stackoverflow.com/questions/39163445/adjusting-the-container-divs-size-to-exactly-fit-the-rendered-react-component
//https://medium.com/kirsten-werner/using-a-react-form-to-send-information-directly-to-your-email-2c9666f0d63a