const db = require('./connection_db');

module.exports = function customerEdit(memberUpdateData, id) {
    let result = {};
    return new Promise((resolve, reject) => {
        getOldPassword(id).then(oldPassword => {
            if (memberUpdateData.oldPassword === oldPassword) {
                db.query('UPDATE member set password = ? where id = ?', [memberUpdateData.password, id], function (err, rows) {
                    if (err) {
                        console.log(err);
                        result.status = "更新失敗。"
                        result.err = "伺服器錯誤，請稍後在試！"
                        reject(result);
                        return;
                    }
                    else {
                        result.status = "會員資料更新成功。"
                        result.memberUpdateData = memberUpdateData
                        resolve(result)
                    }
                })
            }
            else {
                result.status = "更新失敗。"
                result.err = "舊密碼輸入錯誤。"
                reject(result);
                return;
            }
        })
    })
}

// 取得舊密碼
const getOldPassword = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT password FROM `member` where id = ?', id, function (err, rows, fields) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            if (!rows)
                resolve(0);
            resolve(rows[0].password);
        })
    })
}