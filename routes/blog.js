const router = require('koa-router')()
const { getList, create, update, del, xqcreate, getDetails, xqupdate } = require('../controller/blog')
const { addTag, getTagList, xgTag } = require('../controller/Tag')

router.prefix('/blog')

/** 博客列表 */
router.get('/list', getList)
router.post('/add', create)
router.put('/modify', update)
router.get('/del', del)

/**博客详情 */
router.get('/detail', getDetails)
router.post('/addDetail', xqcreate)
router.put('/xgDetail', xqupdate)


/**博客标签 */
router.get('/tag', getTagList)
router.post('/addtag', addTag)
router.put('/xgtag', xgTag)

module.exports = router;