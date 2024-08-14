import { Link } from "react-router-dom"

export default function Home() {


    return (

        <>
            <section id="home" className="top_section">
                <div className="row">
                    <div className="col-lg-12">

                        <section>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="full slider_cont_section">
                                            <h4>Welcome</h4>
                                            <h3>AVALON</h3>
                                            <p>Local dealers near you are motivated to provide new car buyers on Avalon with competitive price quotes. Why? Because they know that if you're using our web site, you've done your online research. You are an educated shopper needing a different approach than the average "walk-in" customer.</p>
                                            
                                            <div className="button_section">
                                                <Link to="/contact">Contact Us</Link>
                                                <Link to="/about">About Us</Link>

                                            </div>
                                            <div className="button_section">
                                                <Link to="/choose"  >Choose Us</Link>
                                                <Link to="/testimonial" >Testimonial</Link>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-7">
                                        <div id="slider_main" className="carousel slide" data-ride="carousel">

                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/slider_1.png" alt="slider_1" />
                                                </div>
                                                <div className="carousel-item active">
                                                    <img src="/images/slider_2.png" alt="slider_2" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    )
}