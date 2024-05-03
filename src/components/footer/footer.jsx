import "./footer.css";

export default function Footer(){
    return(
        <section id="join">
    {/* <img className="footer-img" src="https://thumbs.dreamstime.com/b/digital-tech-icon-vector-set-technologies-illustration-sign-collecion-information-symbol-data-center-logo-can-be-used-web-185753730.jpg" /> */}
    <div className="title-text">
        {/* <p>Join US</p>
        <h1>For More Info</h1> */}
    </div>
    <div className="footer-row">
        <div className="footer-left">
            <h1>Contact US</h1>
            {/* <h4>Feel free to Contact US</h4> */}
            <p><i className="fa fa-paper-plane"></i> VRV123@gmail.com</p>
            <p><i className="fa fa-map-marker"></i>P.O. Box No.:2000,electronic city,Bangalore - 560 019</p>
           
        </div>
        <div className="footer-right">
            <h1>Follow US</h1>
            <div className="social">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-youtube"></i>
            </div>
        </div>
            </div>
    
    <center><p>© All rights reserved VRV</p></center>
</section>

    );

}