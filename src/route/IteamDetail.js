function IteamDetail() {
    return(
        <div>
            <section class="br/eadcrumb-area overlay-dark d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="br/eadcrumb-content text-center">
                            <h2 class="m-0">Item Details</h2>
                            <ol class="br/eadcrumb d-flex justify-content-center">
                                <li class="br/eadcrumb-item"><a href="/">Home</a></li>
                                <li class="br/eadcrumb-item"><a href="/explore">Explore</a></li>
                                <li class="br/eadcrumb-item active">Item Details</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="item-details-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-lg-5">
                        <div class="item-info">
                            <div class="item-thumb text-center">
                                <img src="assets/img/content/auction_2.jpg" alt=""/>
                            </div>
                            <div class="card no-hover countdown-times my-4">
                                <div class='countdown d-flex justify-content-center' data-date="2022-03-30"></div>
                            </div>
                            <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
                                <li>
                                    <a class="active" id="nav-home-tab" data-toggle="pill" href="#nav-home">
                                        <h5 class="m-0">Bids</h5>
                                    </a>
                                </li>
                                <li>
                                    <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                                        <h5 class="m-0">History</h5>
                                    </a>
                                </li>
                                <li>
                                    <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                                        <h5 class="m-0">Details</h5>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home">
                                    <ul class="list-unstyled">
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_1.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>14 ETH</strong> 4 hours ago <br/>by <a href="author.html">@arham</a></p>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_2.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>10 ETH</strong> 8 hours ago <br/>by <a href="author.html">@junaid</a></p>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_3.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>12 ETH</strong> 3 hours ago <br/>by <a href="author.html">@yasmin</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="nav-profile">
                                    <ul class="list-unstyled">
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_6.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>32 ETH</strong> 10 hours ago <br/>by <a href="author.html">@hasan</a></p>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_7.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>24 ETH</strong> 6 hours ago <br/>by <a href="author.html">@artnox</a></p>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <img class="avatar-sm rounded-circle mr-3" src="assets/img/content/avatar_8.jpg" alt=""/>
                                            <p class="m-0">Bid listed for <strong>29 ETH</strong> 12 hours ago <br/>by <a href="author.html">@meez</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="nav-contact">
                                    <div class="owner-meta d-flex align-items-center mt-3">
                                        <span>Owner</span>
                                        <a class="owner d-flex align-items-center ml-2" href="author.html">
                                            <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_1.jpg" alt=""/>
                                            <h6 class="ml-2">Themeland</h6>
                                        </a>
                                    </div>
                                    <p class="mt-2">Created : 15 Jul 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="content mt-5 mt-lg-0">
                            <h3 class="m-0">Walking On Air</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <div class="owner d-flex align-items-center">
                                <span>Owned By</span>
                                <a class="owner-meta d-flex align-items-center ml-3" href="author.html">
                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_1.jpg" alt=""/>
                                    <h6 class="ml-2">Themeland</h6>
                                </a>
                            </div>
                            <div class="item-info-list mt-4">
                                <ul class="list-unstyled">
                                    <li class="price d-flex justify-content-between">
                                        <span>Current Price 1.5 ETH</span>
                                        <span>$500.89</span>
                                        <span>1 of 5</span>
                                    </li>
                                    <li>
                                        <span>Size</span>
                                        <span>14000 x 14000 px</span>
                                    </li>
                                    <li>
                                        <span>Volume Traded</span>
                                        <span>64.1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="row items">
                                <div class="col-12 col-md-6 item px-lg-2">
                                    <div class="card no-hover">
                                        <div class="single-seller d-flex align-items-center">
                                            <a href="author.html">
                                                <img class="avatar-md rounded-circle" src="assets/img/content/avatar_1.jpg" alt=""/>
                                            </a>
                                            <div class="seller-info ml-3">
                                                <a class="seller mb-2" href="author.html">@ArtNoxStudio</a>
                                                <span>Creator</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 item px-lg-2">
                                    <div class="card no-hover">
                                        <div class="single-seller d-flex align-items-center">
                                            <a href="author.html">
                                                <img class="avatar-md rounded-circle" src="assets/img/content/avatar_1.jpg" alt=""/>
                                            </a>
                                            <div class="seller-info ml-3">
                                                <a class="seller mb-2" href="explore-2.html">Virtual Worlds</a>
                                                <span>Collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 item px-lg-2">
                                    <div class="card no-hover">
                                        <h4 class="mt-0 mb-2">Highest Bid</h4>
                                        <div class="price d-flex justify-content-between align-items-center">
                                            <span>2.9 BNB</span>
                                            <span>1 of 5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="d-block btn btn-bordered-white mt-4" href="wallet-connect.html">Place a Bid</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="live-auctions-area pt-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro d-flex justify-content-between align-items-end m-0">
                            <div class="intro-content">
                                <span>Auctions</span>
                                <h3 class="mt-3 mb-0">Live Auctions</h3>
                            </div>
                            <div class="intro-btn">
                                <a class="btn content-btn" href="auctions.html">View All</a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_1.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2021-12-09"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Virtual Worlds</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_1.jpg" alt=""/>
                                                <span class="ml-2">@Richard</span>
                                            </a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_2.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2021-10-05"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Collectibles</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_2.jpg" alt=""/>
                                                <span class="ml-2">@JohnDeo</span>
                                            </a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_3.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2021-09-15"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Arts</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_3.jpg" alt=""/>
                                                <span class="ml-2">@MKHblots</span>
                                            </a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_4.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2021-12-29"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Robotic Arts</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_4.jpg" alt=""/>
                                                <span class="ml-2">@RioArham</span>
                                            </a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_5.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2022-01-24"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Design Illusions</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_5.jpg" alt=""/>
                                                <span class="ml-2">@ArtNox</span>
                                            </a>
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
                                        <a href="item-details.html">
                                            <img class="card-img-top" src="assets/img/content/auction_6.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <div class="countdown-times mb-3">
                                                <div class='countdown d-flex justify-content-center' data-date="2022-03-30"></div>
                                            </div>
                                            <a href="item-details.html">
                                                <h5 class="mb-0">Design Illusions</h5>
                                            </a>
                                            <a class="seller d-flex align-items-center my-3" href="author.html">
                                                <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_6.jpg" alt=""/>
                                                <span class="ml-2">@ArtNox</span>
                                            </a>
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
        </div>
    );
}

export default IteamDetail