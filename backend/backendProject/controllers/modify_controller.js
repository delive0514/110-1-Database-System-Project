const toRegister = require('../models/register_model');
const loginAction = require('../models/login_model');
const updateAction = require('../models/update_model');
const modifyShoppingcart = require('../models/modify_shopping_cart_model');
const toShopping = require('../models/shoppingcart_model');
const toImport = require('../models/import_model');
const deleteOrder = require('../models/delete_order_model');
const makeOrder = require('../models/makeOrder_model');
const verify = require('../models/verification');
const Check = require('../service/member_check');
const config = require('../config/development_config');
const jwt = require('jsonwebtoken')

check = new Check();

module.exports = class Modify {

    postRegister(req, res, next) {
        // 獲取client端資料
        const memberData = {
            name: req.body.name,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            permission: 0,
            register_date: onTime(),
            member_status: 0
        }
        const checkEmail = check.checkEmail(memberData.email);
        // 不符合email格式
        if (checkEmail === false) {
            res.json({
                result: {
                    status: "註冊失敗。",
                    err: "請輸入正確的Eamil格式。(如1234@email.com)"
                }
            })
            // 若符合email格式
        } else if (checkEmail === true) {
            // 將資料寫入資料庫
            toRegister(memberData).then(result => {
                // 若寫入成功則回傳
                res.json({
                    result: result
                })
            }, (err) => {
                // 若寫入失敗則回傳
                res.json({
                    err: err
                })
            })
        }

    }

    postLogin(req, res, next) {
        const memberData = {
            email: req.body.email,
            password: req.body.password
        }
        loginAction(memberData).then(rows => {
            if (check.checkNull(rows) === true) {
                res.json({
                    result: {
                        status: "登入失敗。",
                        err: "請輸入正確的帳號或密碼。"
                    }
                })
            } else if (check.checkNull(rows) === false) {
                // 產生token
                const token = jwt.sign({
                    algorithm: 'HS256',
                    exp: Math.floor(Date.now() / 1000) + (60 * 60), // token一個小時後過期。
                    data: rows[0].id
                }, config.secret);
                res.setHeader('token', token);
                res.json({
                    result: {
                        status: "登入成功。",
                        token: token,
                        permission: rows[0].permission
                    }
                })
            }
        })
    }

    postUpdate(req, res, next) {
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

                    // 進行加密
                    //const password = encryption(req.body.password);

                    const memberUpdateData = {
                        oldPassword: req.body.oldPassword,
                        password: req.body.password
                    }
                    updateAction(memberUpdateData, id).then(result => {
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

    postAddProduct(req, res, next) {
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

                    // 進行加密
                    //const password = encryption(req.body.password);

                    const Data = {
                        product_name: req.body.product_name,
                        size: req.body.size,
                        price: req.body.price,
                        storage: req.body.storage,
                        description: req.body.description,
                        status: "1",
                        category: req.body.category,
                        publish_date: onTime(),
                        modified_date: onTime()
                    }
                    // 將資料寫入資料庫
                    toImport(Data).then(result => {
                        // 若寫入成功則回傳
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        // 若寫入失敗則回傳
                        res.json({
                            err: err
                        })
                    })
                }
            })
        }
    }

    postShoppingProduct(req, res, next) {
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

                    // 進行加密
                    //const password = encryption(req.body.password);

                    const Data = {
                        member_id: id,
                        product_id: req.body.product_id,
                        quantity: req.body.quantity
                    }
                    // 將資料寫入資料庫
                    toShopping(Data).then(result => {
                        // 若寫入成功則回傳
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        // 若寫入失敗則回傳
                        res.json({
                            err: err
                        })
                    })
                }
            })
        }
    }

    postModifyProduct(req, res, next) {
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

                    // 進行加密
                    //const password = encryption(req.body.password);

                    const UpdateData = {
                        member_id: id,
                        product_id: req.body.product_id,
                        quantity: req.body.quantity
                    }
                    modifyShoppingcart(UpdateData).then(result => {
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


    postOrder(req, res, next) {
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
                    // 獲取client端資料
                    // 將資料寫入資料庫
                    let Data = {
                        member_id: id,
                        coupon_id: req.body.coupon_id,
                        order_date: onTime(),
                        arrive_date: onTime2(14),
                        payment_method: req.body.payment_method,
                        address: req.body.address
                    }
                    //let member_id = req.body.member_id;
                    makeOrder(Data).then(result => {
                        // 若寫入成功則回傳
                        res.json({
                            result: result
                        })
                    }, (err) => {
                        // 若寫入失敗則回傳
                        res.json({
                            err: err
                        })
                    })

                }
            })
        }
    }
    deleteOrder(req, res, next) {
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
                    // 獲取client端資料
                    // 將資料寫入資料庫
                    let Data = {
                        order_id: req.body.order_id
                    }
                    //let member_id = req.body.member_id;
                    deleteOrder(Data).then(result => {
                        // 若寫入成功則回傳
                        res.json({
                            result: "成功刪除訂單"
                        })
                    }, (err) => {
                        // 若寫入失敗則回傳
                        res.json({
                            err: err
                        })
                    })
                }
            })
        }
    }
}

//取得現在時間，並將格式轉成YYYY-MM-DD HH:MM:SS
const onTime = () => {
    let month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();

    return [date.getFullYear(), "-" +
        (mm > 9 ? '' : '0') + mm, "-" +
        (dd > 9 ? '' : '0') + dd, " " +
        (hh > 9 ? '' : '0') + hh, ":" +
        (mi > 9 ? '' : '0') + mi, ":" +
        (ss > 9 ? '' : '0') + ss
    ].join('');
}

const onTime2 = (day) => {
    let month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate() + day;
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();
    if (dd > month_list[mm - 1]) {
        mm += 1;
        dd = dd - month_list[mm - 1];
    }
    return [date.getFullYear(), "-" +
        (mm > 9 ? '' : '0') + mm, "-" +
        (dd > 9 ? '' : '0') + dd, " " +
        (hh > 9 ? '' : '0') + hh, ":" +
        (mi > 9 ? '' : '0') + mi, ":" +
        (ss > 9 ? '' : '0') + ss
    ].join('');
}