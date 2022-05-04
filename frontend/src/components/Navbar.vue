<template>
    <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <div class="container-md">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand" to="/">
            <h1><img src="../assets/shoe_icon_sm.png" alt="珍室鞋樓">珍室鞋樓</h1>
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/product-list" class="nav-link rem-1-5">全部商品</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/category/man" class="nav-link rem-1-5">男鞋</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="'/category/woman'" class="nav-link rem-1-5">女鞋</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="'/category/child'" class="nav-link rem-1-5">童鞋</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="'/category/sport'" class="nav-link rem-1-5">運動鞋</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="'/category/relax'" class="nav-link rem-1-5">休閒鞋</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" v-model="message" placeholder="想要什麼鞋呢??">
                </form>
            </div>
            <router-link to="/" class="guest" @click="checkLogin()">
                <img src="../assets/guest_icon.png">
            </router-link>
            <router-link to="/cart" class="shoppingCart" @click="checkLoginBeforeCart()">
                <img src="../assets/cart_icon.png" >
            </router-link>
        </div>
    </nav>
    <router-view />
</template>

<script>
export default {
        methods:{
            checkLogin(){
                if(localStorage.getItem("token")){this.$router.push({path: "/member"});}
                else{this.$router.push({path: "/identify"});}
            },
            checkLoginBeforeCart(){
                if(localStorage.getItem("token")){
                    this.$router.push({path: "/cart"});
                }
                else{
                    alert("請先登入");
                    this.$router.push({path: "/identify"});
                }
            }
        }
    }
</script>

<style>
.bg-custom {
    background-color: #e79d67;
}

.navbar-custom .navbar-brand {
    color: #ffdccd;
}   

.navbar-custom .navbar-brand:hover, .navbar-custom .navbar-brand:focus {
    color: #ffdccd;
}

.navbar-custom .navbar-nav .nav-link {
    color: #ffdccd;
}

.navbar-custom .navbar-nav .nav-link:hover, .navbar-custom .navbar-nav .nav-link:focus {
    color: #d63384;
}

.navbar-custom .navbar-nav .nav-link.disabled {
    color: rgba(255, 220, 205, 0.3);
}

.navbar-custom .navbar-nav .show > .nav-link,
.navbar-custom .navbar-nav .nav-link.active {
    color: #ffdccd;
}

.navbar-custom .navbar-nav .nav-link.rem-1-5 {
    font-size: 1.5rem;
}

.navbar-custom .navbar-nav .nav-link.rem-2 {
    font-size: 2rem;
}

.navbar-custom .navbar-nav .nav-link.rem-3 {
    font-size: 3rem;
}

.navbar-custom .navbar-toggler {
    color: #ffdccd;
    border-color: rgba(255, 220, 205, 0.1);
}

.navbar-custom .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-custom .navbar-text {
    color: #ffdccd;
    font-size: 2.5rem;
}

.navbar-custom .navbar-text a,
.navbar-custom .navbar-text a:hover,
.navbar-custom .navbar-text a:focus {
    color: #ffdccd;
}



</style>