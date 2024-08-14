import { useState } from "react"
import Paragraph1 from "./Paragraph1";
import Paragraph2 from "./Paragraph2";
import Paragraph3 from "./Paragraph3";
import { Link } from "react-router-dom";


export default function ChooseUs() {

    const [view, setView] = useState(false);

    const onClick = () => { view ? setView(false) : setView(true)}

    return (

        <section id="why_choose_us" className="dark_bg_blue layout_padding cross_layout padding_top_0">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="full center">
                        <h2 className="heading_main orange_heading">Why Choose Us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="full">
                        <div className="choose_blog text_align_center">
                            <img src="images/c1_icon.png" alt="c1_icon"/>
                            <h4>FINANCING MADE EASY</h4>
                            <p>When you purchase from Avalon, you can also access the services of MyChoice Car Creditor, an independent, credit.</p>
                            {view && <Paragraph1 /> }

                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="full">
                        <div className="choose_blog text_align_center">
                            <img src="images/c2_icon.png" alt="c2_icon" />
                            <h4>WIDE RANGE OF BRANDS</h4>
                            <p>Product range width refers to the number of different categories of vehicles that a company offers.</p>
                            {view && <Paragraph2 />}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="full">
                        <div className="choose_blog text_align_center">
                            <img src="images/c3_icon.png" alt="c3_icon"/>
                            <h4>TRUSTED BY THOUSANDS</h4>
                            <p>Our team of more than 80 people work relentlessly to offer every organization in the world approriate car.</p>
                            {view && <Paragraph3 />}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 margin_top_30">
                    <div className="full center button_section margin_top_30">
                        <Link className="margin_top_30" onClick={onClick}>{view ? "Read Less" : "Read More"}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}