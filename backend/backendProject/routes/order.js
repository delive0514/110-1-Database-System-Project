var express = require('express');
var router = express.Router();

const GetMethod = require('../controllers/get_controller');
const MemberModifyMethod = require('../controllers/modify_controller');

getMethod = new GetMethod();
memberModifyMethod = new MemberModifyMethod();

router.get('/api/getOrder', getMethod.getOrderById);

router.post('/api/user/order', memberModifyMethod.postOrder);

router.post('/api/user/deleteOrder', memberModifyMethod.deleteOrder);

module.exports = router;