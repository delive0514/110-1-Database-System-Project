import registerService from '../services/user.service'

export default {
    register,
    ChangePassword,
    toCreditCardString,
    logout
}


function register(email, account, phone, password, name){
    registerService.register(email, account, phone, password, name).then(data =>{
        localStorage.setItem("email",data.result.email);
        if(data.result.status == "註冊成功。"){
            this.$router.push({path: "/identify"});
        }
        if(data.result.status == "註冊失敗。"){
            this.$router.push({path: "/index"});
        }
            
    })
}

function ChangePassword(oldpassword, password){
    registerService.ChangePassword(oldpassword, password).then(data =>{
        if((data.result.status=="會員資料更新成功。")){
            alert("會員資料更新成功。");
            this.$router.push({path: "/index"});
        }
        if((data.result.status =="登入失敗。")){
            localStorage.removeItem("token");
            localStorage.setItem("isLogin",0);
            alert("登入失敗");
            this.$router.push({path: "/identify"});
        }
    })
}

function toCreditCardString(product_method){
    if(product_method == 0) {
        return "信用卡付款"
    }
}

function logout(){
    if(confirm("確定登出?")){
        localStorage.removeItem("token");
        localStorage.setItem("isLogin", 0);
        this.$router.push({path: "/identify"});
    }
}
