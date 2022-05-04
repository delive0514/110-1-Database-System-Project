<template>
    <div class="container rounded border-custom mt-3">
        <div class="row justify-content-center mt-3 mb-3">
            <product-show v-for="item in product" :block="item" :key="item.id"></product-show>
        </div>
        <div class="mt-3 mb-3">
            <div class="row center-align">
                <div class="col-6">
                    <span>數量</span>
                    <button @click="del(index)" :disabled="quantity<=1">-</button>
                    <span>{{ quantity }}</span>
                    <button @click="add(index)" :disabled="quantity>=product.storage">+</button>
                </div>
                <div class="col-6">
                    <button @click="PutProducToShoppingCart(memberId, productId, quantity)">加入購物車</button>
                </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorldService from '../services/helloworld.service'
import UserService from '../services/user.service'
import ProductShow from '../components/productShow';

export default {

    data () {
        return {
            product: [],
            memberId: 0,
            productId: this.$route.params.id,
            quantity: 1,
        }
    },
    methods: {
        PutProducToShoppingCart(memberId, productId, quantity) {
            if(localStorage.getItem("token")){
                UserService.postShoppingCart(memberId, productId, quantity).then(data =>{
                    if((data.result.status=="成功新增商品。")){
                        alert("成功添加商品。");
                        this.$router.push({path: "/cart"});
                    }
                    if((data.result.status =="添加商品失敗")){
                        alert(data.result.err)
                    }
                })
            }
            else{
                alert("請先登入。");
                this.$router.push({path: "/identify"})
            }
        },
        add(){
            this.quantity++;
        },
        del(){
            this.quantity--;
        },
    },
    mounted() {
        UserService.getMemberData().then(data => {
            this.memberId = data.result.id;
        }).catch((error) => {
            console.log("err",error);
        });
        HelloWorldService.getProductById(this.$route.params.id).then(data => {
            this.product = data.result;
        }).catch((error) => {
            console.log("err",error);
        })
        
    },
    components: {
        ProductShow,
    },
    name: 'app',
};
</script>

<style>
button{
    width:  auto;
    height:  50px;
    color: #DDA08A;
    background-color: transparent;
    border-color: #FFC0AC;
    border-radius: 10px;
    font-size: 30px;
}
span{
    color: #DDA08A;
    font-size: 30px ;
}
.border-custom{
    border-style: solid;
    border-color: #FFC0AC;
}
.center-align{
    text-align: center;
}
</style>