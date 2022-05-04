import http from "./service.config"

const services = {
    getCart,
}

function getCart(){
    let url = "/shoppingcart";
    return http.get(url)
}


export default services;