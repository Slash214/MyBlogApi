const { timeModeFormat, ago } = require("./dt");

const formatBlog = (result) => {
  let list = result.rows.map((row) => row.dataValues);
  if (list == null) {
    return list;
  }

  if (list instanceof Array) {
    return list.map(_formatDBTime);
  }
};

/**
 * 格式化数据的时间
 * @param {Object} obj 数据
 */
function _formatDBTime(obj) {
  obj.createdAt = timeModeFormat(obj.createdAt, "yyyy-MM-dd HH:mm:ss");
  obj.updatedAt = timeModeFormat(obj.updatedAt, "yyyy-MM-dd HH:mm:ss");
  obj.shortTime = timeModeFormat(obj.createdAt, "yyyy.MM.dd");
  obj.ago = ago(timeModeFormat(obj.updatedAt, "yyyy-MM-dd HH:mm:ss"));
  return obj;
}


const formatBlogDetails = (row) => {
  const list = row.dataValues
  if (list == null) {
    return [];
  }
  return _formatDBTime(list);
}

module.exports = {
  formatBlog,
  formatBlogDetails
};
