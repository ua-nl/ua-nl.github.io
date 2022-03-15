import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/fontawesome-free-brands'

import styles from './Footer.module.css'


export const Footer: React.FC<{}> = ({ }) => {
    return (
<footer className={styles.footerSection}>
    <Container>
        <div className={`${styles.footerCTA} pt-80 pb-20`}>
            <Row>
                <div className={`col-xl-4 col-md-4 mb-30`}>
                    <div className={styles.singleCTA}>
                        <i className={`fas fa-briefcase`}></i>
                        <div className={styles.ctaText}>
                            <h4>KVK:</h4>
                            <span>60054050</span>
                            <h4>ANBI:</h4>
                            <span>853747945</span>
                        </div>
                    </div>
                </div>
                <Col xl={4} md={4} className="mb-30">
                    <div className={styles.singleCTA}>
                        <i className={`fas fa-phone`}></i>
                        <div className={styles.ctaText}>
                            <h4>Call us</h4>
                            <span>989-554-6987</span>
                        </div>
                    </div>
                </Col>
                <Col xl={4} md={4} className="mb-30">
                    <div className={styles.singleCTA}>
                        <i className={`far fa-envelope-open`}></i>
                        <div className={styles.ctaText}>
                            <h4>Mail us</h4>
                            <span>mail@example.com</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className={`${styles.footerContent} pt-50 pb-30`}>
            <div className={styles.footerPattern}>
                <img src="{{site.baseurl}}/assets/img/footer/footer_map.png" alt=""/>
            </div>
            <Row>
                <div className={`col-xl-4 col-lg-4 mb-50`}>
                    <div className={styles.footerWidget}>
                        <div className={styles.footerLogo}>
                            <a href="{{site.url}}"><img src="{{site.logo_2}}" className={`img-fluid`} alt="{{site.title}}" /></a>
                        </div>
                        <div className={styles.footerText}>
                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur
                                adipisicing elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={styles.footerSocialIcon}>
                            <span>Follow us</span>
                            <a href="#"><i><FontAwesomeIcon icon={faFacebookF} className="facebookBg" /> </i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faTwitter} className="twitterBg" /> </i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faLinkedin} className="linkedinBg" /> </i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faInstagram} className="instagramBg" /> </i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faYoutube} className="youtubeBg" /> </i></a>

                        </div>
                    </div>
                </div>
                <div className={`col-xl-4 col-lg-4 col-md-6 mb-30`}>
                    <div className={styles.footerWidget}>
                        <div className={styles.footerWidgetHeading}>
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`col-xl-4 col-lg-4 col-md-6 mb-50`}>
                    <div className={styles.footerWidget}>
                        <div className={styles.footerWidgetHeading}>
                            <h3>Subscribe</h3>
                        </div>
                        <div className={`${styles.footerText} mb-25`}>
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        {/* {% include subscribe.html %} */}
                    </div>
                </div>
            </Row>
        </div>
    </Container>
    <div className={styles.copyrightArea}>
        <Container>
            <Row>
                <Col xl={6} lg={6} className={`text-center text-lg-left`}>
                    <div className={styles.copyrightText}>
                        <p>Copyright &copy; 2022, All Right Reserved <a href="#">Trade</a></p>
                    </div>
                </Col>
                <div className={`col-xl-6 col-lg-6 d-none d-lg-block text-right`}>
                    <div className={styles.footerMenu}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
</footer>
    )
}