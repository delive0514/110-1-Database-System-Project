var express = require('express');
var router = express.Router();

const GetMethod = require('../controllers/get_controller');
const MemberModifyMethod = require('../controllers/modify_controller');

getMethod = new GetMethod();
memberModifyMethod = new MemberModifyMethod();

router.get('/api/product', getMethod.getAllProduct);

router.post('/api/productCategory/', getMethod.getSomeProduct);

router.get('/api/shoppingcart', getMethod.getShoppingcart);
router.put('/api/user/update_shopping_cart', memberModifyMethod.postModifyProduct);

router.post('/api/user/shopping_cart', memberModifyMethod.postShoppingProduct);

router.post('/api/productInfo', getMethod.getOneProduct);
router.post('/api/addProduct', memberModifyMethod.postAddProduct);
module.exports = router;