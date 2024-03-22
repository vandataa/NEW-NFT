import { useState } from "react";
import axios from "axios";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
///we use the devnet for this project, else the view function will not work
const ListAll = () => {
    let publicKey;
    // auto connect 

    const xKey = "0Y3eR8m-wYwyoZYS";//enter your x api key here
    const [wallID, setWallID] = useState("");
    const [network, setNetwork] = useState("devnet");

    const [isLoaded, setLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState();

    const [connStatus, setConnStatus] = useState(false);

    (async () => {
        await window.phantom.solana.connect();
        publicKey = window.phantom.solana.publicKey.toBase58();
        try {
            //const network = "devnet";
            const phantom = new PhantomWalletAdapter();
            await phantom.connect();
            const rpcUrl = clusterApiUrl(network);
            const connection = new Connection(rpcUrl, "confirmed");
            const wallet = {
                address: phantom.publicKey.toString(),
            };

            if (wallet.address) {
                console.log(wallet.address);
                setWallID(wallet.address);
                const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address), "confirmed");
                console.log(accountInfo);
                setConnStatus(true);
                let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`;
                axios({
                    // Endpoint to send files
                    url: nftUrl,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": xKey,
                    },
                    // Attaching the form data
                })
                    // Handle the response from backend here
                    .then((res) => {
                        console.log(res.data);
                        setDataFetched(res.data);
                        setLoaded(true);
                    })

                    // Catch errors if any
                    .catch((err) => {
                        console.warn(err);
                    });
            }
        }
        catch (err) {
            console.log(err);


        }
        console.log(publicKey);
    })();

    const { solana } = window;
    if (!solana) {
        alert("Please Install Solana");
    }


    return (
        <div>
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-7">
                            <span>NetStorm</span>
                            <h1 class="mt-4">Discover, collect, and sell extraordinary NFTs</h1>
                            <p>Explore on the world's best & largest NFT marketplace</p>
                            <div class="button-group">
                                <a class="btn btn-bordered-white" href="explore-1.html"><i class="icon-rocket mr-2"></i>Explore</a>
                                <a class="btn btn-bordered-white" href="create.html"><i class="icon-note mr-2"></i>Create</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1">
                        <defs>
                            <linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                                <stop stop-color="rgba(69,40,220, 0.15)" offset="0%" />
                                <stop stop-color="rgba(87,4,138, 0.15)" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="" fill="url(#linearGradient-1)">
                                <animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" repeatCount="" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze" />
                            </polygon>
                        </g>
                    </svg>
                </div>
            </section>

            <section class="live-auctions-area">
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
                                                <img class="card-img-top" src="assets/img/content/auction_1.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_1.jpg" alt="" />
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
                                                <img class="card-img-top" src="assets/img/content/auction_2.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_2.jpg" alt="" />
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
                                                <img class="card-img-top" src="assets/img/content/auction_3.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_3.jpg" alt="" />
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
                                                <img class="card-img-top" src="assets/img/content/auction_4.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_4.jpg" alt="" />
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
                                                <img class="card-img-top" src="assets/img/content/auction_5.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_5.jpg" alt="" />
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
                                                <img class="card-img-top" src="assets/img/content/auction_6.jpg" alt="" />
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
                                                <a class="seller d-flex align-items-center my-3" href="item-details.html">
                                                    <img class="avatar-sm rounded-circle" src="assets/img/content/avatar_6.jpg" alt="" />
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
                                    <a class="btn content-btn" href="explore-3.html">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        {isLoaded &&
                            dataFetched.result.map((item) => (
                                <div class="col-12 col-sm-6 col-lg-3 item" key={item.mint}>
                                    <div class="card">
                                        <div class="image-over">
                                            <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
                                                <img class="card-img-top" src={item.image_uri} alt="img" />
                                            </a>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
                                                    <h5 class="mb-0">{item.name}</h5>
                                                </a>
                                                <div class="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/">
                                                        <h6 class="ml-2 mb-0">Richard</h6>
                                                    </a>
                                                </div>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.5 ETH</span>
                                                    <span>1 of 1</span>
                                                </div>
                                                <a class="btn btn-bordered-white btn-smaller mt-3" href="login.html"><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_1.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@Richard</a>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_2.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@JohnDeo</a>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_3.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@Junaid</a>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_4.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@Yasmin</a>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_5.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@ArhamH</a>
                                        <span>1.5 BNB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 item">
                            <div class="card no-hover">
                                <div class="single-seller d-flex align-items-center">
                                    <a href="author.html">
                                        <img class="avatar-md rounded-circle" src="assets/img/content/avatar_6.jpg" alt="" />
                                    </a>
                                    <div class="seller-info ml-3">
                                        <a class="seller mb-2" href="author.html">@Richard</a>
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
                            <div class="intro d-flex justify-content-between align-items-end m-0">
                                <div class="intro-content">
                                    <span>Most Popular</span>
                                    <h3 class="mt-3 mb-0">Popular Collections</h3>
                                </div>
                                <div class="intro-btn">
                                    <a class="btn content-btn text-left" href="explore-2.html">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row items">
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_1.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_1.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Virtual Worlds</h5>
                                        </a>
                                        <span>ERC-729</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_2.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_2.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Digital Arts</h5>
                                        </a>
                                        <span>ERC-522</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_3.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_3.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Sports</h5>
                                        </a>
                                        <span>ERC-495</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_4.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_4.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Photography</h5>
                                        </a>
                                        <span>ERC-873</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_5.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_5.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Trading Cards</h5>
                                        </a>
                                        <span>ERC-397</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_6.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_6.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Walking On Air</h5>
                                        </a>
                                        <span>ERC-403</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_7.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_7.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Domain Names</h5>
                                        </a>
                                        <span>ERC-687</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="card no-hover text-center">
                                <div class="image-over">
                                    <a href="item-details.html">
                                        <img class="card-img-top" src="assets/img/content/author_8.jpg" alt="" />
                                    </a>
                                    <a class="seller" href="item-details.html">
                                        <div class="seller-thumb avatar-lg">
                                            <img class="rounded-circle" src="assets/img/content/avatar_8.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body mt-4">
                                        <a href="item-details.html">
                                            <h5 class="mb-2">Collectibles</h5>
                                        </a>
                                        <span>ERC-972</span>
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
                                <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-grid text-effect"></i>
                                <h4>Create your collection</h4>
                                <p>Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-drawer text-effect"></i>
                                <h4>Add your NFTs</h4>
                                <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 item">
                            <div class="single-work">
                                <i class="icons icon-bag text-effect"></i>
                                <h4>List them for sale</h4>
                                <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default ListAll;