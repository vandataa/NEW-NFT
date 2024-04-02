import axios from "axios";
import { useState } from "react";
import { signAndConfirmTransactionFe } from '../utilityfunc';
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, clusterApiUrl } from "@solana/web3.js";


function Create() {


    let publickey;
    // auto connect 
    (async () => {
        await window.phantom.solana.connect();
        publickey = window.phantom.solana.publicKey.toBase58();
        console.log(publickey);
    })();


    const [file, setfile] = useState();
    const [network, setnetwork] = useState("devnet");
    const [publicKey, setPublicKey] = useState(publickey); //your wallet's public key
    const [name, setName] = useState();
    const [symbol, setSymbol] = useState();
    const [desc, setDesc] = useState();
    const [attr, setAttr] = useState();
    const [extUrl, setExtUrl] = useState();
    const [maxSup, setMaxSup] = useState(0);
    const [roy, setRoy] = useState(1);
    const [minted, setMinted] = useState();
    const [saveMinted, setSaveMinted] = useState();
    const [errorRoy, setErrorRoy] = useState();
    const [status, setStatus] = useState("Awaiting Upload");
    const [dispResponse, setDispResp] = useState("");

    let attrib = [{ "trait_type": "speed", "value": 100 },
    { "trait_type": "aggression", "value": "crazy" },
    { "trait_type": "energy", "value": "very high" }];



    //Here we have created 3 attributes for our NFT, namely:
    //1. speed = 100
    //2. aggression = "crazy"
    //3. energy = "very high"
    const callback = (signature, result) => {
        console.log("Signature ", signature);
        console.log("result ", result);
        if (signature.err === null) {
            setMinted(saveMinted);
            setStatus("success: Successfully Signed and Minted.");
        }
    }
    const mintNow = (e) => {
        e.preventDefault();
        setStatus("Loading");
        let formData = new FormData();
        formData.append("network", network);
        formData.append("wallet", publickey);
        formData.append("name", name);
        formData.append("symbol", symbol);
        formData.append("description", desc);
        formData.append("attributes", JSON.stringify(attrib));
        formData.append("external_url", extUrl);
        formData.append("max_supply", maxSup);
        formData.append("royalty", roy);
        formData.append("file", file);

        axios({
            // Endpoint to send files
            url: "https://api.shyft.to/sol/v1/nft/create_detach",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "x-api-key": "0Y3eR8m-wYwyoZYS",
                Accept: "*/*",
                "Access-Control-Allow-Origin": "*",
            },

            // Attaching the form data
            data: formData,
        })
            // Handle the response from backend here
            .then(async (res) => {
                console.log(res);
                if (res.data.success === true) {
                    setStatus("success: Transaction Created. Signing Transactions. Please Wait.");
                    const transaction = res.data.result.encoded_transaction; //encoded transaction
                    setSaveMinted(res.data.result.mint);
                    const ret_result = await signAndConfirmTransactionFe(network, transaction, callback); //signing the encoded transaction
                    console.log(ret_result);
                    setDispResp(res.data);

                }
            })

            // Catch errors if any
            .catch((err) => {
                console.warn(err);
                setStatus("success: false");
            });

    }
    return (

        <div class="row mt-5">
            <section class="author-area">
                <div class="container">
                    <div class="row justify-content-between">
                        
                        <div class="">
                            <div class="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div class="intro-content">
                                    <span>Get Started</span>
                                    <h3 class="mt-3 mb-0">Create Item</h3>
                                </div>
                            </div>
                            <form class="item-form card no-hover">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group form-group">
                                            <div class="custom-file">
                                                <input
                                                    class="custom-file-input"
                                                    type="file" onChange={(e) => {
                                                        setfile(e.target.files[0]);
                                                    }}
                                                    id="inputGroupFile01" />
                                                <label class="custom-file-label"
                                                    for="inputGroupFile01">Choose
                                                    file</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group mt-3">
                                            <select name="network" onChange={(e) => { setnetwork(e.target.value) }}>
                                                <option value="devnet">Devnet</option>
                                                <option value="testnet">Testnet</option>
                                                <option value="mainnet-beta">Mainnet Beta</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group mt-3">
                                            <input type="text" id="item_name"
                                                class="form-control" placeholder="Item name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control"
                                                id="description" name="desc" placeholder="Descrption" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" id="item_price"
                                                class="form-control"
                                                name="price"
                                                placeholder="Item Price"
                                                required="required" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text"
                                                class="form-control"
                                                name="royalty"
                                                value={roy} onChange={(e) => { setRoy(e.target.value) }}
                                                placeholder="Royalty"
                                                required="required" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text"
                                                class="form-control"
                                                name="max_supply" value={maxSup} onChange={(e) => { setMaxSup(e.target.value) }}
                                                placeholder="Size"
                                                required="required" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text"
                                                class="form-control"
                                                name="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)}
                                                placeholder="Symbol"
                                                required="required" />
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <button class="btn w-100 mt-3 mt-sm-4"
                                            type="submit" onClick={mintNow}>Create Item</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );


}

export default Create