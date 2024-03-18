import { Link } from "react-router-dom";

function Index() {
    return (
        <div className="main">
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-7">
                            <span>NetStorm</span>
                            <h1 class="mt-4">Discover, collect, and sell extraordinary
                                NFTs</h1>
                            <p>Explore on the world's best & largest NFT marketplace</p>
                            <div class="button-group">
                                <Link class="btn btn-bordered-white" to="/Explore"><i
                                    class="icon-rocket mr-2"></i>Explore</Link>
                                <Link class="btn btn-bordered-white" to="/Create"><i
                                    class="icon-note mr-2"></i>Create</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465"
                        version="1.1">
                        <defs>
                            <lineargradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%"
                                y2="98.4657689%" id="linearGradient-1">
                                <stop stop-color="rgba(69,40,220, 0.15)" offset="0%" />
                                <stop stop-color="rgba(87,4,138, 0.15)" offset="100%" />
                            </lineargradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                            fill-rule="evenodd">
                            <polygon points fill="url(#linearGradient-1)">
                                <animate id="graph-animation" xmlns="http://www.w3.org/2000/svg"
                                    dur="2s" repeatCount attributeName="points"
                                    values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;"
                                    fill="freeze" />
                            </polygon>
                        </g>
                    </svg>
                </div>
            </section>

            <section class="live-auctions-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div
                                class="intro d-flex justify-content-between align-items-end m-0">
                                <div class="intro-content">
                                    <span>Auctions</span>
                                    <h3 class="mt-3 mb-0">Live Auctions</h3>
                                </div>
                                <div class="intro-btn">
                                    <Link class="btn content-btn" to="auctions.html">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="auctions-slides">
                        <div class="swiper-container slider-mid items">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="./assets/img/content/auction_1.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2021-12-09"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Virtual Worlds</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_1.jpg" alt="" />
                                                    <span class="ml-2">@Richard</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.5 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="assets/img/content/auction_2.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2021-10-05"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Collectibles</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_2.jpg" alt="" />
                                                    <span class="ml-2">@JohnDeo</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>2.7 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="assets/img/content/auction_3.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2021-09-15"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Arts</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_3.jpg" alt="" />
                                                    <span class="ml-2">@MKHblots</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>2.3 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="assets/img/content/auction_4.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2021-12-29"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Robotic Arts</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_4.jpg" alt="" />
                                                    <span class="ml-2">@RioArham</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.8 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="assets/img/content/auction_5.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2022-01-24"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Design Illusions</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_5.jpg" alt="" />
                                                    <span class="ml-2">@ArtNox</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.7 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide item">
                                    <div class="card">
                                        <div class="image-over">
                                            <Link to="/IteamDetail">
                                                <img class="card-img-top"
                                                    src="assets/img/content/auction_6.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <div class="countdown-times mb-3">
                                                    <div class='countdown d-flex justify-content-center'
                                                        data-date="2022-03-30"></div>
                                                </div>
                                                <Link to="/IteamDetail">
                                                    <h5 class="mb-0">Design Illusions</h5>
                                                </Link>
                                                <Link class="seller d-flex align-items-center my-3"
                                                    to="/IteamDetail">
                                                    <img class="avatar-sm rounded-circle"
                                                        src="assets/img/content/avatar_6.jpg" alt="" />
                                                    <span class="ml-2">@ArtNox</span>
                                                </Link>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.7 BNB</span>
                                                    <span>1 of 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="top-seller-area p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro m-0">
                                <div class="intro-content">
                                    <span>Creative Artist</span>
                                    <h3 class="mt-3 mb-0">Top Sellers</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_1.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@Richard</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_2.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@JohnDeo</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_3.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@Junaid</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_4.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@Yasmin</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_5.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@ArhamH</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <Link to="/author">
                                        <img class="avatar-md rounded-circle"
                                            src="assets/img/content/avatar_6.jpg" alt="" />
                                    </Link>
                                    <div class="seller-info ml-3">
                                        <Link class="seller mb-2" to="/author">@Richard</Link>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="popular-collections-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div
                                class="intro d-flex justify-content-between align-items-end m-0">
                                <div class="intro-content">
                                    <span>Most Popular</span>
                                    <h3 class="mt-3 mb-0">Popular Collections</h3>
                                </div>
                                <div class="intro-btn">
                                    <Link class="btn content-btn text-left"
                                        to="/explore">Explore More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_1.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_1.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Virtual Worlds</h5>
                                        </Link>
                                        <span>ERC-729</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_2.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_2.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Digital Arts</h5>
                                        </Link>
                                        <span>ERC-522</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_3.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_3.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Sports</h5>
                                        </Link>
                                        <span>ERC-495</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_4.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_4.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Photography</h5>
                                        </Link>
                                        <span>ERC-873</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_5.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_5.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Trading Cards</h5>
                                        </Link>
                                        <span>ERC-397</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_6.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_6.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Walking On Air</h5>
                                        </Link>
                                        <span>ERC-403</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_7.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_7.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Domain Names</h5>
                                        </Link>
                                        <span>ERC-687</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top"
                                            src="assets/img/content/author_8.jpg" alt="" />
                                    </Link>
                                    <Link class="seller" to="/IteamDetail">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle"
                                                src="assets/img/content/avatar_8.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-2">Collectibles</h5>
                                        </Link>
                                        <span>ERC-972</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="explore-area p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro d-flex justify-content-between align-items-end m-0">
                                <div class="intro-content">
                                    <span>Exclusive Assets</span>
                                    <h3 class="mt-3 mb-0">Explore</h3>
                                </div>
                                <div class="intro-btn">
                                    <Link class="btn content-btn" to="/explore">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_1.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Walking On Air</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Richard</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.5 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_2.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Domain Names</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">John Deo</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>2.7 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_3.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Trading Cards</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Arham</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>2.3 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_4.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Industrial Revolution</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Yasmin</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.8 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_5.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Utility</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Junaid</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.7 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_6.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Sports</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">ArtNox</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.7 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_7.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Cartoon Heroes</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Junaid</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>3.2 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_8.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Gaming Chair</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Johnson</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>0.69 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_9.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Utility</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Junaid</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.7 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_10.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Sports</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">ArtNox</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>1.7 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="assets/img/content/auction_11.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Cartoon Heroes</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Junaid</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>3.2 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="/IteamDetail"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card">
                                <div class="image-over">
                                    <Link to="/IteamDetail">
                                        <img class="card-img-top" src="./assets/img/content/auction_12.jpg" alt="" />
                                    </Link>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <Link to="/IteamDetail">
                                            <h5 class="mb-0">Gaming Chair</h5>
                                        </Link>
                                        <div class="seller d-flex align-items-center my-3">
                                            <span>Owned By</span>
                                            <Link to="/author">
                                                <h6 class="ml-2 mb-0">Johnson</h6>
                                            </Link>
                                        </div>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>0.69 ETH</span>
                                            <span>1 of 1</span>
                                        </div>
                                        <Link class="btn btn-bordered-white btn-smaller mt-3" to="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section class="work-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro mb-4">
                                <div class="intro-content">
                                    <span>How It Works</span>
                                    <h3 class="mt-3 mb-0">Create and sell your NFTs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-wallet text-effect"></i>
                                <h4>Set up your wallet</h4>
                                <p>Once you’ve set up your wallet of choice, connect it to
                                    OpenSea by clicking the NFT Marketplace in the top right
                                    corner. Learn about the wallets we support.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-grid text-effect"></i>
                                <h4>Create your collection</h4>
                                <p>Click Create and set up your collection. Add social links, a
                                    description, profile & banner images, and set a secondary
                                    sales fee.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-drawer text-effect"></i>
                                <h4>Add your NFTs</h4>
                                <p>Upload your work (image, video, audio, or 3D art), add a
                                    title and description, and customize your NFTs with
                                    properties, stats, and unlockable content.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-bag text-effect"></i>
                                <h4>List them for sale</h4>
                                <p>Choose between auctions, fixed-price listings, and
                                    declining-price listings. You choose how you want to sell your
                                    NFTs!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default Index