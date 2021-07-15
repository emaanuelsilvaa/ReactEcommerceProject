import './App.css';

function App() {
  return (
    <div className="">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
         <a class="navbar-brand p-5 " href="#">Our Shop</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse  justify-content-end px-5" id="navbarNavAltMarkup">
            <div class="navbar-nav navBarStyles ">
               <a class="nav-item nav-link active px-4" href="#">HOME <span class="sr-only"></span></a>
               <a class="nav-item nav-link px-4 " href="#">ABOUT</a>
               <a class="nav-item nav-link px-4" href="#">SHOP</a>
               <a class="nav-item nav-link active px-4 " href="#">SING IN<span class="sr-only"></span></a>
               <a class="nav-item nav-link active px-4" href="#">SING UP <span class="sr-only"></span></a>
            </div>
         </div>
      </nav>
      <div className="container">
         <div className="jumbotron">
            <h1 className="mainText">Wellcome to </h1>
            <strong class="color mainText">Our Shop</strong>
            <p className="text-white">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2"></hr>
            <p className="text-white">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
               <a class="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
               <a class="btn btn-lg btn-primary" href="about.html" role="button">About </a>            
            </p>
         </div>
      </div>

      <div id="plant" class="section  product">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage">
                     <h2><strong class="black"> Our</strong>  Products</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="clothes_main section ">
         <div class="container">
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div class="sport_product">
                     <figure><img src="" alt="img"/></figure>
                     <h3> <strong class="price_text">50</strong></h3>
                     <h4>basket ball</h4>
                  </div>
               </div>

               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div class="sport_product">
                     <figure><img src="" alt="img"/></figure>
                     <h3><strong class="price_text">50</strong></h3>
                     <h4> T-Shirt</h4>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div class="sport_product">
                     <figure><img src="" alt="img"/></figure>
                     <h3><strong class="price_text">50</strong></h3>
                     <h4>Game</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="section about ">
         <div class="container">
             <div class="row">
                <div class="col-12">
                    <div class="titlepage">
                     <h2><strong class="black"> About</strong>  Us</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
                </div>
             </div>
         </div>
      </div>
      <div id="plant" class="contact_us layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage">
                    <h2><strong class="black"> Contact</strong>  Us</h2>
                     <span >available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="contact_us_2 layout_padding paddind_bottom_0">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="soc_text">soC</div>
               </div>
               <div class="col-md-6">
                  <div class="email_btn">
                     <form action="/action_page.php">
                        <div class="form-group">
                           <input type="text" class="form-control form-control-sm" placeholder="Name" name="Name"/>
                        </div>
                        <div class="form-group">
                           <input  type="text" class="form-control form-control-sm" placeholder="Email" name="Email"/>
                        </div>
                        <div class="form-group">
                           <input  type="text" class="form-control form-control-sm" placeholder="Phone" name="Phone"/>
                        </div>
                        <div class="form-group">
                           <input  type="text" class="form-control form-control-sm" placeholder="Massage" name="text3"/>
                        </div>
                         <div class="submit_btn">
                            <button type="submit" class="btn btn-primary" >Send</button>
                         </div>
                      </form>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="contact_us_3 layout_padding">
            <div class="row">
               <div class="col-md-4">
                  <h1>Newsletter</h1>
                  <p class="long_text">It is a long established fact that a reader will be distracted  a</p>
               </div>
               <div class="col-md-8">
                  <div class="email_text">
                     <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your email"/>
                     <div class="input-group-append">
                        <button  class="btn btn-primary" type="Subscribe">Subscribe</button>  
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            </div>
         </div>
      </div>

      <div id="plant" class="footer layout_padding">
         <div class="container">
            <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
         </div>
      </div>
   </div>
  );
}

export default App;
