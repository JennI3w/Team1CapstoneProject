
import '../../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import TopBanner from '../../WebpageComponents/TopBanner';
import Footer from '../../WebpageComponents/Footer';
import NavigationBar from '../../WebpageComponents/NavigationBar';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_g4oYOtObrTqkhRVkjkxKh");


export default function Employment({data}) {



    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });






    return (


        <div className="Employment">
            <h2>Teacher Position</h2>

       

        </div>

    );






}


//https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1

/*
 * 
 *
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
 *   const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_morningstardance',
            'TEMPLATE ID',
            toSend,
            'User ID'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

 * 
 *      <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='MorningStar Dance'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Thank you for submitting your application'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='morningstar.emailburst@gmail.com'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button >
            </form>
 * 
 * 
 * */