import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br/> Developer</h3>
                </div>

                <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal__content">
                        <i className="uil uil-times services__modal-close"></i>
                        <p className="services__modal-description">
                        Development of custom web pages. Using current technologies and libraries of the labor field.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                           <i class='bx bx-desktop services__icon'></i>
                    <h3 className="services__title">Responsive <br/> Design</h3>
                </div>

                <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal__content">
                        <i className="uil uil-times services__modal-close"></i>
                        <p className="services__modal-description">
                        Development of custom web pages. Using current technologies and libraries of the labor field.
                        </p>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                <i class='bx bxl-android  services__icon'></i>
                    <h3 className="services__title">Application <br/> Developer</h3>
                </div>

                <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal__content">
                        <i className="uil uil-times services__modal-close"></i>
                        <p className="services__modal-description">
                        React Native developer turning concepts into captivating mobile apps with clean code
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Services
