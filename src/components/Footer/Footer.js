import Copyright from "./Copyright";
import { Link } from "react-router-dom";

export default function Footer() {

    const onClick = (e) => {
        const nameOfTag = e.currentTarget.name;
        let url = ''
        switch (nameOfTag) {
            case 'facebook':
                url = 'https://www.facebook.com'
                break;
            case 'instagram':
                url = 'https://www.instagram.com/'
                break;
            case 'twitter':
               url = 'https://twitter.com'
                break;
            default: 
            break;    
         
        }
        window.location.replace(url);
    }
    return (
        <>
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="full">
                        <h3>AVALON MOTORS</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="full">
                        <ul className="social_links">
                            <li><Link onClick={onClick} name="facebook"><i className="fa fa-facebook-f" ></i></Link></li>
                            <li><Link onClick={onClick} name="twitter"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link onClick={onClick} name="instagram"><i className="fa fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
        
                <div className="col-md-4">
                    <div className="full">
                        <h4 className="widget_heading">Usefull Links</h4>
                    </div>
                    <div className="full f_menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/catalog">Our Cars</Link></li>
                            <li><Link to="/choose">Why Choose Us</Link></li>
                            <li><Link to="/testimonial">Testimonial</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="full">
                        <h4 className="widget_heading">Contact Details</h4>
                        <div className="full cont_footer">
                            <p><strong>AVALON Car : Adderess</strong><br /><br />New York 10012, USA<br />Phone: +987 654 3210<br />demo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <Copyright />
    </>
    )
}