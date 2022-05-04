
import loginService from '../services/user.service'

export default {
    login,
}

function login(account, password){
    loginService.login(account, password).then(data =>{
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("isLogin", 1);

        if((data.result.status=="登入成功。")){
            alert("登入成功");
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