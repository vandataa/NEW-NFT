import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";



function Explore() {
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
                setWallID(wallet.address);

            }
        }
        catch (err) {
            console.log(err);
        }
        console.log(publicKey);
    })();

    axios({
        // Endpoint to send files
        url: `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`,
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
    return (
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

                    <div class="row items explore-items">

                        {isLoaded &&
                            dataFetched.result.map((item) => (
                                <div class="col-12 col-sm-6 col-lg-3 item explore-item" data-groups='["art","sports"]' key={item.mint}>
                                    <div class="card">
                                        <div class="image-over">
                                            <a href={`/get-details?token_address=${item.mint}&network=${network}`}>
                                                <img class="card-img-top" src={item.image_uri}  alt="" />
                                            </a>
                                        </div>
                                        <div class="card-caption col-12 p-0">
                                            <div class="card-body">
                                                <a href={`/get-details?token_address=${item.mint}&network=${network}`}>

                                                    <h5 class="mb-0">{item.name}</h5>

                                                </a>
                                                <div class="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/" class="a-owner">
                                                        <h6 class="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div class="card-bottom d-flex justify-content-between">
                                                    <span>1.5 ETH</span>
                                                    <span>1 of 1</span>
                                                </div>
                                                <a class="btn btn-bordered-white btn-smaller mt-3" href={`/mint?${item.mint}&${wallID}`}><i class="icon-handbag mr-2"></i>Place a Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Explore