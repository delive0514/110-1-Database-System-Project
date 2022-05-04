const productData = require('../models/getAllProduct_model');
const oneProductData = require('../models/getOneProduct_model');
const cartData = require('../models/getCartProduct');
const orderData = require('../models/getOrder')
const verify = require('../models/verification');
const someProductData = require('../models/getSomeProduct');
const getMemberData = require('../models/getMember');
const jwt = require('jsonwebtoken')
module.exports = class GetMethod {

    getMemberData(req, res, next) {
        const token = req.headers['token'];
        //確定token是否有輸入
        if (check.checkNull(token) === true) {
            res.json({
                err: "請輸入token！"
            })
        } else if (check.checkNull(token) === false) {
            verify(token).then(tokenResult => {
                if (tokenResult === false) {
                    res.json({
                        result: {
                            status: "token錯誤。",
                            err: "請重新登入。"
                        }
                    })
                } else {
                    console.log(tokenResult);
                    const id = tokenResult;
                    getMemberData(id).then(result => {
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        res.json({
                            result: err
                        })
                    })
                }
            })
        }
    }

    // 取得全部產品資料
    getAllProduct(req, res, next) {
        productData().then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }

    getSomeProduct(req, res, next) {
        const category = req.body.category;
        someProductData(category).then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }


    getOneProduct(req, res, next) {
        const product_id = req.body.product_id;
        oneProductData(product_id).then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }

    getShoppingcart(req, res, next) {
        const token = req.headers['token'];
        //確定token是否有輸入
        if (check.checkNull(token) === true) {
            res.json({
                err: "請輸入token！"
            })
        } else if (check.checkNull(token) === false) {
            verify(token).then(tokenResult => {
                if (tokenResult === false) {
                    res.json({
                        result: {
                            status: "token錯誤。",
                            err: "請重新登入。"
                        }
                    })
                } else {
                    console.log(tokenResult);
                    const id = tokenResult;

                    const memberData = {
                        id: id
                    }
                    cartData(memberData).then(result => {
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        res.json({
                            result: err
                        })
                    })
                }
            })
        }
    }

    getOrderById(req, res, next) {
        const token = req.headers['token'];
        //確定token是否有輸入
        if (check.checkNull(token) === true) {
            res.json({
                err: "請輸入token！"
            })
        } else if (check.checkNull(token) === false) {
            verify(token).then(tokenResult => {
                if (tokenResult === false) {
                    res.json({
                        result: {
                            status: "token錯誤。",
                            err: "請重新登入。"
                        }
                    })
                } else {
                    console.log(tokenResult);
                    const id = tokenResult;

                    const memberData = {
                        id: id
                    }
                    orderData(memberData).then(result => {
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        res.json({
                            result: err
                        })
                    })
                }
            })
        }
    }
}