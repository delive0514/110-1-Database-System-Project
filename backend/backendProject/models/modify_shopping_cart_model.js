const db = require('./connection_db');

module.exports = function customerEdit(UpdateData) {

    let result = {};
    return new Promise((resolve, reject) => {
        // 找尋
        db.query('SELECT * FROM shopping_cart WHERE member_id = ? AND product_id = ?', [UpdateData.member_id, UpdateData.product_id], function (err, rows) {
            if (err) {
                result.status = "尋找失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            let result = {};
            Data = {
                member_id: parseInt(UpdateData.member_id),
                product_id: parseInt(UpdateData.product_id),
                quantity: parseInt(rows[0].quantity) + parseInt(UpdateData.quantity)
            }
            db.query('UPDATE shopping_cart SET ? where member_id = ? AND product_id = ?', [Data, Data.member_id, Data.product_id], function (err, rows) {
                if (err) {
                    console.log(err);
                    result.status = "購物車資料更新失敗。"
                    result.err = "伺服器錯誤，請稍後在試！"
                    reject(result);
                    return;
                }
                result.status = "購物車資料更新成功。"
                result.UpdateData = Data;
                resolve(result)
            })
        });
    });

}