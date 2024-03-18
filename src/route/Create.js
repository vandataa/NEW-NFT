


function create() {
    return(
        <div>
            <section class="breadcrumb-area overlay-dark d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h2 class="m-0">Create</h2>
                            <ol class="breadcrumb d-flex justify-content-center">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href="/">Pages</a></li>
                                <li class="breadcrumb-item active">Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="author-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="card no-hover text-center">
                            <div class="image-over">
                                <img class="card-img-top" src="assets/img/content/auction_2.jpg" alt=""/>
                                <div class="author">
                                    <div class="author-thumb avatar-lg">
                                        <img class="rounded-circle" src="assets/img/content/avatar_8.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body mt-4">
                                    <h5 class="mb-3">Artnox</h5>
                                    <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="ZqpthncaYTsd0579hasfu00st"/>
                                        <div class="input-group-append">
                                          <button><i class="icon-docs"></i></button>
                                        </div>
                                    </div>
                                    <div class="social-icons d-flex justify-content-center my-3">
                                        <a class="facebook" href="/">
                                            <i class="fab fa-facebook-f"></i>
                                            
                                        </a>
                                        <a class="twitter" href="/">
                                            <i class="fab fa-twitter"></i>
                                        
                                        </a>
                                        <a class="google-plus" href="/">
                                            <i class="fab fa-google-plus-g"></i>
                                           
                                        </a>
                                        <a class="vine" href="/">
                                            <i class="fab fa-vine"></i>
                                            
                                        </a>
                                    </div>
                                    <a class="btn btn-bordered-white btn-smaller" href="/">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
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
                                          <input type="file" class="custom-file-input" id="inputGroupFile01"/>
                                          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="name" placeholder="Item Name" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="textarea" placeholder="Description" cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="price" placeholder="Item Price" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="royality" placeholder="Royality" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Size" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="copies" placeholder="No of Copies" required="required"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                            <label class="form-check-label" for="inlineRadio1">Put on Sale</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                            <label class="form-check-label" for="inlineRadio2">Instant Sale Price</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                            <label class="form-check-label" for="inlineRadio3">Unlock Purchased</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn w-100 mt-3 mt-sm-4" type="submit">Create Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default create