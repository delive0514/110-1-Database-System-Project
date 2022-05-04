<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" name="button" v-on:click="click()">get</button>
  </div>
</template>

<script>
import HelloWorldController from './HelloWorld.controller';


export default {
  name: 'HelloWorld',
  data () {
    return {
      productArray: [],
    }
  },
  mounted() {
        HelloWorldService.getProduct().then(data => {
            this.productArray = data;
        })
  },
  methods: HelloWorldController,
}
</script>