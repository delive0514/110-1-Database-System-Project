import http from "./service.config"

const prefix = "/user";
const services = {
    login,
    register,
    resetPassword,
    getMemberData,
    getOrderById,
    getCreditCard,
    DeleteCreditCard,
    AddCreditCard,
    ChangePassword,
    postShoppingCart,
    updateShoppingCart,
    makeOrder,
}
function login(email, password){
    const url = prefix + "/login";

    return http.post(url, {
        email,
        password
    });
}
function register(email, username, phone, password, name){
    const url = prefix + "/userRegister";

    return http.post(url, {
        email,
        username,
        phone,
        password,
        name
    });
}
function resetPassword(email, account){
    const url = prefix + "/resetPassword";

    return http.post(url, {
        email,
        account
    });
}
function getMemberData(){
    const url = prefix + "/memberData";

    return http.get(url);
}
function getOrderById(){
    const url = "/getOrder";

    return http.get(url);
}
function getCreditCard(){
    const url = prefix + "/creditCard";

    return http.get(url);
}
function DeleteCreditCard(cardNumber){
    const url = prefix + "/creditCard";

    return http.delete(url,{
        data: {
            "cardNumber": cardNumber
        }
    })
}
function AddCreditCard(cardNumber, securityCode, year, month){
    const url = prefix + "/creditCard";

    return http.post(url, {
        cardNumber,
        securityCode,
        year,
        month
    });
}
function ChangePassword(oldPassword, password){
    const url = prefix + "/update";

    return http.put(url, {
        oldPassword,
        password
    });
}
function postShoppingCart(member_id, product_id, quantity){
    const url = prefix + "/shopping_cart";

    return http.post(url, {
        member_id,
        product_id,
        quantity
    });
}
function updateShoppingCart(member_id, product_id, quantity){
    const url = prefix + "/update_shopping_cart";

    return http.post(url, {
        member_id,
        product_id,
        quantity
    });
}
function makeOrder(member_id, arrive_date, payment_method, address){
    const url = prefix + "/order";

    return http.post(url, {
        member_id,
        arrive_date,
        payment_method,
        address
    });
}

export default services;