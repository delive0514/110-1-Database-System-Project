<template>
  <div class="container rounded" style="height:700px;">
    <div class="row justify-content-center">
      <div class="col-6 my-custom">
        <h2 style="text-align: center">會員</h2>
      </div>
      <div class="col-3 my-custom">
        <form class="d-flex" prop="account">
            <input class="form-control me-2" v-model="dynamicValidateForm.account">
        </form>
      </div>
      <div class="col-3 my-custom">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 my-custom">
        <h2 style="text-align: center">密碼</h2>
      </div>
      <div class="col-3 my-custom">
        <form class="d-flex" prop="pass">
            <input class="form-control me-2" v-model="ruleForm.pass">
        </form>
      </div>
      <div class="col-3 my-custom">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3 row justify-content-center">
        <button @click="login(dynamicValidateForm.account, ruleForm.pass)">登入</button>
        </div>
      <div class="col-3 row justify-content-center">
        <router-link to="/identify/register" class="register">
        <button>註冊</button>
        </router-link>
      </div>
    </div>
      
    
    
    
  </div>
</template>

<script>
import loginController from './login.controller'
  export default {
    name: 'login',
    data() {
      return {
        ruleForm: {
          pass: '',
        },
        dynamicValidateForm: {
          account: ''
        },
      };
    },
    methods: loginController,
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

  .my-custom{
    margin-top:110px;
    margin-bottom:110px;
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