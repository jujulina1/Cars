import { useNavigate } from "react-router-dom";
export default function ContactForm() {

    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/')

    }, 5000)
    return (
        <section id="contact" className="dark_bg_blue layout_padding  padding_top_0 margin_top_0">
            <div className="container">
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="full center">
                            <h2 className="orange_heading" id="heading_contact">Thank You Contacting Us</h2>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}