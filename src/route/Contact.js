function Contact() {
    return(
       <div>
        <section class="breadcrumb-area overlay-dark d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h2 class="m-0">Contact</h2>
                            <ol class="breadcrumb d-flex justify-content-center">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active">Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="author-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-7">
                        <div class="intro text-center">
                            <span>Contact</span>
                            <h3 class="mt-3 mb-0">Get In Touch</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>
                        <form id="contact-form" class="item-form card no-hover" method="POST" action="https://theme-land.com/netstorm/assets/php/mail.php">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="name" placeholder="Name" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" placeholder="Message" cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn w-100 mt-3 mt-sm-4" type="submit"><i class="icon-paper-plane mr-2"></i>Send Message</button>
                                </div>
                            </div>
                        </form>
                        <p class="form-message"></p>
                    </div>
                </div>
            </div>
        </section>

       </div>
    );
} 

export default Contact