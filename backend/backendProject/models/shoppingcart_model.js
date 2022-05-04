const db = require('./connection_db');

module.exports = function register(Data) {
    let result = {};
    return new Promise((resolve, reject) => {

        getShoppingcartById(Data.member_id, Data.product_id).then(result1 => {
            if (result1.length === 0) {
                db.query('INSERT INTO shopping_cart SET ?', Data, function (err, rows) {
                    // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                    if (err) {
                        console.log(err);
                        result.status = "失敗。";
                        result.err = "伺服器錯誤，請稍後在試！"
                        reject(result);
                        return;
                    }
                    // 若寫入資料庫成功，則回傳給clinet端下：
                    result.status = "成功新增商品。"
                    result.detail = Data;
                    resolve(result);
                })
            }
            else {
                db.query('update shopping_cart SET quantity = ? where member_id = ? and product_id = ?', [parseInt(Data.quantity) + parseInt(result1[0].quantity), Data.member_id, Data.product_id], function (err, rows) {
                    // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
                    if (err) {
                        console.log(err);
                        result.status = "失敗。";
                        result.err = "伺服器錯誤，請稍後在試！"
                        reject(result);
                        return;
                    }
                    // 若寫入資料庫成功，則回傳給clinet端下：
                    result.status = "成功新增商品。"
                    result.detail = Data;
                    resolve(result);
                })
            }
        })
    })
}

const getShoppingcartById = (MemberID, ProductID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM shopping_cart WHERE member_id = ? and product_id = ?', [MemberID, ProductID], function (err, rows) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log(rows);
            resolve(rows);
        })
    })
}