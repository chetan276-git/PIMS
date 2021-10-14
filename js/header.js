class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                <header class="navigation">
                <div
                class="container"
                style="border-bottom: 1px solid #d6d6d6; background: #ffff"
                >
                <div class="row">
                    <div class="col-12">
                    <div class="brand">
                        <a href="#!">Logo</a>
                    </div>
                    <nav>
                        <div class="nav-mobile">
                        <a id="nav-toggle" href="#!"><span></span></a>
                        </div>
                        <ul class="nav-list">
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li>
                            <a href="#!">Services</a>
                            <ul class="nav-dropdown">
                            <li>
                                <a href="#!">Web Design</a>
                            </li>
                            <li>
                                <a href="#!">Web Development</a>
                            </li>
                            <li>
                                <a href="#!">Graphic Design</a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">Pricing</a>
                        </li>
                        <li>
                            <a href="#!">Portfolio</a>
                            <ul class="nav-dropdown">
                            <li>
                                <a href="#!">Web Design</a>
                            </li>
                            <li>
                                <a href="#!">Web Development</a>
                            </li>
                            <li>
                                <a href="#!">Graphic Design</a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </header>
            <div class="sub-header">
                <div class="container">
                <div class="row">
                    <div class="col-md-9">
                    <div class="main-flex d-flex justify-content-start">
                        <div class="flex-wrap d-flex justify-content-start">
                        <div class="circle-round rounded-circle text-center">
                            <i class="fas fa-city"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Jl. Sunset Road</h3>
                            <h4>Kuta, Bali - 80361</h4>
                        </div>
                        </div>
                        <div class="flex-wrap d-flex justify-content-start">
                        <div class="circle-round rounded-circle text-center">
                            <i class="fas fa-phone" style="transform: rotate(90deg)"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Phone Number</h3>
                            <a href="#">Kuta, Bali - 80361</a>
                        </div>
                        </div>
                        <div class="flex-wrap d-flex justify-content-start">
                        <div class="circle-round rounded-circle text-center">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Send Your Mail</h3>
                            <a href="#">Kuta, Bali - 80361</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="btn-wrapper">
                        <button class="btn-web">Contact Us</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          `;
  }
}
customElements.define('header-component', Header);
