const router = require('koa-router')()
const { getList, addblog, fixblog, del, getDetails, addRemake, selComment } = require('../controller/blog')
const { createTag, selectTag, fix } = require('../controller/Tag')

router.prefix('/blog')


/** 博客列表 */
router.get('/list', getList)
router.post('/add', addblog)
router.put('/fix', fixblog)
router.get('/del', del)

/**博客详情 */
router.get('/detail', getDetails)


/**博客标签 */
router.get('/tag', selectTag)
router.post('/addtag', createTag)
router.put('/xgtag', fix)

/**文章评论 */
router.get('/comment', selComment)
router.post('/addremake', addRemake)

module.exports = router;