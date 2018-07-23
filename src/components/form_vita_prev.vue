<template>
	<div id="form_vita_prev">
		<h1>Список Добавлених Товарів!</h1>
		<input type="text" v-model="search_poster" placeholder="Пошук">
		<div v-for="merchand in searchPoster" class="merchandise">
			<router-link v-bind:to="'/poster/' + merchand.id"><h2 v-changeColor>{{ merchand.pTitle }}</h2></router-link>
			<p>{{ merchand.pDescript }}</p>
		</div>
	</div>
</template>

<script>
	export default {
	data(){
		return {
			merchandise: [],
			search_poster: ''
		}
	},
	methods: {

	},
	computed: {
		// Search lockal poster
		searchPoster: function(){
			return this.merchandise.filter((merchand) =>{
				return merchand.pTitle.match(this.search_poster);
			});
		}
	},
	// Firebase 
	created(){
		this.$http.get('https://torry-vita.firebaseio.com/poster.json').then(function(data){
			return data.json();
		}).then(function(data){
			var posterArray = []; 
			for (let key in data){ 
				data[key].id = key;
				posterArray.push(data[key]);
			}
			this.merchandise = posterArray;
		})
	}
}

</script>

<style>
#form_vita_prev {
	margin: 0 auto;
	max-width: 800px;
}
</style>