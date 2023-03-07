import React from 'react'

const Contact = () => {
  return (
    <contact className='center'>
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>
                        Feel free to contact me for any queries.
                    </p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Vishesh Bajpai</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Lucknow, Uttar Pradesh</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">visheshbajpai9@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">
                        <q>
                            Showcasing your talent in the form of working projects is much better than adding just another certification in your resume.
                        </q>
                        <br/>
                    </div>
                    <cite>-Vishesh</cite>
                </div>
            </div>
        </div>
    </section>
    </contact>
  )
}

export default Contact
