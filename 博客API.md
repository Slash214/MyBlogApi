---
title: 博客 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.11"

---

# 博客

> v1.0.0

# Default

## POST 博客管理员登陆

POST /blog/login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "data": {
    "id": 7,
    "username": "爱呵呵",
    "avatar": "",
    "nickname": "大羊",
    "level": "max",
    "name": "SuperAdmin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiLniLHlkbXlkbUiLCJhdmF0YXIiOiIiLCJuaWNrbmFtZSI6IuWkp-e-iiIsImxldmVsIjoibWF4IiwibmFtZSI6IlN1cGVyQWRtaW4iLCJpYXQiOjE2NTczNTQ5NjYsImV4cCI6MTY1Nzk1OTc2Nn0.niehKlDslV-_yYrzIuGyeYeTOZtTZbiAwVSFNTqXFd0"
  },
  "message": "登陆成功",
  "code": 200
}
```

```json
{
  "message": "账号密码不正确",
  "code": 5003
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 博客列表

## GET 获取博客列表

GET /blog/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageSize|query|string| 否 |一页数量|
|pageIndex|query|string| 否 |页数|
|tag|query|string| 否 |标签名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 删除博客内容

GET /blog/del

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|integer| 是 |文章id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 更新博客内容同时更新详情

PUT /blog/fix

> Body 请求参数

```json
{
  "id": 0,
  "title": "string",
  "desc": "string",
  "author": "string",
  "look": 0,
  "cover": "string",
  "tag": "string",
  "content": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |文章id|
|» title|body|string| 否 |标题|
|» desc|body|string| 否 |文章描述|
|» author|body|string| 否 |作者|
|» look|body|integer| 否 |浏览量|
|» cover|body|string| 否 |封面|
|» tag|body|string| 否 |标签|
|» content|body|string| 是 |博客md内容|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 新建博客内容

POST /blog/add

> Body 请求参数

```json
{
  "title": "string",
  "content": "string",
  "tag": "string",
  "cover": "string",
  "desc": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» title|body|string| 是 |none|
|» content|body|string| 是 |none|
|» tag|body|string| 是 |none|
|» cover|body|string| 是 |none|
|» desc|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "data": [],
  "state": 1,
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 增加博客评论

POST /blog/addremake

> Body 请求参数

```json
{
  "content": "string",
  "nickname": "string",
  "avatar": "string",
  "blogid": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» content|body|string| 是 |评论内容|
|» nickname|body|string| 否 |昵称|
|» avatar|body|string| 否 |头像|
|» blogid|body|integer| 是 |博客id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取当前博客评论

GET /blog/comment

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|blogid|query|integer| 否 |博客文章id|

> 返回示例

> 成功

```json
{
  "data": [],
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 博客详情

## GET 获取博客详情

GET /blog/detail

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|blogid|query|string| 是 |博客文章ID|
|type|query|string| 否 |获取详情的类型，update为更新内容获取|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 文章标签

## POST 增加文章标签

POST /blog/addtag

> Body 请求参数

```json
{
  "name": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» name|body|string| 是 |标签名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取所有标签

GET /blog/tag

> 返回示例

> 成功

```json
{
  "state": 1,
  "data": [
    {
      "id": 1,
      "name": "JavaScript",
      "createdAt": "2021-12-30 11:27:07",
      "updatedAt": "2021-12-30 11:55:23",
      "shortTime": "2021.12.30",
      "ago": "1周前"
    }
  ],
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 删除标签

GET /blog/tagdel

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |标签id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 修改标签

PUT /blog/xgtag

> Body 请求参数

```json
{
  "id": 0,
  "name": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |标签id|
|» name|body|string| 是 |标签名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 图片

## GET 获取随机头像

GET /random/avatar

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|size|query|number| 否 |图片的尺寸大小默认150|

> 返回示例

> 成功

```json
{
  "data": {
    "name": "1657249852465.png",
    "md5": "a7ae3267783bd5545dfab8b8e82e432a",
    "id": "3314499704",
    "size": 70
  },
  "code": 200
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取图片

GET /imglist

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取随机昵称

GET /random/nickname

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

