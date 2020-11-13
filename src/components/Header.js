import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        // let resumeData = this.props.resumeData;

        return (
            <React.Fragment>
                {/* <p className="navbar-dropdown">Test</p> */}
                {/* <section className="menu cid-rbrY7ExFmu" once="menu" id="menu1-m">
                    <nav className="navbar navbar-dropdown beta-menu align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">

                        <div className="menu-bottom">

                            <div className="menu-logo">
                                <div className="navbar-brand">

                                    <span className="navbar-caption-wrap">
                                        <a href="https://mobirise.com/bootstrap-template/" className="brand-link mbr-white display-4">
                                            Bootstrap One Page Template</a>
                                    </span>
                                </div>
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <div className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav nav-dropdown js-float-line" data-app-modern-menu="true">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link link mbr-white display-4 dropdown-toggle" href="#" data-toggle="dropdown-submenu">Block Demos 1</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/slider.html">Slider Header Demo</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/video-background.html">Video Background Demo</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/footer-template.html">Footer Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/table-template.html">Table Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/carousel-template.html">Carousel Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/blog.html">Gallery Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/menu-template.html">Menu Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/navigation-menu-template.html">Navigation Menu Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/navbar-template.html">Navbar Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/header-template.html">Header Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/registration-form-template.html">Registration Form Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/grid-template.html">Grid Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/social-network-template.html">Social Network Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/parallax-template.html">Parallax Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/parallax-scrolling-template.html">Parallax Scrolling Template</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link link mbr-white display-4 dropdown-toggle" href="#" data-toggle="dropdown-submenu">Block Demos 2</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/shopping-cart-template.html">Shopping Cart Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/contact-form-template.html">Contact Form Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/list-template.html">List Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/video-template.html">Video Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/photo-gallery-template.html">Photo Gallery Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/map-template.html">Map Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/faq-template.html">FAQ Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/slider-template.html">Slider Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/background-template.html">Video Background Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/documentation-template.html">Documentation Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/article-template.html">Article Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/google-maps-template.html">Google Maps Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/form-templates.html">Form Templates </a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/tab-template.html">Tab Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/video-gallery-template.html">Video Gallery Template</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link link mbr-white display-4 dropdown-toggle" href="#" data-toggle="dropdown-submenu">Site Templates 1</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/one-page.html">Bootstrap One Page Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/blog.html">Bootstrap Blog Template Demo<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/real-estate-template/">Bootstrap Real Estate Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/restaurant-template/">Bootstrap Restaurant Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/travel-template/">Bootstrap Travel Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/wedding-template/">Bootstrap Wedding Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/hotel-template/">Bootstrap Hotel Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/landing-page-template/">Bootstrap Landing Page Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/news-template/">News Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/profile-template/">Bootstrap Profile Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/education-template/">Bootstrap Education Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/coming-soon-template/">Bootstrap Coming Soon Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/error-page-template/">Bootstrap Error Page Template<br /></a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/event-template/">Bootstrap Event Template<br /></a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link link mbr-white display-4 dropdown-toggle" href="#" data-toggle="dropdown-submenu">Site Templates 2</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/about-us-page-template/" aria-expanded="false">Bootstrap About Us Page Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/agency-template/" aria-expanded="false">Bootstrap Agency Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/application-template/" aria-expanded="false">Bootstrap Application Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/business-template/" aria-expanded="false">Bootstrap Business Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/corporate-template/" aria-expanded="false">Bootstrap Corporate Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/homepage-template/" aria-expanded="false">Bootstrap Homepage Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/magazine-template/" aria-expanded="false">Bootstrap Magazine Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/agency-template/multi-page-template.html"
                                                aria-expanded="false">Bootstrap Multi Page Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/personal-website-template/" aria-expanded="false">Personal Website Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/photography-template/" aria-expanded="false">Bootstrap Photography Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/store-template/" aria-expanded="false">Bootstrap Store Template</a>
                                            <a className="dropdown-item text-white display-4" href="https://mobirise.com/bootstrap-template/web-application-template/" aria-expanded="false">Bootstrap Web Application Template</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link link mbr-white display-4 dropdown-toggle" href="#" data-toggle="dropdown-submenu">Site templates 3</a>
                                        <div className="dropdown-menu">
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-basic-template/">Bootstrap Basic Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-starter-template/">Bootstrap Starter Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/download-bootstrap-template/">Download Bootstrap Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-login-page-template/">Bootstrap Login Form Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-single-page-template/">Bootstrap Single Page Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-ecommerce-template/">Bootstrap eCommerce Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-portfolio-template/">Bootstrap Portfolio Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="index.html">Bootstrap One Page Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/best-bootstrap-templates/">Best Bootstrap Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/free-html5-bootstrap-templates/">Free html5 Bootstrap Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/premium-bootstrap-templates/">Premium Bootstrap Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-responsive-website-templates/">Bootstrap Responsive Website Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-page-templates/">Bootstrap Page Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/simple-bootstrap-template/">Simple Bootstrap Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-design-templates/">Bootstrap Design Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-templates-examples/">Bootstrap Templates Examples<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-landing-page-template/">Bootstrap Landing Page Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-theme-template/">Bootstrap Theme Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-layout-templates/">Bootstrap Layout Templates<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-sample-template/">Bootstrap Sample Template<br /></a>
                                            <a className="text-white dropdown-item display-4" href="https://mobirise.com/bootstrap-template/bootstrap-basic-template/">Bootstrap Basic Template<br /></a>
                                        </div>
                                    </li>

                                </ul>
                                <div className="navbar-buttons mbr-section-btn">
                                    <a className="btn btn-sm btn-warning display-4" href="https://mobirise.com/mobirise-free-templates.zip">Download</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section> */}

                <section className="header4 cid-r7bY6IxYOZ mbr-parallax-background" id="header4-2">



                    <div className="mbr-overlay" style={{ opacity: 0.7 }}>
                    </div>

                    <div className="container align-center">
                        <div className="row justify-content-center">
                            <div className="media-container-column mbr-white col-md-10">
                                <h2 className="mbr-section-title pb-3 mbr-fonts-style display-1">
                                    <strong>Photography</strong>
                                    <div>
                                        <strong>Workshop</strong>
                                    </div>
                                </h2>
                                <h1 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">HTML5 Bootstrap One Page Template. Two lectures and practicing.</h1>
                                <div className="mbr-section-btn pt-3">
                                    <a className="btn btn-md btn-bgr btn-warning display-4" href="#">Enroll</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="mbr-section article content1 cid-r7cw9uSKOn" id="content1-d">



                    <div className="container">
                        <div className="media-container-row">
                            <div className="mbr-text col-12 col-md-12">
                                <h2 className="mbr-fonts-style block-title align-center display-2">Course plan:</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-section article content12 cid-r7cx92Ejvt" id="content6-f">


                    <div className="container">
                        <div className="media-container-row">
                            <div className="mbr-text counter-container col-12 col-md-8 mbr-fonts-style pt-5">
                                <div className="mb-5">
                                    <h4 className="counter">01.</h4>
                                    <h3 className="mb-3 mbr-fonts-style display-5">Color Harmonies and Composition</h3>
                                    <p className="mbr-fonts-style display-7">We'll teach you what main color harmonies are and how to use them while making your photos. Also,
                            we'll learn more about composition and will review many photo examples.</p>
                                </div>
                                <div className="mb-5">
                                    <h4 className="counter">02.</h4>
                                    <h3 className="mb-3 mbr-fonts-style display-5">Using Filters&nbsp;</h3>
                                    <p className="mbr-fonts-style display-7">Our workshop is too short to learn Photoshop with Bootstrap one page template, but we'll provide
                            a great alternative: there are many apps to make a picture more interesting.</p>
                                </div>
                                <div className="mb-5">
                                    <h4 className="counter">03.</h4>
                                    <h3 className="mb-3 mbr-fonts-style display-5">Making Content Plan</h3>
                                    <p className="mbr-fonts-style display-7">If you're a social photographer, it's very important to promote yourself online, and we'll teach
                            you how to choose the right content and post regularly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features11 cid-r7iylV3OqF mbr-parallax-background" id="features11-k">
                    <div className="mbr-overlay" style={{ opacity: 0.5 }}>
                    </div>

                    <div className="container">
                        <div className="text-content">
                            <div className="media-container-row ">
                                <div className="col-md-12 mb-4">
                                    <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2">5 hours for $99</h2>

                                    <p className="mb-4 mbr-fonts-style display-7">You'll get all the additional materials on Bootstrap one page template for free. This price includes
                            two lectures and three hours of practice. Coffee-break included.</p>
                                    <div className="mbr-section-btn">
                                        <a className="btn btn-md btn-bgr btn-warning display-4" href="#">Enroll</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features7 cid-raBwuiPryE" id="features7-l">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="mbr-figure mb-4 mb-5" style={{ width: 50 }}>
                                <img src="assets/images/braden-jarvis-517227-unsplash-720x1080.jpg" alt="Mobirise" title="" />
                            </div>
                            <div className="counter-container media-content mb-4">
                                <h2 className="mb-4 mbr-fonts-style display-2">Syllabus</h2>
                                <h3 className="mbr-section-subtitle mbr-fonts-style mb-5 display-5">Back to basics: our 5-hour workshop includes the most useful info for you to star your own way in photography.</h3>
                                <div className="mb-5 half-list">
                                    <h4 className="list-counter">01.</h4>
                                    <h3 className="mb-3 content-list-title mbr-fonts-style display-5">Color Harmonies</h3>
                                    <p className="mbr-fonts-style display-7">Basic techniques for combining colors and live examples.</p>
                                </div>
                                <div className="mb-5 half-list">
                                    <h4 className="list-counter">02.</h4>
                                    <h3 className="mb-3 content-list-title mbr-fonts-style display-5">Composition</h3>
                                    <p className="mbr-fonts-style display-7">Guidelines which can often help you to enhance the impact of your photos.</p>
                                </div>
                                <div className="mb-5 half-list">
                                    <h4 className="list-counter">03.</h4>
                                    <h3 className="mb-3 content-list-title mbr-fonts-style display-5">Using Filters</h3>
                                    <p className="mbr-fonts-style display-7"> Discover the best photo editor apps to edit and blur backgrounds, retouch your smartphone photographs,
                                        etc.
                        </p>
                                </div>
                                <div className="mb-5 half-list">
                                    <h4 className="list-counter">04.</h4>
                                    <h3 className="mb-3 content-list-title mbr-fonts-style display-5">Photo Ideas</h3>
                                    <p className="mbr-fonts-style display-7">We'll share ouw own collection of photography ideas, and will help ypu to find the way to inspire
                                        yourself.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features1 cid-r7io8K1ARy" id="features1-i">



                    <div className="container-fluid">
                        <div className="row content-row">
                            <div className="mbr-figure col-lg-6">
                                <img src="assets/images/tiago-rosado-752257-unsplash-1904x1269.jpg" alt="" title="" />
                            </div>
                            <div className="media-content px-5  mbr-white py-4 col-lg-6">

                                <div className="content-block">
                                    <h2 className="mbr-section-title mbr-fonts-style pb-4 display-2">About us</h2>

                                    <p className="mbr-text testimonial-text mbr-fonts-style display-7">
                                        We are modern artists, a group of talented photographers. We have our own photo studio for Bootstrap one page template in
                                        the city. Feel free to contact us if you want to get some cool photos or rent a studio. We organize
                            workshops once in a season. Every workshop is unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-section form3 cid-r7ioHdhVWM" id="form3-j">




                    <div className="container">
                        <div className="media-container-row">
                            <div className="col-md-10 col-lg-8 block-content">
                                <div data-form-type="formoid">
                                    <h2 className="mbr-fonts-style mb-4 display-2">Contact Us</h2>
                                    <h3 className="mbr-section-subtitle mbr-fonts-style mb-4 mbr-light display-7">
                                        We will not share your data. Our manager will get back to you soon.</h3>
                                    <div data-form-alert="" hidden="">Thanks for filling out the form!</div>
                                    <form className="block mbr-form" action="https://mobirise.com/" method="post" data-form-title="Mobirise Form">
                                        <input type="hidden" name="email" data-form-email="true" value="PUt1YAP27AHQVY+yassAJ2DHtbim1O2KmseAX+GZJlvVjc5UMSApD4eemYjdqOA0DHa9th9KB1ox9moH1pMrGb0weetBycsMMawkVZ7MWbjllh9mKLxK7SUZHGAE943m" />
                                        <div className="row">
                                            <div className="col-md-12" data-for="name">
                                                <input type="text" className="form-control input" name="name" data-form-field="Name" placeholder="Name" required="" id="name-form3-j" />
                                            </div>
                                            <div className="col-md-12" data-for="email">
                                                <input type="text" className="form-control input" name="email" data-form-field="Email" placeholder="Email" required="" id="email-form3-j" />
                                            </div>
                                            <div className="col-md-12" data-for="message">
                                                <textarea className="form-control input" name="message" rows="3" data-form-field="Message" placeholder="Message" id="message-form3-j"></textarea>
                                                {/* <textarea className="form-control input" name="message" rows="3" data-form-field="Message" placeholder="Message" style={{ resize: none }} id="message-form3-j"></textarea> */}
                                            </div>
                                            <div className="input-group-btn col-md-12 mt-2">
                                                <button href="#" type="submit" className="btn btn-form btn-bgr btn-warning display-4">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cid-r7ciD1CSwF" id="footer2-9">





                    <div className="container">


                        <div className="copyright align-center mb-3">
                            <p className="mb-0 text-copyright mbr-fonts-style mbr-white display-4">
                                © Copyright 2018 Bootstrap One Page Template - All Rights Reserved
                </p>
                        </div>
                    </div>
                </section>

                <section className="mbr-section content4 cid-rbxjwrNxro" id="content4-s">



                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-8">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2 moresttitle">
                                    SITE TEMPLATES</h2>


                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-m">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/best-bootstrap-templates/">
                                            <img src="assets/images/best-bootstrap-templates-492x492.jpg" alt="Best Bootstrap Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/best-bootstrap-templates/">
                                                <strong>Best Bootstrap Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-basic-template/">
                                            <img src="assets/images/bootstrap-basic-template-492x492.jpg" alt="Bootstrap Basic Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-basic-template/">
                                                <strong>Bootstrap Basic Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-ecommerce-template/">
                                            <img src="assets/images/bootstrap-ecommerce-template-492x492.jpg" alt="Bootstrap eCommerce Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-ecommerce-template/">
                                                <strong>Bootstrap eCommerce Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-landing-page-template/">
                                            <img src="assets/images/bootstrap-landing-page-template-492x492.jpg" alt="Bootstrap Landing Page Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-landing-page-template/">
                                                <strong>Bootstrap Landing Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-n">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-layout-templates/">
                                            <img src="assets/images/bootstrap-layout-templates-492x492.jpg" alt="Bootstrap Layout Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-layout-templates/">
                                                <strong>Bootstrap Layout Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-login-page-template/">
                                            <img src="assets/images/bootstrap-login-page-template-492x492.jpg" alt="Bootstrap Login Form Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-login-page-template/">
                                                <strong>Bootstrap Login Form Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="index.html">
                                            <img src="assets/images/bootstrap-one-page-template-492x492.jpg" alt="Bootstrap One Page Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="index.html">
                                                <strong>Bootstrap One Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-page-templates/">
                                            <img src="assets/images/bootstrap-page-templates-492x492.jpg" alt="Bootstrap Page Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-page-templates/">
                                                <strong>Bootstrap Page Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-o">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-portfolio-template/">
                                            <img src="assets/images/bootstrap-portfolio-template-600x600.jpg" alt="Bootstrap Portfolio Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-portfolio-template/">
                                                <strong>Bootstrap Portfolio Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-responsive-website-templates/">
                                            <img src="assets/images/bootstrap-responsive-website-templates-600x600.jpg" alt="Bootstrap Responsive Website Templates"
                                                title="" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-responsive-website-templates/">
                                                <strong>Bootstrap Responsive Website Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-sample-template/">
                                            <img src="assets/images/bootstrap-sample-template-492x492.jpg" alt="Bootstrap Sample Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-sample-template/">
                                                <strong>Bootstrap Sample Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-single-page-template/">
                                            <img src="assets/images/bootstrap-single-page-template-492x492.jpg" alt="Bootstrap Single Page Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-single-page-template/">
                                                <strong>Bootstrap Single Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-p">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-starter-template/">
                                            <img src="assets/images/bootstrap-starter-template-492x492.jpg" alt="Bootstrap Starter Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-starter-template/">
                                                <strong>Bootstrap Starter Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-templates-examples/">
                                            <img src="assets/images/bootstrap-templates-examples-492x492.jpg" alt="Bootstrap Templates Examples" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-templates-examples/">
                                                <strong>Bootstrap Templates Examples</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-theme-template/">
                                            <img src="assets/images/bootstrap-theme-template-492x492.jpg" alt="Bootstrap Theme Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-theme-template/">
                                                <strong>Bootstrap Theme Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/download-bootstrap-template/">
                                            <img src="assets/images/download-bootstrap-template-492x492.jpg" alt="Download Bootstrap Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/download-bootstrap-template/">
                                                <strong>Download Bootstrap Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-q">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-starter-template/">
                                            <img src="assets/images/free-html5-bootstrap-templates-600x600.jpg" alt="Free HTML5 Bootstrap Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/free-html5-bootstrap-templates/">
                                                <strong>Free HTML5 Bootstrap Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/bootstrap-design-templates/">
                                            <img src="assets/images/ootstrap-design-template-492x492.jpg" alt="Bootstrap Design Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/bootstrap-design-templates/">
                                                <strong>Bootstrap Design Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/premium-bootstrap-templates/">
                                            <img src="assets/images/premium-bootstrap-templates-492x492.jpg" alt="Premium Bootstrap Templates" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/premium-bootstrap-templates/">
                                                <strong>Premium Bootstrap Templates</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/simple-bootstrap-template/">
                                            <img src="assets/images/simple-bootstrap-template-492x492.jpg" alt="Simple Bootstrap Template" title="" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/simple-bootstrap-template/">
                                                <strong>Simple Bootstrap Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-section content4 cid-qxWA1sL9mH" id="content4-oq" data-rv-view="9508">



                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-8">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2 moresttitle">
                                    <br />MORE SITE TEMPLATES</h2>


                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-sc" data-rv-view="9510">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/one-page.html">
                                            <img src="../assets/images/one-page-1.jpg" alt="HTML One Page Bootstrap Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/one-page.html" className="text-black">
                                                <strong>One Page Bootstrap Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/blog.html">
                                            <img src="../assets/images/blog.jpg" alt="HTML Bootstrap Blog Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/blog.html" className="text-black">
                                                <strong>Bootstrap Blog Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/about-us-page-template/">
                                            <img src="../assets/images/about-us-page-template.jpg" alt="HTML Bootstrap About Us Page Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/about-us-page-template/" className="text-black">
                                                <strong>Bootstrap About Us Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/agency-template/">
                                            <img src="../assets/images/agency-template.jpg" alt="HTML Bootstrap Agency Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/agency-template/" className="text-black">
                                                <strong>Bootstrap Agency Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-sd" data-rv-view="9513">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/application-template/">
                                            <img src="../assets/images/application-template.jpg" alt="HTML Bootstrap Application Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/application-template/" className="text-black">
                                                <strong>Bootstrap Application Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/business-template/">
                                            <img src="../assets/images/business-template.jpg" alt="HTML Bootstrap Business Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/business-template/" className="text-black">
                                                <strong>Bootstrap Business Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/corporate-template/">
                                            <img src="../assets/images/corporate-template.jpg" alt="HTML Bootstrap Corporate Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/corporate-template/" className="text-black">
                                                <strong>Bootstrap Corporate Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/homepage-template/">
                                            <img src="../assets/images/homepage-template.jpg" alt="HTML Bootstrap Homepage Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/homepage-template/" className="text-black">
                                                <strong>Bootstrap Homepage Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-se" data-rv-view="9516">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/magazine-template/">
                                            <img src="../assets/images/magazine-template.jpg" alt="Responsive HTML Bootstrap Magazine Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/magazine-template/" className="text-black">
                                                <strong>Bootstrap Magazine Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/agency-template/multi-page-template.html">
                                            <img src="../assets/images/multi-page-template.jpg" alt="HTML Bootstrap Multi Page Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/agency-template/multi-page-template.html" className="text-black">
                                                <strong>Bootstrap Multi Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/personal-website-template/">
                                            <img src="../assets/images/personal-website-template.jpg" alt="HTML Bootstrap Personal Website Template – Free Download"
                                                title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/personal-website-template/" className="text-black">
                                                <strong>Bootstrap Personal Website Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/photography-template/">
                                            <img src="../assets/images/photography-template.jpg" alt="HTML Bootstrap Photography Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/photography-template/" className="text-black">
                                                <strong>Bootstrap Photography Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-sf" data-rv-view="9519">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/one-page.html">
                                            <img src="../assets/images/one-page-1.jpg" alt="Responsive HTML Bootstrap One Page Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/one-page.html" className="text-black">
                                                <strong>Bootstrap One Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/blog.html">
                                            <img src="../assets/images/blog.jpg" alt="HTML Bootstrap Blog Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/blog.html" className="text-black">
                                                <strong>Bootstrap Blog Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/store-template/">
                                            <img src="../assets/images/store-template.jpg" alt="HTML Bootstrap Store Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/store-template/" className="text-black">
                                                <strong>Bootstrap Store Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/web-application-template/">
                                            <img src="../assets/images/web-application-template.jpg" alt="HTML Bootstrap Web Application Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/web-application-template/" className="text-black">
                                                <strong>Bootstrap Web Application Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-or" data-rv-view="9522">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/real-estate-template/">
                                            <img src="../assets/images/real-estate-template.jpg" alt="Responsive Bootstrap Real Estate Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/real-estate-template/" className="text-black">
                                                <strong>Bootstrap Real Estate Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/restaurant-template/">
                                            <img src="../assets/images/restaurant-template.jpg" alt="HTML Bootstrap Restaurant Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/restaurant-template/" className="text-black">
                                                <strong>Bootstrap Restaurant Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/travel-template/">
                                            <img src="../assets/images/travel-template.jpg" alt="HTML Bootstrap Travel Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/travel-template/" className="text-black">Bootstrap Travel Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/wedding-template/">
                                            <img src="../assets/images/wedding-template.jpg" alt="HTML Bootstrap Wedding Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/wedding-template/" className="text-black">
                                                <strong>Bootstrap Wedding Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-os" data-rv-view="9525">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/hotel-template/">
                                            <img src="../assets/images/hotel-template.jpg" alt="Responsive HTML Bootstrap Hotel Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/hotel-template/" className="text-black">
                                                <strong>Bootstrap Hotel Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/landing-page-template/">
                                            <img src="../assets/images/landing-page-template.jpg" alt="Bootstrap HTML Landing Page Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/landing-page-template/" className="text-black">
                                                <strong>Bootstrap Landing Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/news-template/">
                                            <img src="../assets/images/news-template.jpg" alt="HTML Bootstrap News Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/news-template/" className="text-black">
                                                <strong>Bootstrap News Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/profile-template/">
                                            <img src="../assets/images/profile-template.jpg" alt="HTML Bootstrap Profile Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/profile-template/" className="text-black">
                                                <strong>Bootstrap Profile Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-ot" data-rv-view="9528">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/education-template/">
                                            <img src="../assets/images/education-template.jpg" alt="Responsive Bootstrap Education Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/education-template/" className="text-black">
                                                <strong>Bootstrap Education&nbsp;Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/coming-soon-template/">
                                            <img src="../assets/images/coming-soon-template.jpg" alt="Bootstrap Coming Soon Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/coming-soon-template/" className="text-black">
                                                <strong>Bootstrap Coming Soon Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/error-page-template/">
                                            <img src="../assets/images/error-template.jpg" alt="HTML Bootstrap  Error Page Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/error-page-template/" className="text-black">
                                                <strong>Bootstrap Error Page Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/event-template/">
                                            <img src="../assets/images/event-template.jpg" alt="HTML Bootstrap  Event Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/event-template/" className="text-black">
                                                <strong>Bootstrap Event Template</strong>
                                            </a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-section content4 cid-qvQKn9LXS2" id="content4-gk" data-rv-view="9531">



                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-8">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2 moresttitle">
                                    <br />MORE BLOCK TEMPLATES</h2>


                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gl" data-rv-view="9533">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/slider-template.html">
                                            <img src="../assets/images/slider-template.jpg" alt="Responsive Bootstrap Slider Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/slider-template.html" className="text-black">HTML Slider Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/header-template.html">
                                            <img src="../assets/images/header-template.jpg" alt="Bootstrap Header Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/header-template.html" className="text-black">HTML Header Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/carousel-template.html">
                                            <img src="../assets/images/carousel-template.jpg" alt="HTML Bootstrap  Carousel Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/carousel-template.html" className="text-black">HTML Carousel Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/parallax-scrolling-template.html">
                                            <img src="../assets/images/parallax-scrolling-template.jpg" alt="HTML Bootstrap  Parallax Scrolling Template – Free Download"
                                                title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/parallax-scrolling-template.html" className="text-black">HTML Parallax Scrolling Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gm" data-rv-view="9536">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/article-template.html">
                                            <img src="../assets/images/article-template.jpg" alt="Bootstrap  Article Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/article-template.html" className="text-black">HTML Article Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/documentation-template.html">
                                            <img src="../assets/images/documentation-template.jpg" alt="HTML Bootstrap  Documentation Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/documentation-template.html" className="text-black">HTML Documentation Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/faq-template.html">
                                            <img src="../assets/images/faq-template.jpg" alt="Bootstrap FAQ Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/faq-template.html" className="text-black">HTML FAQ Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/footer-template.html">
                                            <img src="../assets/images/footer-template.jpg" alt="Bootstrap Footer Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/footer-template.html" className="text-black">HTML Footer Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gn" data-rv-view="9539">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/form-templates.html">
                                            <img src="../assets/images/form-templates.jpg" alt="Bootstrap Form Templates – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/form-templates.html" className="text-black">HTML Form Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/gallery-template.html">
                                            <img src="../assets/images/gallery-template.jpg" alt="Bootstrap  Gallery Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/gallery-template.html" className="text-black">HTML Gallery Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/grid-template.html">
                                            <img src="../assets/images/grid-template.jpg" alt="HTML Bootstrap  Grid Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <strong>
                                                <a href="https://mobirise.com/bootstrap-template/grid-template.html" className="text-black">HTML Grid Template</a>
                                            </strong>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/list-template.html">
                                            <img src="../assets/images/list-template.jpg" alt="Bootstrap  List Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/list-template.html" className="text-black">HTML List Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-go" data-rv-view="9542">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/map-template.html">
                                            <img src="../assets/images/map-template.jpg" alt="Bootstrap  Map Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/map-template.html" className="text-black">HTML Map Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/parallax-template.html">
                                            <img src="../assets/images/parallax-template.jpg" alt="Bootstrap Parallax Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/parallax-template.html" className="text-black">HTML Parallax Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/photo-gallery-template.html">
                                            <img src="../assets/images/photo-gallery-template.jpg" alt="HTML Bootstrap  Photo Gallery Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/photo-gallery-template.html" className="text-black">HTML Photo Gallery Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/registration-form-template.html">
                                            <img src="../assets/images/registration-form-template.jpg" alt="Responsive Bootstrap  Registration Form Template – Free Download"
                                                title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/registration-form-template.html" className="text-black">HTML Registration Form Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gp" data-rv-view="9545">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/social-network-template.html">
                                            <img src="../assets/images/social-network-template.jpg" alt="HTML5 Bootstrap  Social Network Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/social-network-template.html" className="text-black">HTML Social Network Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/table-template.html">
                                            <img src="../assets/images/table-template.jpg" alt="Responsive Bootstrap  Table Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/table-template.html" className="text-black">HTML Table Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/background-template.html">
                                            <img src="../assets/images/video-bg-template.jpg" alt="Responsive Bootstrap  Video Background Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/background-template.html" className="text-black">HTML Video Background Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/video-gallery-template.html">
                                            <img src="../assets/images/video-gallery-template.jpg" alt="HTML5 Bootstrap  Video Gallery Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/video-gallery-template.html" className="text-black">HTML Video Gallery Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gq" data-rv-view="9548">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/shopping-cart-template.html">
                                            <img src="../assets/images/shopping-cart.jpg" alt="HTML5Bootstrap  Shopping Cart Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/shopping-cart-template.html" className="text-black">HTML Shopping Cart Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/tab-template.html">
                                            <img src="../assets/images/tab-template.jpg" alt="Responsive Bootstrap  Tab Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/tab-template.html" className="text-black">HTML Tab Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/google-maps-template.html">
                                            <img src="../assets/images/google-maps-template.jpg" alt="Bootstrap Google Maps Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/google-maps-template.html" className="text-black">HTML Google Maps Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/navbar-template.html">
                                            <img src="../assets/images/contact-form-template-1.jpg" alt="Responsive Bootstrap  Navbar Template – Free Download" title=""
                                                media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/navbar-template.html" className="text-black">HTML Navbar Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gr" data-rv-view="9551">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/video-template.html">
                                            <img src="../assets/images/video-template.jpg" alt="Responsive Bootstrap  Video Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/video-template.html" className="text-black">HTML Video Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/menu-template.html">
                                            <img src="../assets/images/menu-template.jpg" alt="Bootstrap Menu Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/menu-template.html" className="text-black">HTML Menu Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/navigation-menu-template.html">
                                            <img src="../assets/images/navigation-menu.jpg" alt="HTML Bootstrap  Navigation Menu Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/navigation-menu-template.html" className="text-black">HTML Navigation Menu Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/navbar-template.html">
                                            <img src="../assets/images/navbar-template.jpg" alt="Bootstrap  Navbar Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/navbar-template.html" className="text-black">HTML Navbar Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features2 morest" id="features2-gs" data-rv-view="9554">





                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/slider.html">
                                            <img src="../assets/images/slider.jpg" alt="Bootstrap Full-Screen Slider Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/slider.html" className="text-black">HTML Full-Screen Slider Header Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/parallax-template.html">
                                            <img src="../assets/images/parallax-template.jpg" alt="Bootstrap  Parallax Template – Free Download" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box ">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/parallax-template.html" className="text-black">HTML Parallax Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/video-background.html">
                                            <img src="../assets/images/video-bg.jpg" alt="Free Download Video Background Bootstrap Template" title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/video-background.html" className="text-black">HTML Video Background Jumbotron Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <a href="https://mobirise.com/bootstrap-template/registration-form-template.html">
                                            <img src="../assets/images/registration-form-template.jpg" alt="Responsive Bootstrap  Registration Form Template – Free Download"
                                                title="" media-simple="true" />
                                        </a>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                            <a href="https://mobirise.com/bootstrap-template/registration-form-template.html" className="text-black">HTML Registration Form Template</a>
                                        </h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}