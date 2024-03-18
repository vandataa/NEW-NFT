function Explore() {
    return(
        <div>
        <section class="breadcrumb-area overlay-dark d-flex align-items-center">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h2 class="m-0">Explore</h2>
                            <ol class="breadcrumb d-flex justify-content-center">

                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href="/explore">Explore</a></li>
                                <li class="breadcrumb-item active">Explore Style 2</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="explore-area">
            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-12 col-md-8 col-lg-7">
                        <div class="intro text-center mb-4">
                            <span>Explore</span>
                            <h3 class="mt-3 mb-0">Exclusive Digital Assets</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="col-12">
                        <div class="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4" data-toggle="buttons">
                            <label class="btn active d-table text-uppercase p-2">
                                <input type="radio" value="all" checked class="explore-btn"/>

                                <span>All</span>
                            </label>
                            <label class="btn d-table text-uppercase p-2">
                                <input type="radio" value="art" class="explore-btn"/>
                                <span>Art</span>
                            </label>
                            <label class="btn d-table text-uppercase p-2">
                                <input type="radio" value="music" class="explore-btn"/>
                                <span>Music</span>
                            </label>
                            <label class="btn d-table text-uppercase p-2">
                                <input type="radio" value="collectibles" class="explore-btn"/>
                                <span>Collectibles</span>
                            </label>
                            <label class="btn d-table text-uppercase p-2">
                                <input type="radio" value="sports" class="explore-btn"/>
                                <span>Sports</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row items explore-items">
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["art","sports"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_1.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Walking On Air</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Richard</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.5 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["collectibles","sports"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_2.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Domain Names</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">John Deo</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>2.7 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["art","music"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_3.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Trading Cards</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Arham</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>2.3 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["sports","art","music"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_4.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Industrial Revolution</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Yasmin</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.8 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["music","sports","collectibles"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_5.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Utility</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Junaid</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.7 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["collectibles","sports"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_6.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Sports</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">ArtNox</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.7 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["art","sports"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_7.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Cartoon Heroes</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Junaid</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>3.2 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["music","sports","art","collectibles"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_8.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Gaming Chair</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Johnson</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>0.69 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["music","sports","collectibles"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_9.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Utility</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Junaid</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.7 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["art","music"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_10.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Sports</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">ArtNox</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>1.7 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["sports","art","music"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_11.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Cartoon Heroes</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Junaid</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>3.2 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["music","sports","collectibles"]'>
                        <div class="card">
                            <div class="image-over">
                                <a href="item-details.html">
                                    <img class="card-img-top" src="assets/img/content/auction_12.jpg" alt=""/>
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a href="item-details.html">

                                        <h5 class="mb-0">Gaming Chair</h5>

                                    </a>
                                    <div class="seller d-flex align-items-center my-3">
                                        <span>Owned By</span>
                                        <a href="author.html">
                                            <h6 class="ml-2 mb-0">Johnson</h6>
                                        </a>
                                    </div>
                                    <div class="card-bottom d-flex justify-content-between">
                                        <span>0.69 ETH</span>
                                        <span>1 of 1</span>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller mt-3" href="wallet-connect.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
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

export default Explore