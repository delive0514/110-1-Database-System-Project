var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    console.log(req.body.test)
    res.send(req.body.test);
});

const GetMethod = require('../controllers/get_controller');
const MemberModifyMethod = require('../controllers/modify_controller');

getMethod = new GetMethod();
memberModifyMethod = new MemberModifyMethod();

router.post('/api/user/userRegister', memberModifyMethod.postRegister);

router.post('/api/user/login', memberModifyMethod.postLogin);

router.put('/api/user/update', memberModifyMethod.postUpdate);

router.get('/api/user/memberData', getMethod.getMemberData);



module.exports = router;