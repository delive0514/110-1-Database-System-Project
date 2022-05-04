const db = require('./connection_db');

module.exports = function deleteOrder(data) {
    let result = {};
    return new Promise((resolve, reject) => {
        db.query('select * from `order` where id = ?', parseInt(data.order_id), function (err, rows) {
            // 若資料庫部分出現問題，則回傳「伺服器錯誤，請稍後再試！」的結果。
            if (err) {
                console.log(err);
                result.status = "操作失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            rows.forEach((row) => {
                getProductStorage(row.product_id).then(storage => {
                    db.query('UPDATE product set storage = ? where id = ?', [storage + row.quantity, row.product_id], function (err, rows) {
                        if (err) {
                            console.log(err);
                            result.status = "資料更新失敗。"
                            result.err = "伺服器錯誤，請稍後在試！"
                            reject(result);
                            return;
                        }
                    })
                })
            })
        })
        db.query('delete from `order` where id = ?', parseInt(data.order_id), function (err, rows) {
            // 若資料庫部分出現問題，則回傳「伺服器錯誤，請稍後再試！」的結果。
            if (err) {
                console.log(err);
                result.status = "操作失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            resolve(rows);
        })
    })
}

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