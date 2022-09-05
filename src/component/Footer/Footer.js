import react from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container substance-footer-content">
                <div>
                    Copy Right &copy; 2022
                </div>
                <div className="footer-link-container">
                    <p> Register link</p>
                    <p> Exteral Link</p>
                    <p> Additional Link</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;