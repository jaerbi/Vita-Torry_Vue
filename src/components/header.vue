<template>
	<header>
		<div class="header_wrap">
			<div class="header-navigation">
				<nav class="header-navigation__menu">
					<ul class="navigation__menu-list">
						<li class="navigation__menu-item">
							<router-link to="/" exact class="navigation__menu-link">Home</router-link>
							<!-- <a href="#/main" class="navigation__menu-link">Home</a> -->
						</li>
						<li class="navigation__menu-item">
							<router-link to="/formVita" exact class="navigation__menu-link">Add</router-link>
							<!-- <a href="#/formVita" class="navigation__menu-link">Add</a> -->
						</li>
						<li class="navigation__menu-item">
							<router-link to="/formVitaPrev" exact class="navigation__menu-link">Poster</router-link>
							<!-- <a href="#/formVitaPrev" class="navigation__menu-link">Poster</a> -->
						</li>
						<li class="navigation__menu-item">
							<a href="#forClient" class="navigation__menu-link">Categories</a>
						</li>
					</ul>
				</nav>
				<div class="header-navigation__logo">
					<a href="index.html" class="navigation__logo-link">Torry-Shops</a>
				</div>
				<div class="header-navigation__social">
					<ul class="navigation__social-list">
						<li class="navigation__social-item">
							<a href="#" class="facebook">
								
							</a>
						</li>
						<li class="navigation__social-item">
							<a href="#" class="twitter">
								
							</a>
						</li>
						<li class="navigation__social-item">
							<a href="#" class="youtube">
								
							</a>
						</li>
						<li class="navigation__social-item">
							<a href="#" class="email">
								
							</a>
						</li>
					</ul>
					<div class="header-navigation__leng">
						<ul class="navigation__leng-list">
							<li class="navigation__leng-item">
								<a href="index.html">Eng</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="arrow_down"></div>
		</div>
	</header>
</template>


<script>
	
export default {
	data(){
		return {
		
		}
	},
	methods: {

	}
}

</script>

<style>
header {
	background: #00C6C3;
}
.header_wrap {
	max-width: 1200px;
	margin: 0 auto;
}
.header-navigation {
	display: flex;
	justify-content: space-between;
}
.header-navigation__menu, .header-navigation__logo,
 .header-navigation__social {
	width: 30%;
	margin: auto;
}
.header-navigation__logo {
	width: 40%;
}
.navigation__menu-list {
	display: flex;
	justify-content: space-around;
}
.navigation__menu-link {
	font-family: 'Kaushan Script', cursive;
	font-size: 24px;
	text-decoration: none;
	color: #000;
	text-shadow: 1px 1px 1px rgba(255,255,255, .8);
}
.navigation__menu-link:hover, .router-link-active {
	color: #f2f2f2;
	text-decoration: underline;
	text-shadow: 1px 1px 1px rgba(0,0,0, .8);
}
.navigation__logo-link {
	font-family: 'Pacifico', cursive;
	font-size: 55px;
	color: #005150;
	display: flex;
	justify-content:center;
	text-shadow: 2px 2px 3px rgba(222,222,222, .8);
}
.navigation__logo-link:hover {
	color: #f2f2f2;
	text-decoration: none;
	text-shadow: 2px 2px 3px rgba(0,0,0, .8);
}
.header-navigation__social {
	display: flex;
	justify-content: space-around;
}
.navigation__social-list {
	display: flex;
}
.navigation__social-item {
	padding: 0 5px;
}
.facebook, .twitter, .youtube, .email  {
	display: block;
	width: 48px;
	height: 48px;
}
.facebook:hover , .twitter:hover , 
 .youtube:hover , .email:hover {
	transition: all .2s ease-in-out;
}
.facebook {
	background-image: url(../assets/img/social_facebook.png);
}.twitter {
	background-image: url(../assets/img/social_twitter.png);
}.youtube {
	background-image: url(../assets/img/social_youtube.png);
}.email {
	background-image: url(../assets/img/social_email.png);
}.facebook:hover {
	background-image: url(../assets/img/if_facebook_hover.png);
}.twitter:hover {
	background-image: url(../assets/img/if_twitter_hover.png);
}.youtube:hover {
	background-image: url(../assets/img/if_youtube_hover.png);
}.email:hover {
	background-image: url(../assets/img/if_email_hover.png);
}
.header-navigation__leng {
	display: flex;
	align-items: center;
}
.navigation__leng-item a {
	padding: 4px 8px;
	color: #f2f2f2;
	background-color: #004C4B;
	text-decoration: none;
}
.navigation__leng-item a:hover {
	background-color: #E5E5E5;
	color: #333;
	transition: all .2s ease-in-out;
}
.arrow_down {
	position: absolute;
	left: 50%;
	margin-left: -180px;
	width: 0;
	height: 0;
	border: 180px solid transparent;
	border-top: 45px solid #00C6C3;
}
</style>