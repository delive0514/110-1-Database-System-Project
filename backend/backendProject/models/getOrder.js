const db = require('./connection_db');

module.exports = function getOrder(memberData) {
    let result = {};
    var order = [];
    return new Promise((resolve, reject) => {

        // 找尋
        db.query('SELECT * FROM `order` WHERE member_id = ?', [memberData.id], function (err, rows) {
            if (err) {
                result.status = "尋找失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            resolve(rows);
        });
    });
}

