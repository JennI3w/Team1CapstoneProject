
import '../../App.css';
import React, { useState, Component, useEffect, createContext, useContext, useRef } from 'react';
import TopBanner from '../../WebpageComponents/TopBanner';
import Footer from '../../WebpageComponents/Footer';
import NavigationBar from '../../WebpageComponents/NavigationBar';
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';

init("user_g4oYOtObrTqkhRVkjkxKh");


export default function Employment() {


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


//https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1
