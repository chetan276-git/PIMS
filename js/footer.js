class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <footer class="footer">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="first-wrap">
                    <div class="for-logo">
                        <a href="index.html"><img src="images/footer.png" alt="logo"></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <div class="footer-icons d-flex">
                        <div class="box-1"><a href="#"><i class="fab fa-facebook-f"></i></a></div>
                        <div class="box-1"><a href="#"><i class="fab fa-twitter"></i></a></div>
                        <div class="box-1"><a href="#"><i class="fab fa-instagram"></i></a></div>
                        <div class="box-1"><a href="#"><i class="fab fa-linkedin-in"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="quick-links">
                    <h4>Quick Links</h4>
                    <div class="line"></div>
                    <div class="links">
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects </a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="quick-links">
                    <h4>Useful Links</h4>
                    <div class="line"></div>
                    <div class="links">
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="#">Disclaimer</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="newsletter">
                    <div class="quick-links">
                        <h4>Newsletter</h4>
                        <div class="line"></div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        <form class=" d-flex">
                            <div class="form-group">
                                <input type="text" placeholder="Your Email Address">
                            </div>
                            <button class="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="three-box">
            <div class="row">
                <div class="col-lg-4">
                    <div class="box-2 d-flex justify-content-center align-items-center">
                        <div class="box-2-icon">
                            <span class="circle"><i class="fas fa-phone-alt"></i></span>
                        </div>
                        <div class="text">
                            <span>(+62)81 157 2241</span>
                            <p>Give Us A Call</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box-mid d-flex justify-content-center align-items-center">
                        <div class="box-mid-icon">
                            <span class="circle"><i class="fas fa-envelope"></i></span>
                        </div>
                        <div class="text">
                            <span>support@domain.com</span>
                            <p>Drop Us a Line</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box-2 d-flex justify-content-center align-items-center">
                        <div class="box-2-icon">
                            <span class="circle"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <div class="text">
                            <span>(+62)81 157 2241</span>
                            <p>Give Us A Call</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="last-section">
            <div class="row">
                <div class="col-lg-6">
                    <div class="last-section-text">
                        <h4> Electrical Service & Installation Template Kit by Jegtheme </h4>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="last-section-text-2 text-right">
                        <h4>Copyright © 2021. All rights reserved.</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    `;
    }
}
customElements.define('footer-component', Footer);