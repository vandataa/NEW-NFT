import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Index from './route/Index';
import { useState } from "react";
import axios from "axios";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';



import './App.css';
import Create from "./route/Create";
import Author from "./route/Author";
import logo from './logo.png'
import Explore from "./route/Explore";
import IteamDetail from "./route/IteamDetail";
import Contact from "./route/Contact";
import Active from "./route/Active";
import MintNFT from "./route/mintNft";


function App() {

  const xKey = "0Y3eR8m-wYwyoZYS";
  const [wallID, setWallID] = useState("");
  const [network, setNetwork] = useState("devnet");
  const [isLoaded, setLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState();
  const [connStatus, setConnStatus] = useState(false);

  // Phantom Adaptor
  (async () => {
    let publicKey;
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
      }
    }
    catch (err) {
      console.log(err);


    }
    console.log(publicKey);
  })();


  return (
    <div class="main">
      <header id="header">
        <nav data-aos="zoom-out" data-aos-delay="800"
          class="navbar navbar-expand">
          <div class="container header">
            <a class="navbar-brand" href="/">
              <img class="navbar-brand-sticky" src={logo}
                alt="sticky brand-logo" />
            </a>
            <div class="ml-auhref"></div>
            <ul class="navbar-nav items mx-auhref">
              <li class="nav-item dropdown">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="/explore">Explore </a>
                {/* <i
                    class="fas fa-angle-down ml-1"></i> */}
              </li>
              <li class="nav-item">
                <a href="/activity" class="nav-link">Activity</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="/">Community <i
                  class="fas fa-angle-down ml-1"></i></a>

              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="/">Pages <i
                  class="fas fa-angle-down ml-1"></i></a>
                <ul class="dropdown-menu">
                  <li class="nav-item"><a href="authors.html"
                    class="nav-link">Authors</a></li>
                  <li class="nav-item"><Link to="author.html"
                    class="nav-link">Author</Link></li>
                  <li class="nav-item"><Link to="wallet-connect.html"
                    class="nav-link">Wallet Connect</Link></li>
                  <li class="nav-item"><Link to="create.html"
                    class="nav-link">Create</Link></li>
                  <li class="nav-item"><Link to="login.html"
                    class="nav-link">Login</Link></li>
                  <li class="nav-item"><Link to="signup.html"
                    class="nav-link">Signup</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/Contact" class="nav-link">Contact</Link>
              </li>
            </ul>
            <ul class="navbar-nav icons">
              <li class="nav-item">
                <Link to="/" class="nav-link" data-toggle="modal"
                  data-target="#search">
                  <i class="fas fa-search"></i>
                </Link>
              </li>
            </ul>

            <ul class="navbar-nav toggle">
              <li class="nav-item">
                <Link to="/" class="nav-link" data-toggle="modal"
                  data-target="#menu">
                  <i class="fas fa-bars toggle-icon m-0"></i>
                </Link>
              </li>
            </ul>

            <ul class="navbar-nav action">
              <li class="nav-item ml-3">
                {!connStatus && (
                  <button class="btn ml-lg-auto btn-bordered-white" className="btn btn-primary px-3"><i
                    class="icon-wallet mr-md-2"></i>Wallet Connect</button>
                )}
                {connStatus && (
                  <button class="btn ml-lg-auto btn-bordered-white wallet"><i
                    class="icon-wallet mr-md-2"></i>{wallID}</button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/get-details" element={<IteamDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/activity" element={<Active />} />
        <Route path="/mint" element={<MintNFT />} />




      </Routes>

      <footer class="footer-area">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-3 res-margin">
                <div class="footer-items">
                  <Link class="navbar-brand" to="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis non, fugit totam vel laboriosam vitae.</p>
                  <div class="social-icons d-flex">
                    <Link class="facebook" to="/">
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link class="twitter" to="/">
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-twitter"></i>
                    </Link>
                    <Link class="google-plus" to="/">
                      <i class="fab fa-google-plus-g"></i>
                      <i class="fab fa-google-plus-g"></i>
                    </Link>
                    <Link class="vine" to="/">
                      <i class="fab fa-vine"></i>
                      <i class="fab fa-vine"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 res-margin">
                <div class="footer-items">
                  <h4 class="footer-title">Useful Links</h4>
                  <ul>
                    <li><Link to="/">All NFTs</Link></li>
                    <li><Link to="/">How It Works</Link></li>
                    <li><Link to="/">Create</Link></li>
                    <li><Link to="/">Explore</Link></li>
                    <li><Link to="/">Privacy &amp; Terms</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3 res-margin">
                <div class="footer-items">
                  <h4 class="footer-title">Community</h4>
                  <ul>
                    <li><Link to="/">Help Center</Link></li>
                    <li><Link to="/">Partners</Link></li>
                    <li><Link to="/">Suggestions</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Newsletter</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="footer-items">
                  <h4 class="footer-title">Subscribe Us</h4>
                  <div class="subscribe-form d-flex align-items-center">
                    <input type="email" class="form-control"
                      placeholder="info@yourmail.com" />
                    <button type="submit" class="btn"><i
                      class="icon-paper-plane"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  <div class="copyright-left">&copy;2021 NetStorm, All Rights
                    Reserved.</div>
                  <div class="copyright-right">Made with <i
                    class="fas fa-heart"></i> By <Link
                      to="/">Themeland</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="search" class="modal fade p-0">
        <div class="modal-dialog dialog-animated">
          <div class="modal-content h-100">
            <div class="modal-header" data-dismiss="modal">
              Search <i class="far fa-times-circle icon-close"></i>
            </div>
            <div class="modal-body">
              <form class="row">
                <div class="col-12 align-self-center">
                  <div class="row">
                    <div class="col-12 pb-3">
                      <h2 class="search-title mt-0 mb-3">What are you looking
                        for?</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 input-group mt-4">
                      <input type="text" placeholder="Enter your keywords" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 input-group align-self-center">
                      <button
                        class="btn btn-bordered-white mt-3">Search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="menu" class="modal fade p-0">
        <div class="modal-dialog dialog-animated">
          <div class="modal-content h-100">
            <div class="modal-header" data-dismiss="modal">
              Menu <i class="far fa-times-circle icon-close"></i>
            </div>
            <div class="menu modal-body">
              <div class="row w-100">
                <div class="items p-0 col-12 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="scroll-to-top" class="scroll-to-top">
        <Link to="#header" class="smooth-anchor">
          <i class="fas fa-arrow-up"></i>
        </Link>
      </div>
    </div>

  );
}

export default App;