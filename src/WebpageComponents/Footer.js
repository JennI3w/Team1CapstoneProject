
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg';
import fb from '../Images/fb.png';




const Footer = () => {







    return (


        <div className="App">

            <div className="Footer">
                <div className="SocialFooter">
                 <center>
                   <p>FOLLOW ME <a class="FooterImageFB" href="https://www.facebook.com/MorningStar-Dance-Academy-of-Atlanta-160797744008230/"
                            title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" width="30" height="30" alt="facebook icon png background" /></a>
                            <a href="https://www.youtube.com/user/morningstardance" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/for-youtube-logo-png-transparent-2.png" width="30" height="30" alt="for youtube logo png transparent" /></a>
                            <a href="https://www.instagram.com/morningstardance/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/instagram-transparent-logo-png-images-24.png" width="30" height="30" alt="instagram transparent logo png images" /></a>
                        </p>
                </center>
                </div>

                <div className="CopyrightFooter">
                    <p>  <center> ©2019 morningstardance.com  All Rights Reserved </center> </p>

                </div>
                <div className="CounterFooter">
                    <center>
                        <a href="https://www.instagram.com/morningstardance/" title="Image from freepnglogos.com"><img src="http://info.morningstardance.com/ct/counter.php?morningstardance.com&style=2" width="75" height="20" alt="instagram transparent logo png images" /></a>
                        </center>
                </div>


            </div>

        </div>




    );








}
export default Footer;

