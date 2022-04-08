import "./App.css";
import { render } from "react-dom";
import React, { Component } from "react";

class App extends React.Component {
  render() {

    return (
        <div className="App">

            <header className="header">

                <img src="image/smilenstyle.png"></img>
                
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>
            </header>

            <section1 className="home" id="home">
                <div className="image">
                    <img src="image/dental.png" alt=""></img>
                </div>
                <div className="content">
                    <h3>We Wish to Spread Smiles, Literally and Otherwise!</h3>
                    <a href="#contact" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
                </div>
            </section1>

            <section className="services" id="services">

                <h1 className="heading"> <span>services</span> offered </h1>

                <div className="box-container1">

                    <div className="box" id="rct">
                        <i className="fas fa-syringe"></i>
                        <h3>Root Canal Treatment</h3>
                        <p>Root Canal Treatment is done to prevent extraction of a tooth with pulpal damage, which could be due to multiple reasons, such as caries, injury, or trauma to the tooth.
                        <br/> 
                        Root Canal treated teeth need to be protected with a crown over them. </p> 
                    </div>

                    <div className="box" id="aesthetic">
                        <i className="fas fa-magic"></i>
                        <h3>Aesthetic Restorations</h3>
                        <p>Aesthetic Restorations can be done to restore structure in broken teeth or in teeth with internal stains. Minor gaps can be covered up to enhance the smile.</p>
                    </div>

                    <div className="box" id="crowns">
                        <i className="fas fa-tooth"></i>
                        <h3>Crowns and Bridges</h3>
                        <p>A cap or a crown is a restoration used to cover up a damaged or weak tooth.
                        <br/>
                        A bridge is a restoration to replace one or more missing teeth. </p> 
                    </div>
                </div>

                <div className="box-container2"> 

                    <div className="box" id="removable dentures">
                        <i className="fas fa-teeth-open"></i>
                        <h3>Removable Partial Dentures</h3>
                        <p>Removable Partial Dentures or RPD are meant to restore missing teeth. They can be removed or worn by the patient without the dentists' assistance post fabrication.</p>
                    </div>

                    <div className="box" id="dentures">
                        <i className="fas fa-teeth"></i>
                        <h3>Complete Dentures</h3>
                        <p>Complete dentures are removable dentures fabricated when all natural teeth in a jaw are missing. CDs are totally supported by the jaw tissues. </p>
                    </div>

                </div>

                <div className="alert">
                    <strong>Intra-oral X-ray facility available! </strong>
                </div>
                
            </section>


            <section className="about" id="about">

                <h1 className="heading"><span> about </span> us </h1>

                <div className="box-container">

                    <div className="box">
                            <img src="image/dentist.jpg" alt=""/>
                            <h3>Dr. Savita Koppar Deshpande</h3>
                            <h5>BDS</h5>
                            <a href="https://www.facebook.com/DrSavitaSuparn" className="fab fa-facebook-f"></a>
                            <a href="https://twitter.com/DrSavitaKD" className="fab fa-twitter"></a>
                            <a href="https://www.instagram.com/savitakoppardeshpande/" className="fab fa-instagram-square"></a>
                            <a href="https://www.linkedin.com/in/dr-savita-koppar-deshpande-94161280?originalSubdomain=in" className="fab fa-linkedin"></a>
                        </div>

                        <div className="box">
                            <p> Dr. Savita Koppar Deshpande completed her graduation in dentistry from the prestigious KLES Institute of Dental Sciences, Belagavi in the year 1998. She then worked as a senior resident doctor at SDM Dental College, Dharwad for a period of 2 years, post which she has been into dental practice. She has handled a wide variety of cases ranging from RCTs to full mouth rehabilitations with fixed prosthesis. She has also completed a certificate course in Implant Dentistry. </p>
                        </div>

                </div>

            </section>

            <section className="testimonials" id="testimonials">

                <h1 className="heading"> <span> testimonials </span></h1>

                <img src="image/ba1.jpg" className="ba"/>
                <img src="image/ba2.jpg" className="ba"/>
                <img src="image/ba3.jpg" className="ba"/>

                <div className="row"> 
                    <div className="column">
                        <img src="image/review3.png" />
                        <img src="image/review5.png" />
                    </div>
                    <div className="column">
                        <img src="image/review1.png" />
                        <img src="image/review2.png" />
                        <img src="image/review7.png" />
                    </div>  
                    <div className="column">
                        <img src="image/review6.png" />
                        <img src="image/review4.png" />
                    </div>
                </div>

                <div  className="review">
                    <a href="https://www.google.com/maps/place/Smile+n+Style/@15.4704215,74.9786138,20z/data=!4m7!3m6!1s0x0:0x5e755f0e28727bba!8m2!3d15.4708745!4d74.9781488!9m1!1b1"><i class="fas fa-comment-alt"></i> To read further reviews or write your own, click here!</a>
                </div>
                    
            </section>

            
            <section className="blog" id="blog">
                
                <h1 className="heading"> blog </h1>

                <div className="box-container">

                    <div className="box">
                        <figure><img src="image/brushing.jpg" alt="brushing"/><figcaption><a href="https://savitasuparn.wixsite.com/website/post/can-the-right-brushing-technique-help-you-retain-your-natural-teeth-for-life">
                        Can the Right Brushing Technique help you Retain your Natural Teeth for Life?
                        </a></figcaption></figure>
                    </div>

                    <div className="box">
                        <figure><img src="image/bad breath.jpg" alt="bad breath"/><figcaption><a href="https://savitasuparn.wixsite.com/website/post/bad-breath-more-than-just-a-social-embarrassment">Bad Breath - More than just a Social Embarrassment</a></figcaption></figure>
                    </div>

                </div>

                <div className="youtube">
                    <a href="https://www.youtube.com/channel/UCS1_wEPb7W34cgxgUBZhQSA"> <i className="fab fa-youtube"/> Click here to visit our Youtube channel for video content!</a>
                </div>

            </section>

            <section className="contact" id="contact">
                
                <h1 className="heading"> <span>contact</span> us </h1>  

                <div className="box-container"> 

                    <div className="box">
                        <h3>Address</h3>
                        <a href="https://www.google.com/maps/dir/12.8881935,77.5963265/smile+n+style+dharwad/@14.1568901,75.1608921,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bb8cd46c0665b05:0x5e755f0e28727bba!2m2!1d74.9781488!2d15.4708745" align="left"><i className="fas fa-map-marker-alt"></i> MIG-II-39, KHB Colony, 3rd Phase,<br/>Doddanayakanakoppa, Sampige Nagar, <br/>Dharwad, Karnataka 580008 </a>
                        <h3>Email</h3>
                        <a href="mailto: savvy.smilenstyle@gmail.com" align="left"> <i className="fas fa-envelope"></i> savvy.smilenstyle@gmail.com </a>
                        <h3>Phone Number</h3>
                        <a href="tel: +91 9403646321" align="left"> <i className="fas fa-phone"></i> +91 9403646321 </a>
                    </div>
                    <div className="box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7690.503541989924!2d74.9769626!3d15.4708838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd46c0665b05%3A0x5e755f0e28727bba!2sSmile%20n%20Style!5e0!3m2!1sen!2sin!4v1638709371164!5m2!1sen!2sin" allowfullscreen="" loading="lazy" width="100%" height="110%"></iframe>
                    </div>

                </div>

                <div className="hours">
                    <h2>Hours of Service</h2>
                    <p>
                        <i class="far fa-calendar-alt"></i>
                        <span> Monday through Saturday</span> <br/>  10:00AM to 1:00PM and 5:00PM to 8:00PM 
                    </p>
                </div>


             </section>
 
            <section className="footer">

                <h3>Follow us</h3><br/>

                <div className="box-container">

                    <div className="box" >
                    <a href="https://www.facebook.com/DrSavitaSuparn"> <i className="fab fa-facebook-f"/></a>
                    </div>

                    <div className="box">
                    <a href="https://www.instagram.com/savitakoppardeshpande/"> <i className="fab fa-instagram-square"/></a>
                    </div>

                    <div className="box">
                    <a href="https://www.linkedin.com/in/dr-savita-koppar-deshpande-94161280?originalSubdomain=in"><i className="fab fa-linkedin"/></a>
                    </div>

                    <div className="box">
                    <a href="https://twitter.com/DrSavitaKD"> <i className="fab fa-twitter"></i></a>
                    </div>

                    <div className="box">
                    <a href="https://www.youtube.com/channel/UCS1_wEPb7W34cgxgUBZhQSA"> <i className="fab fa-youtube"></i></a>
                    </div>

                </div>

            </section>

        </div>
    );
  }
}

export default App;