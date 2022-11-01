/**
 * @descrion 博客路由
 * @author 爱呵呵
 */
const router = require('koa-router')()
const {
  getList,
  addblog,
  fixblog,
  del,
  delComment,
  getDetails,
  addRemake,
  selComment,
  login,
  search,
} = require('../controller/blog')
const { createTag, selectTag, fix, remove } = require('../controller/Tag')

router.prefix('/blog')

/** 模拟登陆 */
router.post('/login', login)

/** 博客列表 */
router.get('/list', getList)
router.post('/add', addblog)
router.put('/fix', fixblog)
router.get('/del', del)
router.get('/search', search)

/**博客详情 */
router.get('/detail', getDetails)

/**博客标签 */
router.get('/tag', selectTag)
router.post('/addtag', createTag)
router.put('/xgtag', fix)
router.get('/tagdel', remove)

/**文章评论 */
router.get('/comment', selComment)
router.post('/addremake', addRemake)
router.get('/delcomment', delComment)

module.exports = router
