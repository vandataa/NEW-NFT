const { Link } = require("react-router-dom");

function Active() {
    return (
        <div>
            <section class="breadcrumb-area overlay-dark d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content text-center">
                                <h2 class="m-0">Activity</h2>
                                <ol class="breadcrumb d-flex justify-content-center">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active">Activity</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="activity-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro mb-4">
                                <div class="intro-content">
                                    <span>Creative</span>
                                    <h3 class="mt-3 mb-0">Activity</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-md-6 col-lg-8">
                            <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
                                <li>
                                    <a class="active" id="nav-home-tab" data-toggle="pill" href="#nav-home">
                                        <h5 class="m-0">All</h5>
                                    </a>
                                </li>
                                <li>
                                    <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                                        <h5 class="m-0">Recent</h5>
                                    </a>
                                </li>
                                <li>
                                    <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                                        <h5 class="m-0">Purchase</h5>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home">
                                    <ul class="list-unstyled">
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_5.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Walking On Air</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>14 ETH</strong> 4 hours ago <br/>by <a href="author.html">@arham</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_6.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Virtual Worlds</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>10 ETH</strong> 8 hours ago by <a href="author.html">@junaid</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_7.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Collectibles</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>12 ETH</strong> 3 hours ago <br/>by <a href="author.html">@yasmin</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_8.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Digital Arts</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>22 ETH</strong> 9 hours ago <br/>by <a href="author.html">@john</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_9.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Design Illusions</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>42 ETH</strong> 7 hours ago by <a href="author.html">@william</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_10.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Industrial</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>36 ETH</strong> 10 hours ago <br/>by <a href="author.html">@sara</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="nav-profile">
                                    <ul class="list-unstyled">
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_6.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Virtual Worlds</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>10 ETH</strong> 8 hours ago <br/>by <a href="author.html">@junaid</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_7.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Collectibles</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>12 ETH</strong> 3 hours ago by <a href="author.html">@yasmin</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_8.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Digital Arts</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>22 ETH</strong> 9 hours ago <br/>by <a href="author.html">@john</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_9.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Photography</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>69 ETH</strong> 12 hours ago <br/>by <a href="author.html">@junaid</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="nav-contact">
                                    <ul class="list-unstyled">
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_1.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Design Illusions</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>10 ETH</strong> 8 hours ago <br/>by <a href="author.html">@junaid</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_2.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Digital Arts</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>12 ETH</strong> 3 hours ago by <a href="author.html">@yasmin</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_3.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Photography</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>22 ETH</strong> 9 hours ago <br/>by <a href="author.html">@john</a></p>
                                            </div>
                                        </li>
                                        <li class="single-tab-list d-flex align-items-center">
                                            <a href="item-details.html">
                                                <img class="avatar-lg" src="assets/img/content/auction_4.jpg" alt=""/>
                                            </a>
                                            <div class="activity-content ml-4">
                                                <a href="item-details.html">
                                                    <h5 class="mt-0 mb-2">Virtual Worlds</h5>
                                                </a>
                                                <p class="m-0">Bid listed for <strong>69 ETH</strong> 12 hours ago <br/>by <a href="author.html">@junaid</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="activity-content mt-5 mt-lg-0">
                                <div class="single-widget">
                                    <div class="widget-content search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your keywords"/>
                                        </form>
                                    </div>
                                </div>
                                <div class="single-widget">
                                    <div class="widget filter-widget">
                                        <h4 class="title">Filters</h4>
                                        <div class="widget-content">
                                            <div class="widget-content filter-widget-items mt-3">
                                                <a href="/" class="badge tag">Listing</a>
                                                <a href="/" class="badge tag">Likes</a>
                                                <a href="/" class="badge tag">Purchase</a>
                                                <a href="/" class="badge tag">Transfer</a>
                                                <a href="/" class="badge tag">Sales</a>
                                                <a href="/" class="badge tag">Bids</a>
                                                <a href="/" class="badge tag">Burns</a>
                                                <a href="/" class="badge tag">Followings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Active