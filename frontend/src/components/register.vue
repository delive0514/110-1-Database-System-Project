<template>
    <div class="container rounded" style="height:700px;">
        <div class="row justify-content-center">
            <div class="col-3 my-custom">
            <h2 style="text-align: center">電子郵件</h2>
            </div>
            <div class="col-3 my-custom">
                <form class="d-flex" prop="eamil">
                    <input class="form-control me-2" v-model="dynamicValidateForm.email" >
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-3 my-custom">
            <h2 style="text-align: center">姓名</h2>
            </div>
            <div class="col-3 my-custom">
                <form class="d-flex" prop="name">
                    <input class="form-control me-2" v-model="ruleForm.name" >
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-3 my-custom">
                <h2 style="text-align: center">電話</h2>
            </div>
            <div class="col-3 my-custom">
                <form class="d-flex" prop="phone">
                    <input class="form-control me-2" v-model="dynamicValidateForm.phone">
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-3 my-custom">
                <h2 style="text-align: center">帳號</h2>
            </div>
            <div class="col-3 my-custom">
                <form class="d-flex" prop="username">
                    <input class="form-control me-2" v-model="dynamicValidateForm.username" >
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-3 my-custom">
                <h2 style="text-align: center" >密碼</h2>
            </div>
            <div class="col-3 my-custom">
                <form class="d-flex" prop="pass">
                    <input type="password"  class="form-control me-2" v-model="ruleForm.pass">
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            
            <div class="col-3 row justify-content-center">
                
                    <button @click="register(dynamicValidateForm.email, dynamicValidateForm.username ,dynamicValidateForm.phone , ruleForm.pass, ruleForm.name)">完成註冊</button>
                
            </div>
        </div>
    </div>
</template>

<script>
import registerController from './register.controller'
    export default {
        name: 'register',
        data() {
            return {
                ruleForm: {
                    pass:  '',
                    name:  '',
                },
                dynamicValidateForm: {
                    username: '',
                    email: '',
                    phone: ''
                },
            };
        },
        methods: registerController,
        mounted(){
            
        }
    };
</script>

<style scoped>
.container{
    margin-top: 100px;
    border-style: solid;
    border-color: #FFC0AC;
}
.col-3{
    color:#FFCBAC;
}
.my-custom{
    margin-top:40px;
    margin-bottom:20px;
}

button{
    width:  200px;
    height:  100px;
    color: #DDA08A;
    background-color: transparent;
    border-color: #FFC0AC;
    border-radius: 10px;
    font-size: 30px;
}
</style>