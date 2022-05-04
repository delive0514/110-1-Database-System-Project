const db = require('./connection_db');

module.exports = function newOrder(Data) {
    var result = {};
    var order_list = [];
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM shopping_cart where member_id = ?', Data.member_id, function (err, rows) {
            // 若資料庫部分出現問題，則回傳「伺服器錯誤，請稍後再試！」的結果。
            if (err) {
                console.log(err);
                result.status = "取得資料失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            getOrderID().then(id => {
                rows.forEach(element => {
                    let fee = 0;
                    getProductPrice(element.product_id).then(price => {
                        if (!Data.coupon_id)
                            fee = parseInt(element.quantity) * price;
                        order = {
                            id: id + 1,
                            member_id: element.member_id,
                            coupon_id: Data.coupon_id,
                            product_id: element.product_id,
                            quantity: element.quantity,
                            order_date: Data.order_date,
                            arrive_date: Data.arrive_date,
                            payment_method: Data.payment_method,
                            status: 0,
                            address: Data.address,
                            fee: fee
                        }
                        order_list.push(order);
                        db.query('INSERT INTO `order` SET ?', order, function (err, rows2) {
                            // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                            if (err) {
                                console.log(err);
                                result.status = "新增失敗。";
                                result.err = "伺服器錯誤，請稍後在試！"
                                reject(result);
                                return;
                            }
                            // 若寫入資料庫成功，則回傳給clinet端下：
                            result.status = "成功新增訂單。"
                        })
                        db.query('delete from `shopping_cart` where member_id = ?', order.member_id, function (err, rows2) {
                            // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                            if (err) {
                                console.log(err);
                                result.status = "新增失敗。";
                                result.err = "伺服器錯誤，請稍後在試！"
                                reject(result);
                                return;
                            }
                        })
                    });
                    getProductStorage(element.product_id).then(storage => {
                        db.query('UPDATE product set storage = ? where id = ?', [storage - element.quantity, element.product_id], function (err, rows) {
                            if (err) {
                                console.log(err);
                                result.status = "購物車資料更新失敗。"
                                result.err = "伺服器錯誤，請稍後在試！"
                                reject(result);
                                return;
                            }
                            else {
                                console.log(storage, element.product_id);
                            }
                        })
                    })
                })
                result.status = "成功建立訂單。";
                result.order_id = id + 1;
                resolve(result);
                // 若資料庫部分沒問題，則回傳全部產品資料。
            });
        })
    })

}


// 取得商品價格
const getProductPrice = (productID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT price FROM product WHERE id = ?', productID, function (err, rows) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve(rows[0].price);
        })
    })
}

//取得商品storage
const getProductStorage = (productID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT storage FROM product WHERE id = ?', productID, function (err, rows) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve(rows[0].storage);
        })
    })
}

// 取得訂單id
const getOrderID = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT MAX(id) AS id FROM `order`', function (err, rows, fields) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            if (!rows)
                resolve(0);
            resolve(rows[0].id);
        })
    })
}

