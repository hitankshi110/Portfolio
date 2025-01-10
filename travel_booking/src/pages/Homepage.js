import React from "react";
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap-datepicker.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap/bootstrap-grid.css';
import '../assets/css/bootstrap/bootstrap-reboot.css';
// import '../assets/js/main.js';
// import '../assets/js/bootstrap-datepicker.js';
// import '../assets/js/bootstrap.min.js';
// import '../assets/css/owl.carousel.min.css';
// import '../assets/css/owl.theme.default.min.css';
// import '../assets/css/flaticon.css';

const Homepage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div className="container">
			<a className="navbar-brand" href="index.html">Oceans<span>Travel Agency</span></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="oi oi-menu"></span> Menu
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
					<li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
					<li class="nav-item"><a href="destination.html" class="nav-link">Destination</a></li>
					<li class="nav-item"><a href="hotel.html" class="nav-link">Hotel</a></li>
					<li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
					<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>

    <div className="hero-wrap js-fullheight">
		<div className="overlay"></div>
		<div className="container">
		<div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
				<div className="col-md-7 ftco-animate">
					<span className="subheading" style={{fontSize:'30px', color: '#f15d30', fontfamily: 'Arizonia, cursive'}}>Welcome to Oceans</span>
					<h1 className="mb-4" style={{fontSize:'51px', color:'#fff',lineHeight:'1.2',fontWeight:'700'}}>Discover Your Favorite Place with Us</h1>
					<p className="caps" style={{fontSize:'20px', lineHeight:'1.5',fontWeight:'300',color:'rgba(255, 255, 255, 0.9)'}}>Travel to the any corner of the world, without going around in circles</p>
				</div>
				{/* <a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
					<span class="fa fa-play"></span>
				</a> */}
			</div>
		</div>
	</div>

	<section className="ftco-section ftco-no-pb ftco-no-pt">
		<div className="container">
		<div className="row">
				<div className="col-md-12">
					<div className="ftco-search d-flex justify-content-center">
						<div class="row">
							<div class="col-md-12 nav-link-wrap">
								<div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
									<a class="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

									<a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a>

								</div>
							</div>
							<div class="col-md-12 tab-wrap">	
								<div class="tab-content" id="v-pills-tabContent">
									<div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
										<form action="#" class="search-property-1">
											<div class="row no-gutters">
												<div class="col-md d-flex">
													<div class="form-group p-4 border-0">
														<label for="#">Destination</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-search"></span></div>
															<input type="text" class="form-control" placeholder="Search place" />
														</div>
													</div>
												</div>
												<div class="col-md d-flex">
													<div class="form-group p-4">
														<label for="#">Check-in date</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-calendar"></span></div>
															<input type="text" class="form-control checkin_date" placeholder="Check In Date" />
														</div>
													</div>
												</div>
												<div class="col-md d-flex">
													<div class="form-group p-4">
														<label for="#">Check-out date</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-calendar"></span></div>
															<input type="text" class="form-control checkout_date" placeholder="Check Out Date" />
														</div>
													</div>
												</div>
												<div class="col-md d-flex">
													<div class="form-group p-4">
														<label for="#">Price Limit</label>
														<div class="form-field">
															<div class="select-wrap">
																<div class="icon"><span class="fa fa-chevron-down"></span></div>
																<select name="" id="" class="form-control">
																	<option value="">$100</option>
																	<option value="">$10,000</option>
																	<option value="">$50,000</option>
																	<option value="">$100,000</option>
																	<option value="">$200,000</option>
																	<option value="">$300,000</option>
																	<option value="">$400,000</option>
																	<option value="">$500,000</option>
																	<option value="">$600,000</option>
																	<option value="">$700,000</option>
																	<option value="">$800,000</option>
																	<option value="">$900,000</option>
																	<option value="">$1,000,000</option>
																	<option value="">$2,000,000</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<div class="col-md d-flex">
													<div class="form-group d-flex w-100 border-0">
														<div class="form-field w-100 align-items-center d-flex">
															<input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary" />
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>

									<div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
										<form action="#" class="search-property-1">
											<div class="row no-gutters">
												<div class="col-lg d-flex">
													<div class="form-group p-4 border-0">
														<label for="#">Destination</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-search"></span></div>
															<input type="text" class="form-control" placeholder="Search place" />
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group p-4">
														<label for="#">Check-in date</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-calendar"></span></div>
															<input type="text" class="form-control checkin_date" placeholder="Check In Date" />
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group p-4">
														<label for="#">Check-out date</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-calendar"></span></div>
															<input type="text" class="form-control checkout_date" placeholder="Check Out Date" />
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group p-4">
														<label for="#">Price Limit</label>
														<div class="form-field">
															<div class="select-wrap">
																<div class="icon"><span class="fa fa-chevron-down"></span></div>
																<select name="" id="" class="form-control">
																	<option value="">$100</option>
																	<option value="">$10,000</option>
																	<option value="">$50,000</option>
																	<option value="">$100,000</option>
																	<option value="">$200,000</option>
																	<option value="">$300,000</option>
																	<option value="">$400,000</option>
																	<option value="">$500,000</option>
																	<option value="">$600,000</option>
																	<option value="">$700,000</option>
																	<option value="">$800,000</option>
																	<option value="">$900,000</option>
																	<option value="">$1,000,000</option>
																	<option value="">$2,000,000</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group d-flex w-100 border-0">
														<div class="form-field w-100 align-items-center d-flex">
															<input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary p-0" />
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
	
	<section class="ftco-section services-section" style={{padding:'5em 0',position:'relative', width:'100%'}}>
			<div className="container">
				<div className="row d-flex">
					<div className="col-md-6 order-md-last heading-section pl-md-5 ftco animate d-flex align-items-center">
						<div className="w-100">
							<span className="subheading">Welcome to Oceans</span>
							<h2 className="mb-4">It's time to start your adventure </h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
							<p><a href="#" className="btn btn-primary py-3 px-4">Search Destination</a></p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row"> 
						<div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
		<div className="services services-1 color-1 d-block img" style={{backgroundImage:'url(../assets/img/services-1.jpg)'}}>
						<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-paragliding"></span></div>
								<div className="media-body">
									<h3 className="heading mb-3">Activities</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus varius nunc, non convallis mauris mattis vel.</p>
								</div>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
						<div className="services services-1 color-2 d-block img" style={{backgroundImage:'url(assets/img/services-2.jpg)'}}>
						<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
						<div className="media-body">
							<h3 className="heading mb-3">Travel Arrangements</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus varius nunc, non convallis mauris mattis vel.</p>
						</div>
						</div> 
					</div>
					<div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
					<div className="services services-1 color-2 d-block img" style={{backgroundImage:'url(assets/img/services-3.jpg)',border:'1px solid black'}}>
						<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
						<div className="media-body">
							<h3 className="heading mb-3">Private Guide</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus varius nunc, non convallis mauris mattis vel.</p>
						</div>
					</div>
						</div>
						<div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate" >
							<div className="services services-1 color-2 d-block img" style={{backgroundImage:'url(assets/img/services-4.jpg)'}} >
							<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
							<div className="media-body">
								<h3 className="heading mb-3">Location Manager</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus varius nunc, non convallis mauris mattis vel.</p>
								
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	</section>
	<section className="ftco-section img ftco-select-destination" style={{backgroundImage:'url(assets/img/bg_3.jpg);'}}>
	<div className="container">
		<div className="row justify-content-center ftco-animate">
			<div className="col-md-12 heading-section text-center ftco-animate">
			<span className="subheading">Oceans Provide Places</span>
			<h2 className="mb-4">Select Your Destination</h2>
			</div>
		</div>
	</div>
	<div className="container container-2">
		<div className="row">
			<div className="col-md-12">
				<div className="carousel-destination owl-carousel ftco-animate">
					<div className="item">
						<div className="project-destination">
							<a href="#" className="img" style={{backgroundImage:'url(assets/img/place-1.jpg);',border:'1px solid black'}}>
							<div className="text">
								<h3>Philippines</h3>
								<span>8 Tours</span>
							</div>
							</a>
						</div>
					</div>
					<div className="item">
						<div className="project-destination">
							<a href="#" className="img" style={{backgroundImage:'url(assets/img/place-2.jpg);',border:'1px solid black'}}>
							<div className="text">
								<h3>Thailand</h3>
								<span>5 Tours</span>
							</div>
							</a>
						</div>
					</div>
					<div className="item">
						<div className="project-destination">
							<a href="#" className="img" style={{backgroundImage:'url(assets/img/place-3.jpg);',border:'1px solid black'}}>
							<div className="text">
								<h3>Greece</h3>
								<span>7 Tours</span>
							</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</section>
	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center pb-4">
				<div className="col-md-12 heading-section text-center ftco-animate">
					<span className="subheading">Destination</span>
					<h2 className="mb-4">Tour Destination</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 ftco-animate">
					<div className="project-wrap">
						<a href="#" className="img" style={{backgroundImage:'url(assets/img/detination-1.jpg);'}}>
						<span className="price">$550/person</span>
						</a>
						<div className="text p-4">
							<span className="days">8 Days Tour</span>
							<h3><a href="#">Banaue Rice Terraces </a></h3>
							<p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao,Philippines</p>
							<ul>
								<li><span className="flaticon-shower"></span>2</li>
								<li><span className="flaticon-king-size"></span>3</li>
								<li><span className="flaticon-mountains"></span>Near Mountain</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-4 ftco-animate">
					<div className="project-wrap">
						<a href="#" className="img" style={{backgroundImage:'url(assets/img/destination-2.jpg)'}}>
						<span className="price">$550/person</span>
						</a>
						<div className="text p-4">
							<span className="days">10 Days Tour</span>
							<h3><a href="#">Banaue Rice Terraces</a></h3>
							<p className="location"><span className="fa fa-map-marker"></span>Banaue, Ifugao,Philippines</p>
							<ul>
								<li><span className="flaticon-shower"></span>2</li>
								<li><span className="flaticon-king-size"></span>3</li>
								<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-4 ftco-animate">
					<div className="project-wrap">
						<a href="#" className="img" style={{backgroundImage:'url(assets/img/destination-3.jpg)'}}>
						<span className="price">$550/person</span>
						</a>
						<div className="text p-4">
							<span className="days">7 Days Tour</span>
							<h3><a href="#">Banaue Rice Terraces</a></h3>
							<p className="location"><span className="fa fa-map-marker"></span>Banaue, Ifugao,Philippines</p>
							<ul>
								<li><span className="flaticon-shower"></span>2</li>
								<li><span className="flaticon-king-size"></span>3</li>
								<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
		<footer class="ftco-footer bg-bottom ftco-no-pt" style={{backgroundImage: 'url(images/bg_3.jpg);'}}>
			<div class="container">
				<div class="row mb-5">
					<div class="col-md pt-5">
						<div class="ftco-footer-widget pt-md-5 mb-4">
							<h2 class="ftco-heading-2">About</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							<ul class="ftco-footer-social list-unstyled float-md-left float-lft">
								<li class="ftco-animate"><a href="#"><span class="fa fa-twitter"></span></a></li>
								<li class="ftco-animate"><a href="#"><span class="fa fa-facebook"></span></a></li>
								<li class="ftco-animate"><a href="#"><span class="fa fa-instagram"></span></a></li>
							</ul>
						</div>
					</div>
					<div class="col-md pt-5 border-left">
						<div class="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
							<h2 class="ftco-heading-2">Infromation</h2>
							<ul class="list-unstyled">
								<li><a href="#" class="py-2 d-block">Online Enquiry</a></li>
								<li><a href="#" class="py-2 d-block">General Enquiries</a></li>
								<li><a href="#" class="py-2 d-block">Booking Conditions</a></li>
								<li><a href="#" class="py-2 d-block">Privacy and Policy</a></li>
								<li><a href="#" class="py-2 d-block">Refund Policy</a></li>
								<li><a href="#" class="py-2 d-block">Call Us</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md pt-5 border-left">
						<div class="ftco-footer-widget pt-md-5 mb-4">
							<h2 class="ftco-heading-2">Experience</h2>
							<ul class="list-unstyled">
								<li><a href="#" class="py-2 d-block">Adventure</a></li>
								<li><a href="#" class="py-2 d-block">Hotel and Restaurant</a></li>
								<li><a href="#" class="py-2 d-block">Beach</a></li>
								<li><a href="#" class="py-2 d-block">Nature</a></li>
								<li><a href="#" class="py-2 d-block">Camping</a></li>
								<li><a href="#" class="py-2 d-block">Party</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md pt-5 border-left">
						<div class="ftco-footer-widget pt-md-5 mb-4">
							<h2 class="ftco-heading-2">Have a Questions?</h2>
							<div class="block-23 mb-3">
								<ul>
									<li><span class="icon fa fa-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
									<li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
									<li><a href="#"><span class="icon fa fa-paper-plane"></span><span class="text">info@yourdomain.com</span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					{/* <div class="col-md-12 text-center">

						<p>Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. 
							Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							 Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p>
						</div> */}
					</div>
				</div>
			</footer>
        </div>
		
    )
};

export default Homepage;
