<template>
    <carousel />
    <div class="container-fluid">
        <div class="row justify-content-center" id="productBlock">
            <product v-for="item in productArray" :block="item" :key="item.id"></product>
        </div>
    </div>
</template>

<script>
import HelloWorldService from '../services/helloworld.service'
import Product from '../components/Product';
import Carousel from '../components/Carousel'

export default {
    data () {
        return {
            productArray: [],

        }
    },
    mounted() {
        HelloWorldService.getProduct().then(data => {
            this.productArray = data.result;
        }).catch((error) => {
            console.log("err",error);
        })
    },
    components: {
        Product,
        Carousel,
    },
    name: 'app',
};
</script>