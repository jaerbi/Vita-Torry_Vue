<template>
  <div>
  	<h1 class="formVita">Створення вашого Оголошення</h1>
  	
  	<form v-if="!addedPoster">

  		<div id="form_title">
  			<h2>Заповніть поля що з низу</h2>
        <p class="title_text"><span class="star">*</span> обов'язково до заповнення</p>
	  	</div>
	  	<div class="test">
				<p>SOME TEXT FROM TEST</p>
				<label>Сhoose File</label>
				<input type="file" @change="imageChange" accept="image/jpeg">
				<button v-on:click="">UpLoad File</button>
				<img :src="imageUrl" height="150">
			</div>
	  	<div id="form_filds">
	  		<h3>Опишіть вашу річь</h3>
        <ul class="discription__form_list">
          <li class="discription__form_item disc__width_a">
            <label for="product_name">Назва <span class="star">*</span></label>
              <input type="text" placeholder="Наприклад: Супер юбка в горошок" id="product_name" v-model.lazy="poster.pTitle" required>
          </li>
          <li class="discription__form_item disc__width_b">
            <label for="lookLike">Як Виглядає <span class="star">*</span></label>
              <span class="input_arrow"></span>
              <input list="look" placeholder="Виберіть" class="form_hover" v-model.lazy="poster.pLook" id="lookLike" required>
              <datalist id="look">
                <option v-for="look in looks">{{ look }}</option>
              </datalist>
          </li>
          <li class="discription__form_item disc__width_b">
            <label for="brend">Бренд</label>
              <span class="input_arrow"></span>
              <input type="text" placeholder="Вкажіть Бренд" id="brend" v-model.lazy="poster.pBrend">
          </li>
          <li class="discription__form_item disc__width_a">
            <label for="des_product">Опис <span class="star">*</span></label>
              <textarea id="des_product" placeholder="Наприклад: В цій сорочці ви будете виглядати як знаменитість" v-model.lazy="poster.pDescript" required></textarea>
          </li>
          <li class="discription__form_item disc__width_b">
            <label for="des_storage">Склад</label>
              <textarea id="des_storage" placeholder="Наприклад: 60% бавовна, 40% шерсть" v-model.lazy="poster.pStorage"></textarea>
          </li>
          <li class="discription__form_item disc__width_b">
            <label for="des_deliver">Оплата та доставка <span class="star">*</span></label>
              <textarea id="des_deliver" placeholder="Наприклад: Відправлю річь тільки після оплати половини на карточку" v-model.lazy="poster.pDeliver" required></textarea>
          </li>
        </ul>
        <h3>Виберіть розділ</h3>
        <ul class="form__section_list">
            <li class="form__section_item" v-on:click="active_section_wom = !active_section_wom"><a v-on:click="active_sect_wom = !active_sect_wom" v-bind:class="{active_sect_wom: active_sect_wom}" href="#">Жіночі речі</a></li>
            <li class="form__section_item" v-on:click="active_section_kid = !active_section_kid"><a href="#" v-on:click="active_sect_kid = !active_sect_kid" v-bind:class="{active_sect_kid: active_sect_kid}">Дитячі речі</a></li>
            <li class="form__section_item" v-on:click="active_section_man = !active_section_man"><a href="#" v-on:click="active_sect_man = !active_sect_man" v-bind:class="{active_sect_man: active_sect_man}">Чоловічі речі</a></li>
        </ul>
        <ul class="section_item_womens" v-bind:class="{active_section_wom: active_section_wom}">
          <li v-for="women in womens">
            <label>{{ women }} 
              <input type="radio" name="women" v-model.lazy="poster.pWomen_item" v-bind:value="women">
            </label>
          </li>
        </ul>
        <ul class="section_item_kids" v-bind:class="{active_section_kid: active_section_kid}">
          <li v-for="kid in kids">
            <label>{{ kid }}
              <input type="radio" name="kid" v-model.lazy="poster.pKid_item" v-bind:value="kid">
            </label>
          </li>
        </ul>
        <ul class="section_item_mans" v-bind:class="{active_section_man: active_section_man}">
          <li v-for="man in mans">
            <label>{{ man }}
              <input type="radio" name="man" v-model.lazy="poster.pMan_item"  v-bind:value="man">
            </label>
          </li>
        </ul>
        <h3>Виберіть до 2 відтінків</h3>
        <ul class="form__shades__list">
          <li v-for="shader in shaders">
            <label class="radio">{{ shader.colorName }}
              <input type="checkbox" v-bind:value="shader.colorName" class="color_cheked" v-model="poster.pShader">
              <div class="colorId" v-bind:style="{background: shader.colorId}"></div>
            </label>
          </li>
        </ul>
	  	</div>
	  	<div id="form_controls">
	  		<button class="add_product" v-on:click.prevent="addPoster">Добавити Річь</button>
	  	</div>
	  	<div v-if="!addedPoster">
			<p>Назва: {{ poster.pTitle }}</p>
			<p>Вигляд: {{ poster.pLook }}</p>
			<p>Бренд: {{ poster.pBrend }}</p>
			<p>Жіноча: {{ poster.pWomen_item }}</p>
			<p>Дитяча: {{ poster.pKid_item }}</p>
			<p>Чоловіча: {{ poster.pMan_item }}</p>
			<p>Колір:</p>
			<ul>
				<li v-for="pShade in poster.pShader">{{ pShade }}</li>
			</ul>
			<p>Про річь:</p>
			<p>{{ poster.pDescript }}</p>
			<p>Склад:</p>
			<p>{{ poster.pStorage }}</p>
			<p>Доставка і оплата:</p>
			<p>{{ poster.pDeliver }}</p>
  	</div>
  	</form>
  	<div v-if="addedPoster">
  		<p>WhOOOO hooooW!! SUCCESS</p>
  	</div>
  	
  </div>
</template>

<script>
export default {
  data () {
    return {
    	looks: ['Нова','Ідеальна','Деже Хороша','Хороша','Задовільна'],
      womens: ['Верхній одяг', 'Спідниці', 'Юбки', 'Майки та футболки', 'Блузки та сорочки', 'Штани', 'Шорти', 'Кофти', 'Тапки', 'Кросівки', 'Туфлі', 'Спідня білизна', 'Інші речі'],
      mans: ['Верхній одяг', 'Костюми', 'Футболки','Кофти Світера', 'Джинси', 'Штани', 'Шорти', 'Взуття', 'Інші Речі'],
      kids: ['Для дівчаток', 'Для хлопчиків', 'Для малюків'],
      shaders: [
        {colorName: 'Білий', colorId: '#fff'},
        {colorName: 'Сріблястий', colorId: '#E0E5EF'},
        {colorName: 'Сірий', colorId: '#A7A7A7'},
        {colorName: 'Жовтий', colorId: '#FFF633'},
        {colorName: 'Бежевий', colorId: '#F4E0C7'},
        {colorName: 'Золотистий', colorId: '#FFDE28'},
        {colorName: 'Оранжевий', colorId: '#FFAF28'},
        {colorName: 'Розовий', colorId: '#FF3399'},
        {colorName: 'Бірюзовий', colorId: '#A5D7E2'},
        {colorName: 'Чорний', colorId: '#000'},
        {colorName: 'Червоний', colorId: '#EC0E11'},
        {colorName: 'Синій', colorId: '#3477CF'},
        {colorName: 'Хакі', colorId: '#999560'},
        {colorName: 'Зелений', colorId: '#4DB654'},
        {colorName: 'Фіолетовий', colorId: '#AB1EAD'},
        {colorName: 'Коричневий', colorId: '#97632F'},
        {colorName: 'Різнокольоровий', colorId: '#7F3300'}
      ],
    	active_section_wom: true,
      active_section_kid: true,
      active_section_man: true,
      active_sect_wom: false,
      active_sect_kid: false,
      active_sect_man: false,
      poster: {
	  		pTitle: '',
	  		pLook: '',
	  		pBrend: '',
	  		pDescript: '',
	  		pStorage: '',
	  		pDeliver: '',
	  		pWomen_item: '',
	  		pKid_item: '',
	  		pMan_item: '',
	  		pShader: []
	  	},
	  	addedPoster: false,
	  	image: null,
	  	imageUrl: ''
	  	
    }
  },	
  methods: {
  	// Add Poster to Firebase
  	addPoster: function(){
  		this.$http.post('https://torry-vita.firebaseio.com/poster.json', this.poster).then(function(data){
  			console.log(data);
  			this.addedPoster = true;
  		});
  	},
  	// Upload FOTO
  	imageChange (event){
  		const files = event.target.files
  		const fileReader = new FileReader()
  		fileReader.addEventListener('load', () => {
  			this.imageUrl = fileReader.result
  		})
  		fileReader.readAsDataURL(files[0])
  		this.image = files[0]
  	}
  },
}
</script>

<style>
.formVita {
	color: #005151;
	text-align: center;
	font-size: 36px;
	margin-top: 40px;
}
h2 {
	font-size: 26px;
	line-height: 1;
}
form {
	max-width: 1200px;
	margin: 0 auto;
}
.title_text {
	font-size: 14px;
}
form .star {
	color: red;
}
/* discription */
.discription__form_list {
	display: flex;
	flex-wrap: wrap;
}
.disc__width_a{
	width: 50%;
}.disc__width_b{
	width: 25%;
}

.discription__form_item {
	padding: 0 5px;
	box-sizing: border-box;
	position: relative;
}

.discription__form_item input, .discription__form_item textarea {
	width: 100%;
	box-sizing: border-box;
	outline: 0;
	padding: 10px 10px;
	line-height: 1;
	border: 2px solid #007573;
	margin-top: 15px;
	font-size: 14px;
}

.discription__form_item input {
	margin-bottom: 20px;
	min-height: 45px;
}

.discription__form_item input::-webkit-calendar-picker-indicator {
  display: none;
}

.discription__form_item textarea {
	resize: vertical;
	min-height: 100px;
	margin-bottom: 7px;
}
.discription__form_item input:hover, .discription__form_item textarea:hover, .section_item_womens li:hover, .section_item_mans li:hover, .section_item_kids li:hover, .active_sect, .form__section_item:hover, .form__shades__list li:hover {
	background-color: #E2EDED;
}
.input_arrow {
	border: 5px solid transparent;
	border-top: 5px solid #005151;
	position: absolute;
	top:54px;right:20px;
}
.input_arrow:hover {
	border-top: 5px solid #AFCFCF;
}
#lookLike, #brend {
	padding-right: 26px;
}

/* Section */
.form__section_list {
	display: flex;
	width: 100%;
	text-align: center;
	padding-bottom: 10px;
}
.form__section_item {
	width: 33.3%;
	box-sizing: border-box;
	border: 1px solid #B5D3D2;
}
.form__section_item a {
	display: block;
	padding: 25px;
	color: #2F4F4F;
	font-size: 18px;
}

.section_item_womens, .section_item_mans, .section_item_kids {
	display: flex;
	flex-wrap: wrap;
}

.section_item_womens li, .section_item_mans li, .section_item_kids li {
	border:1px solid #BFD8D8;
	font-size: 14px;
}

.section_item_womens label, .section_item_mans label, .section_item_kids label {
	padding: 5px 10px;
	display: block;
}
.active_section_wom, .active_section_man, .active_section_kid {
	display: none;
}
ul .active_sect_wom, ul .active_sect_kid, ul .active_sect_man {
	background: #548C8B;
	color: #f2f2f2;
}

.form__shades__list {
	display: flex;
	flex-wrap: wrap;
}
.form__shades__list li {
	padding: 15px 20px;
	border: 1px solid #81BFBD;
}
.form__shades__list label {
	display: flex;
	cursor: pointer;
}
.color_cheked {
	position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;
}
.colorId {
	position: relative;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  box-shadow: 0px 0px 1px 1px rgba(0,0,0,.4);
}
.colorId:before {
	content: '';
  position: absolute;
  top:-2px;left:-2px;
  width: 22px;
  height: 22px;
  border: 1px solid transparent;
  border-radius: 50%;
}
.colorId:after {
	content: '';
  position: absolute;
  top:11px;left:11px;
  width: 10px;
  height: 10px;
  border: 3px solid transparent;
  border-radius:10%;
  border-bottom: 2px solid rgba(0,173,20,0.86);
  border-right: 2px solid rgba(0,173,20,0.86);
  opacity: 0;
  transition: .1s;
}
.radio input:checked + .colorId:after {
  opacity: 1;
}
.radio input:focus + .colorId:before {
  box-shadow: 0px 0px 3px 3px rgba(0,173,20,0.76);
}
/*---------- Add Product --------- */
.add_product {
  margin-top: 10px;
  position: relative;
  background-color: #008E8C;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}
.add_product:hover {
  background: #00A8A5;
}
.add_product:after {
  content: "";
  background: #D6FEFE;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all .7s
}
.add_product:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>
