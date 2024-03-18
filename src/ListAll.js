import { useState } from "react";
import axios from "axios";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';


const ListAll = () => {
    const xKey = "0Y3eR8m-wYwyoZYS";
    const [wallID, setWallID] = useState("");
    const [network, setNetwork] = useState("devnet");
    const [isLoaded, setLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState();
    const [connStatus, setConnStatus] = useState(false);
    const fetchNFTs = (e) => {
        e.preventDefault();

        //Note, we are not mentioning update_authority here for now
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
    };
    // Phantom Adaptor
    const solanaConnect = async () => {
        console.log('clicked solana connect');
        const { solana } = window;
        if (!solana) {
            alert("Please Install Solana");
        }

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
            }
        }
        catch (err) {
            console.log(err);
        }

    }

    return (

        <div class="container-lg" className="container-lg">
            {!connStatus && (
                <button class="btn ml-lg-auto btn-bordered-white" className="btn btn-primary px-3" onClick={solanaConnect}><i
                    class="icon-wallet mr-md-2"></i>Wallet Connect</button>
            )}
            {connStatus && (
                <button class="btn ml-lg-auto btn-bordered-white wallet"><i
                    class="icon-wallet mr-md-2"></i>{wallID}</button>
            )}
        </div>



    );
};

export default ListAll;