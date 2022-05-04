<template>
    <div class="container">
        <h1>商品列表 | {{ category }}</h1>
        <hr>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center" id="productBlock">
            <product v-for="item in productArray" :block="item" :key="item.id"></product>
        </div>
    </div>
</template>

<script>
import Product from '../components/Product';
import HelloWorldService from '../services/helloworld.service'


export default {
    data () {
        return {
            productArray: [],
        }
    },
    computed: {
        category() {
            return this.$route.params.category
        }
    },
    watch: {
        category: function () {
            this.$router.go(0);
        }
    },
    mounted() {
        HelloWorldService.getProductByCategory(this.$route.params.category).then(data => {
            this.productArray = data.result;
        }).catch((error) => {
            console.log("err",error);
        });
    },
    components: {
        Product,
    },
    name: 'app',
};
</script>