<template>
  <main>
			<!-- Title -->
			<div class="title_wrap">
				<div class="title">
					<div class="title-info">
						<div class="title-info_border">
							<div class="title-info_text">
								<h3>mid-season</h3>
								<h1>sale</h1>
								<div class="info-text_band">up to</div>
								<div class="info_text-bonus">
									50% off
								</div>
							</div>
						</div>
						<div class="title-info_button">
							<a href="#">Shop now</a>
						</div>
						<div class="title-info_pagination">
							<ul class="info_pagination_list">
								<li><a href="#"></a></li>
								<li><a class="pagin_hover" href="#"></a></li>
								<li><a href="#"></a></li>
								<li><a href="#"></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="content"></div>
			</div>
			<!-- for_Client -->
			<div id="forClient" class="client">
				<div class="client_kids client_hover">
					<h4>Kids</h4>
					<h5>in order min $200</h5>
				</div>
				<div class="client_womens client_hover">
					<h4>Womens</h4>
					<h5>money back guarantee</h5>
				</div>
				<div class="client_mans client_hover">
					<h4>Mans</h4>
					<h5>lifestyme support</h5>
				</div>
			</div>
			<!-- Collection -->
			<div class="collection_wrap">
				<div id="autom" class="name_categories">
					Autumn Collection
				</div>
				<div class="autumn">
					<div class="autumn_top">
						<ul>
							<li>
								<a href="#" class="autumn_img-1">
									<span class="bonus_20">20%</span>
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-2">
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-3">
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-4">
									<span class="bonus_30">30%</span>
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="automn_down">
						<ul>
							<li>
								<a href="#" class="autumn_img-5">
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-6">
									<span class="bonus_20">20%</span>
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-7">
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
							<li>
								<a href="#" class="autumn_img-8">
									<span class="bonus_40">40%</span>
									<span class="add_to_card">+ add to card</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="name_categories">
					Summer Collection
				</div>
				<div class="name_categories">
					Winter Collection
				</div>
			</div>
	</main>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

  	}
}
</script>

<style scoped>
	/*--------------------MAIN-----------------------*/
main {
	max-width: 1200px;
	margin: 0 auto;
}
/*--------------------title-----------------------*/
.title_wrap {
	background: url(../assets/img/main_banner-1.jpg) no-repeat center;
	background-size: cover;
}

.title {
	position: relative;
	height: 850px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.title-info {
	width: 65%;
}

.title-info_border {
	border: 4px solid #00C6C3;
	padding: 7px;
	margin: 35px 0;
}

.title-info_text {
	border: 1px solid #00C6C3;
	padding: 25px 15px;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content: space-around;
	background-color: rgba(0,0,0, .5);
}

.title-info_text h3, .info-text_band{
	color:#FFF;
	line-height: 1;
	padding: 2px 4px; 
	font-size: 26px;
	text-transform: uppercase;
}

.info-text_band {
	position: relative;
}

.info-text_band::after, .info-text_band::before {
	content:'';
	position: absolute;
	display: block;
	top:42%;
	height: 3px;
	width: 15px;
	background-color:#00C6C3;
}

.info-text_band::after {
	right: -20%;
}
.info-text_band::before {
	left:-20%;
}

h1 {
	color: #F3B134;
	font-size: 75px;
	padding: 5px 15px;
	text-transform: uppercase;
	font-weight: bold;
}

.info_text-bonus {
	color: #F3B134;
	padding: 10px 0 0 0;
	text-transform: uppercase;
	font-size: 28px; 
}

.title-info_button {
	display: flex;
	justify-content: center;
	margin-top: 45px;
}

.title-info_button a {
	display: block;
	text-decoration: none;
	text-transform: uppercase;
	padding: 15px 25px;
	background-color: #F09D66;
	color: #fff;
	font-size: 24px;
	font-weight: bold;
	text-shadow: 3px 3px 3px rgba(150, 150, 150, .8);
}

.title-info_button a:hover {
	background-color: #fff;
	color: #F09D66;
	text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
	transition: all .1s ease-in-out;
}

.title-info_pagination {
	position: absolute;
	bottom:35px;
	left: 50%;
	margin-left: -94px;
}

.info_pagination_list {
	display: flex;
}

.info_pagination_list li {
	padding: 9px;
}

.info_pagination_list li a {
	display: block;
	height: 0;
	width: 0;
	border:14px solid transparent;
	border-bottom:14px solid #007573;
}

.info_pagination_list li .pagin_hover {
	border-bottom:14px solid #00C6C3;
}

/*-------------------For_client--------------------------*/
.client {
	text-align: center;
	margin: 20px 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.client_womens, .client_kids, .client_mans {
	height: 85px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.client_hover:hover {
	background-color: #00A3A0;
}

.client_kids:hover::after {
	border-left: 40px solid #00A3A0;
}

.client_mans:hover::before {
	border-right: 40px solid #00A3A0;
}

.client_kids, .client_mans {
	width: 26%;
	background-color: #004C4B;
	position: relative;
}

.client_kids::after {
	content: '';
	position: absolute;
	right: -40px; top:0;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
	border-left: 40px solid #004C4B;
}

.client_womens {
	width: 36%;
	background-color: #004C4B;
	position: relative;
}

.client_womens::before {
	content:'';
	position: absolute;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
	border-left: 45px solid #F3FFFF;
	left: 0; top: 0;
}

.client_womens::after {
	content:'';
	position: absolute;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
	border-right: 45px solid #F3FFFF;
	right: 0; top: 0;
}

.client_mans::before {
	content: '';
	position: absolute;
	left: -40px; top:0;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
	border-right: 40px solid #004C4B;
}
.client h4 {
	color: #fff;
	font-size: 24px;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
	margin: 0;
	text-shadow: 2px 2px 2px rgba(0,0,0, .7);
}

.client h5 {
	margin: 0;
	color: #f2f2f2;
	text-transform: capitalize;
	text-shadow: 1px 1px 1px rgba(0,0,0, .9);
}
/* <!------------- Collection ----------------> */
.collection_wrap, .autumn {
	display: flex;
	align-items: center;
	flex-direction: column;
}

.name_categories {
	position: relative;
	margin: 10px 0;
	font-size: 28px;
	font-family: 'Kaushan Script', cursive;
}

.name_categories::after, .name_categories::before {
	content:"";
	position: absolute;
	height: 10px;
	width: 10px;
	transform: rotate(45deg);
	background-color: red;
	top: 50%;
	margin-top:-5px;
}

.name_categories::after {
	margin-left: -50px;
}

.name_categories::before {
	right: -50px;
}
/*---------- Automn ---------------- */
.autumn {
	margin: 20px 0;
}

.automn_down {
	margin-top: 20px;
}

.autumn_top ul,
 .automn_down ul {
	display: flex;
	justify-content: space-between;
}

.autumn_top ul li a,
 .automn_down ul li a {
	height: 300px;
	width: 200px;
	margin: 0 3px;
	border: 2px solid black;
	text-transform: uppercase;
	font-size: 14px;
	color: #fff;
	text-decoration: none;
	display: flex;
	justify-content: center;
	position: relative;
}

.autumn_top ul li a:hover, 
 .automn_down ul li a:hover {
	opacity: .8;
}

.autumn_top ul li a .add_to_card,
 .automn_down ul li a .add_to_card {
	align-self: flex-end;
	background-color: black;
	padding: 10px 5px;
	line-height: 1;
	position: relative;
}

.autumn_top ul li a .add_to_card::before,
 .automn_down ul li a .add_to_card::before {
	content:"";
	position: absolute;
	border: 17px solid transparent;
	border-right: 17px solid black;
	border-bottom: 17px solid black;
	left:-34px;top:0;
}

.autumn_top ul li a .add_to_card::after,
 .automn_down ul li a .add_to_card::after {
	content:"";
	position: absolute;
	border: 17px solid transparent;
	border-left: 17px solid black;
	border-bottom: 17px solid black;
	right:-34px;top:0;
}

.autumn_top ul li a .add_to_card:hover,
	.automn_down ul li a .add_to_card:hover {
	background-color: #FF9758
}

.autumn_top ul li a .add_to_card:hover::after,
	.automn_down ul li a .add_to_card:hover::after {
	border-left: 17px solid #FF9758;
	border-bottom: 17px solid #FF9758;
}

.autumn_top ul li a .add_to_card:hover::before,
 .automn_down ul li a .add_to_card:hover::before {
	border-right: 17px solid #FF9758;
	border-bottom: 17px solid #FF9758;
}

.bonus_20, .bonus_30, .bonus_40 {
	position: absolute;
	left:15px;top:15px;
	width: 44px;
	height: 44px;
	border-radius: 48%;
	padding: 5px;
	background: yellow;
	color: black;
	display: flex;
	font-size:18px;
	align-items: center;
	justify-content: center;
}

.autumn_img-1 {
	background: url(../assets/img/autumn_img-1.jpg) no-repeat;
	background-size: cover;
}.autumn_img-2 {
	background: url(../assets/img/autumn_img-2.jpg) no-repeat;
	background-size: cover;
}.autumn_img-3 {
	background: url(../assets/img/autumn_img-3.jpg) no-repeat;
	background-size: cover;
}.autumn_img-4 {
	background: url(../assets/img/autumn_img-4.jpg) no-repeat;
	background-size: cover;
}.autumn_img-5 {
	background: url(../assets/img/autumn_img-5.jpg) no-repeat;
	background-size: cover;
}.autumn_img-6 {
	background: url(../assets/img/autumn_img-6.jpg) no-repeat;
	background-size: cover;
}.autumn_img-7 {
	background: url(../assets/img/autumn_img-7.jpg) no-repeat;
	background-size: cover;
}.autumn_img-8 {
	background: url(../assets/img/autumn_img-8.jpg) no-repeat;
	background-size: cover;
}
</style>
