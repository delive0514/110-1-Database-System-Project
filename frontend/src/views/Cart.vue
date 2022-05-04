<template>
    <div class="container">
        <h1>購物車列表</h1>
        <hr>
    </div>
    <div class="container py-custom rounded border-custom">
        <div class="container row">
            <div class="col-12 center-align">
                <h1>會員ID:{{ userId }}</h1>
            </div>
        </div>
        <div v-for="(itemC, index) in cartArray" :key="index" @change="counter += 1"  class="eachProduct">
            <div v-for="itemP in productArray" :key="itemP.id">
                <div v-if="itemC.product_id === itemP.id" class="row justify-content-center border">
                    <div class="col-3 py-custom center-align">
                        <div class="row justify-content-center">
                            <img class="img-thumbnail w-50" :src="require('@/assets/'+itemP.product_name+'.png')" />
                            商品名稱：{{ itemP.product_name }}
                        </div>
                    </div>
                    <div class="col-2 py-custom-adjust left-align">
                        <p>商品編號：</p>
                        <p>尺寸：</p>
                        <p>價格：</p>
                        <p>描述：</p>
                    </div>
                    <div class="col-7 py-custom">
                        <ul class="list-group">
                            <li class="list-group-item center-align">{{ itemP.id }}</li>
                            <li class="list-group-item center-align">{{ itemP.size}}</li>
                            <li class="list-group-item center-align">{{ itemP.price }}</li>
                            <li class="list-group-item center-align">{{ itemP.description }}</li>
                        </ul>
                        <div class="left-align">
                            <button @click="del(index)" :disabled="quantityArray[index]<=1">-</button>
                            產品數量: {{ itemC.quantity }}
                            <button @click="add(index)" :disabled="quantityArray[index]>=itemP.storage">+</button>
                            <button>修改商品</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-custom">
            <div class="row justify-content-center">
                <div class="col-3 -align">
                    <div class="container row">
                        <div class="col-6 right-align">
                            <span>付款方式:</span>
                        </div>
                        <div class="col-6 left-align">
                            <form class="d-flex" prop="record">
                                <select>
                                    <option>信用卡</option>
                                    <option>貨到付款</option>
                                    <option>銀行轉帳</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-3 left-align">
                    {{ arrive_date }}
                </div>
                <div class="col-4">
                    <div class="container">
                        <div class="container row">
                            <div class="col-4 right-align">
                                <span>地址:</span>
                            </div>
                            <div class="col-8 left-align">
                                <form class="d-flex" prop="record">
                                    <input class="form-control me-2" v-model="address.record">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 left-align">
                    <button @click="makeOrder(userId, arrive_date, payment_method, address)">送出訂單</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartService from "../services/cart.service"
import UserService from '../services/user.service'
import HelloWorldService from "../services/helloworld.service"

export default {
    data () {
        return {
            cartArray: [],
            ProductArray: [],
            quantityArray:[],
            address: {
                record: '',
            },
            arrive_date: new Date(),
            userId: 0,
        }
    },
    methods: {
        makeOrder(member_id, arrive_date, payment_method, address) {
            UserService.makeOrder(member_id, arrive_date, payment_method, address).then(data =>{
                if((data.result.status=="成功建立訂單。")){
                    alert("成功建立訂單。");
                    this.$router.push({path: "/member"});
                }
                if((data.result.status =="建立訂單失敗")){
                    alert(data.result.err)
                }
            })
        },
        add(index){
            this.$set(this.qauntityArray, index, this.qauntityArray[index]++);
        },
        del(index){
            this.$set(this.qauntityArray, index, this.qauntityArray[index]--);
        },
    },
    mounted() {
        cartService.getCart().then(data => {
            this.cartArray = data.result;
            this.userId = data.result[0].member_id;
        }).catch((error) => {
            console.log("err",error);
        });
        HelloWorldService.getProduct().then(data => {
            this.productArray = data.result;
        }).catch((error) => {
            console.log("err",error);
        });
    },
    name: 'app',
};
</script>

<style scoped>
    .py-custom{
        padding-top:55px;
        padding-bottom:55px;
    }

    .py-custom-adjust{
        padding-top:65px;
        padding-bottom:55px;
    }

    .mt-custom{
        margin-top:50px;
    }
    .border-custom{
        border-style: solid;
        border-color: #FFC0AC;
    }

    button{
        width:  100px;
        height:  50px;
        color: #DDA08A;
        background-color: transparent;
        border-color: #FFC0AC;
        border-radius: 10px;
        font-size: 20px;
    }

    .left-align{
        text-align: right;
        color: #DDA08A;
    }

    .center-align{
        text-align: center;
        color: #DDA08A;
    }

    .right-align{
        color: #DDA08A;
        text-align: right;
        font-size: 20px;
    }
</style>