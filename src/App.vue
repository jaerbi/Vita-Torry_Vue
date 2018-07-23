<template>
  <div>
    <app-header></app-header>
    <!-- <div class="nav_buttons">
      <button v-on:click="component = 'form_vita'" class="add_product">Добавити Товар</button>
      <button v-on:click="component = 'form_vita-prev'" class="add_product">Proprosmotr</button>
      <button v-on:click="component = 'main_vita'" class="add_product">Show Main</button>
    </div> -->
    <router-view></router-view>
    <!-- <keep-alive>
      <components v-bind:is="component"></components>
    </keep-alive> -->
    <app-footer></app-footer>
  </div>
</template>

<script>

import FormVita from './components/formVita.vue'
import formVitaPrev from './components/form_vita_prev.vue'
import Main from './components/main_vita.vue'

export default {
  components: {
    'form_vita': FormVita,
    'form_vita-prev': formVitaPrev,
    'main_vita': Main
  },
  data() {
    return {
      // component: 'form_vita-prev'
    }
  },
  methods: {

  },
  computed: { 

  }
}
</script>

<style>
body{
  background: #EAFFFE;
  margin: 0;
  font: 16px 'Fira Sans', sans-serif;
  color: #003D3C;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
input, button {
  outline: 0;
}
</style>
