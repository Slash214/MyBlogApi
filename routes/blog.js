const router = require('koa-router')()
const { getList, create, update, del } = require('../controller/blog')

router.prefix('/blog')

router.get('/list', getList)
router.post('/add', create)
router.put('/modify', update)
router.get('/del', del)



module.exports = router;