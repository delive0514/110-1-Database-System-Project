const db = require('./connection_db');

module.exports = function toImport(Data) {
    let result = {};
    return new Promise((resolve, reject) => {
        // 將資料寫入資料庫
        db.query('INSERT INTO product SET ?', Data, function (err, rows) {
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
    })
}