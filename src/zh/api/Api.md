---
title: Online Judge Api

---

# 山西大学Online Judge 前后端交互接口

> v1.0.0

Base URLs:

# 用户

## POST 用户注册

POST /api/user/register

> Body 请求参数

```json
{
  "user_id": "string",
  "username": "string",
  "password": "string",
  "usergroup": "string",
  "truename": "string",
  "email": "string",
  "school": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» user_id|body|string| 是 ||none|
|» username|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 密码|none|
|» usergroup|body|string| 是 | 用户组|none|
|» truename|body|string| 是 | 姓名|none|
|» email|body|string| 是 | 邮箱|none|
|» school|body|string| 是 | 学校|none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "ok",
  "token": "nil"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 登陆

POST /api/user/login

Header 返回 token

> Body 请求参数

```json
{
  "user_id": "string",
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» user_id|body|string| 是 ||none|
|» username|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 密码|none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "ok",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODBkMTMzNzQtOTFkNi00YTNhLWE0NjYtZGJiODA5MzIyZTI3IiwidXNlcm5hbWUiOiJqaWFvIiwiZXhwIjoxNjg4MjA2NDQyLCJpc3MiOiJvaiJ9.vWERH73Wc9bDmv3J--LxBp4hBLxllf1boIJykB5K7xs"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 改密码

PUT /api/user/put_user_info

> Body 请求参数

```json
{
  "new_password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» new_password|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 提交题目

POST /api/question/submit

> Body 请求参数

```json
{
  "time": "string",
  "submit_id": "string",
  "question_id": "string",
  "user_id": "string",
  "status": "string",
  "source": "string",
  "public": 0,
  "code_type": "string",
  "if_ac": "string",
  "time_limit": 0,
  "memory_limit": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» time|body|string| 是 ||提交时间|
|» submit_id|body|string| 是 ||none|
|» question_id|body|string| 是 ||题目id|
|» user_id|body|string| 是 ||none|
|» status|body|string| 是 ||none|
|» source|body|string| 是 ||源码|
|» public|body|integer| 是 ||是否公开|
|» code_type|body|string| 是 ||代码类型|
|» if_ac|body|string| 是 ||是否ac|
|» time_limit|body|integer| 是 ||时间限制|
|» memory_limit|body|integer| 是 ||空间限制|

> 返回示例

> 成功

```json
{
  "code": 200,
  "result": {
    "submit_id": "3fffb2c1-05e4-4a43-badd-b2968030b0be",
    "user_id": "80d13374-91d6-4a3a-a466-dbb809322e27",
    "question_id": "12306",
    "time": "2023-02-01 17:53:09.539806 +0800 CST m=+106.497744201",
    "if_ac": false,
    "results": [
      {
        "status": 0,
        "memory": "3.2773438",
        "real_time": "1",
        "cpu_time": "1.277",
        "error_msg": ""
      },
      {
        "status": 0,
        "memory": "3.3671875",
        "real_time": "1",
        "cpu_time": "0.969",
        "error_msg": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查看提交具体结果

GET /api/status/get_status_by_submit_id/{submitid}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|submitid|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "result": {
    "submit_id": "59a1b85c-5eec-4b2b-a68e-445cd1bf574d",
    "user_id": "80d13374-91d6-4a3a-a466-dbb809322e27",
    "question_id": "12306",
    "time": "2023-02-01 17:53:09.539806 +0800 CST m=+106.497744201",
    "if_ac": true,
    "code_type": 2,
    "source": "#include<iostream>\r\nusing namespace std;int main(){cout << \"hello\" << endl;}",
    "public": 0,
    "results": [
      {
        "status": 0,
        "memory": "3.2773438",
        "real_time": "1",
        "cpu_time": "1.277",
        "error_msg": ""
      },
      {
        "status": 0,
        "memory": "3.3671875",
        "real_time": "1",
        "cpu_time": "0.969",
        "error_msg": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取用户问题结果列表

GET /api/status/get_list_by_question_id/{questionid}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|questionid|path|string| 是 ||none|
|page|query|string| 否 ||none|
|amount|query|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "result_list": [
    {
      "submit_id": "59a1b85c-5eec-4b2b-a68e-445cd1bf574d",
      "user_id": "80d13374-91d6-4a3a-a466-dbb809322e27",
      "question_id": "12306",
      "time": "2023-02-01 17:53:09.539806 +0800 CST m=+106.497744201",
      "if_ac": true,
      "code_type": 2,
      "source": "#include<iostream>\r\nusing namespace std;int main(){cout << \"hello\" << endl;}",
      "public": 0,
      "results": "[{\"status\":0,\"memory\":\"3.2773438\",\"real_time\":\"1\",\"cpu_time\":\"1.277\",\"error_msg\":\"\"},{\"status\":0,\"memory\":\"3.3671875\",\"real_time\":\"1\",\"cpu_time\":\"0.969\",\"error_msg\":\"\"}]"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» submit_id|string|true|none||none|
|» status|string|true|none||none|
|» time|string|true|none||none|

## GET 获取用户信息

GET /api/user/get_user_info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "info": {
    "user_id": "80d13374-91d6-4a3a-a466-dbb809322e27",
    "username": "jiao",
    "password": "313233e5fe3dccc42cd16608c47df01ca13b50",
    "usergroup": "",
    "truename": ""
  },
  "msg": "ok"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 题库

## GET 获取列表

GET /api/question/get_list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|amount|query|string| 否 ||none|
|page|query|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 成功

```json
{
  "code": 202,
  "msg": "ok",
  "question_list": [
    {
      "title": "记论她容消给",
      "if_ac": "",
      "info": {
        "creator": "velit non proident ut",
        "level": "anim in mollit",
        "question_id": "3e6102bc-3ce2-4ea1-b9aa-541b11138c49",
        "tags": "magna"
      }
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» title|string|true|none|标题|none|
|» information|object|true|none||none|
|»» question_id|string|true|none|问题ID|none|
|»» creator|string|true|none|创建者|none|
|»» level|string|true|none|等级|none|
|»» tags|string|true|none|标签|none|
|» status|string|true|none||none|

## GET 获取题目

GET /api/question/get/aabee085-cd1d-4d97-ae05-95878786415f

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|

> 返回示例

> 成功

```json
{
  "code": 202,
  "msg": "ok",
  "question_info": {
    "context": {
      "description": "在天集全劳各论组世今亲名集增需金路。应那马起很命力研提严又部龙候照采。几型能报资离打叫提社采料各取许整数果。",
      "img_path": "",
      "input": "non est dolore magna sunt",
      "input_sample": [
        "dolor amet consequat elit"
      ],
      "output": "reprehenderit",
      "output_sample": [
        "exercitation",
        "in",
        "consectetur",
        "mollit",
        "aliqua mollit magna proident cupidatat"
      ],
      "source": "pariatur cupidatat nulla dolor"
    },
    "information": {
      "creator": "velit non proident ut",
      "level": "anim in mollit",
      "question_id": "3e6102bc-3ce2-4ea1-b9aa-541b11138c49",
      "tags": "magna"
    },
    "limit": {
      "mem_limit": "dolor veniam do proident adipisicing",
      "time_limit": "1999-04-16 15:31:15"
    },
    "title": "记论她容消给"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|[Question](#schemaquestion)|

## POST 添加题目

POST /api/admin/question/create

> Body 请求参数

```json
{
  "title": "string",
  "context": {
    "description": "string",
    "input": "string",
    "output": "string",
    "source": "string",
    "input_sample": [
      "string"
    ],
    "output_sample": [
      "string"
    ]
  },
  "information": {
    "question_id": "string",
    "creator": "string",
    "level": "string",
    "tags": "string"
  },
  "limit": {
    "time_limit": "string",
    "mem_limit": "string"
  }
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|
|body|body|[Question](#schemaquestion)| 否 | 题目|none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "ok",
  "questionId": "3e6102bc-3ce2-4ea1-b9aa-541b11138c49"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 修改题目

PUT /api/admin/question/change

没有修改的部分前端也要传过来，不然没修改的部分就会成为空数据

> Body 请求参数

```json
{
  "title": "string",
  "context": {
    "description": "string",
    "input": "string",
    "output": "string",
    "source": "string",
    "input_sample": [
      "string"
    ],
    "output_sample": [
      "string"
    ]
  },
  "information": {
    "question_id": "string",
    "creator": "string",
    "level": "string",
    "tags": "string"
  },
  "limit": {
    "time_limit": "string",
    "mem_limit": "string"
  }
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|
|body|body|[Question](#schemaquestion)| 否 | 题目|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 上传样例(zip压缩包）

POST /api/admin/upload/sample/{question_id}

> Body 请求参数

```yaml
samples: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|question_id|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» samples|body|string(binary)| 是 ||none|

> 返回示例

> 成功

```json
"http://127.0.0.1:8081/api/admin/upload/sample/12305"
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除样例

DELETE /api/admin/upload/sample/{question_id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|question_id|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 上传图片

POST /api/admin/upload/image/{name}

> Body 请求参数

```yaml
images: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|name|path|string| 是 ||文件名称用以判断是什么类型图片|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» images|body|string(binary)| 否 ||none|

> 返回示例

> 成功

```json
"http://127.0.0.1/api/admin/upload/image/9199375d-e4a6-46cb-84cd-c4b003a1eb8f.png"
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取样例

GET /api/admin/down/sample/{qid}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|qid|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除题目

DELETE /api/admin/question/delete/{questionid}

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|questionid|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除图片

DELETE /api/admin/upload/image/{imgname}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|imgname|path|string| 是 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 搜索接口

GET /api/question/search

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||none|
|amount|query|string| 否 ||none|
|keyword|query|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 判题机

## POST 添加判题机

POST /api/admin/judger/create

> Body 请求参数

```json
{
  "name": "string",
  "addr": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 是 ||none|
|» addr|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 获取所有判题机

POST /api/admin/judger/get_list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取判题机状态

GET /api/admin/ping

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

<h2 id="tocS_judger">judger</h2>

<a id="schemajudger"></a>
<a id="schema_judger"></a>
<a id="tocSjudger"></a>
<a id="tocsjudger"></a>

```json
{
  "name": "string",
  "addr": "string"
}

```

判题机

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|true|none||none|
|addr|string|true|none||none|

<h2 id="tocS_result">result</h2>

<a id="schemaresult"></a>
<a id="schema_result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "time": "string",
  "submit_id": "string",
  "question_id": "string",
  "user_id": "string",
  "status": "string",
  "real_time": "string",
  "cpu_time": "string",
  "source": "string",
  "public": 0,
  "code_type": "string",
  "if_ac": "string"
}

```

提交结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|time|string|true|none||提交时间|
|submit_id|string|true|none||none|
|question_id|string|true|none||题目id|
|user_id|string|true|none||none|
|status|string|true|none||none|
|real_time|string|true|none||none|
|cpu_time|string|true|none||none|
|source|string|true|none||源码|
|public|integer|true|none||是否公开|
|code_type|string|true|none||代码类型|
|if_ac|string|true|none||是否ac|

<h2 id="tocS_Question">Question</h2>

<a id="schemaquestion"></a>
<a id="schema_Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "title": "string",
  "context": {
    "description": "string",
    "input": "string",
    "output": "string",
    "source": "string",
    "input_sample": [
      "string"
    ],
    "output_sample": [
      "string"
    ]
  },
  "information": {
    "question_id": "string",
    "creator": "string",
    "level": "string",
    "tags": "string"
  },
  "limit": {
    "time_limit": "string",
    "mem_limit": "string"
  }
}

```

题目

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none|标题|none|
|context|object|true|none||none|
|» description|string|true|none|描述|none|
|» input|string|true|none|输入描述|none|
|» output|string|true|none|输出描述|none|
|» source|string|true|none|来源|none|
|» input_sample|[string]|true|none|输入样例|none|
|» output_sample|[string]|true|none|输出样例|none|
|information|object|true|none||none|
|» question_id|string|true|none|问题ID|none|
|» creator|string|true|none|创建者|none|
|» level|string|true|none|等级|none|
|» tags|string|true|none|标签|none|
|limit|object|true|none||none|
|» time_limit|string|true|none|时间限制|none|
|» mem_limit|string|true|none|内存限制|none|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "user_id": "string",
  "username": "string",
  "password": "string",
  "usergroup": "string",
  "truename": "string",
  "email": "string",
  "school": "string",
  "score": "string"
}

```

用户

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|user_id|string|true|none||none|
|username|string|true|none|用户名|none|
|password|string|true|none|密码|none|
|usergroup|string|true|none|用户组|none|
|truename|string|true|none|姓名|none|
|email|string|true|none|邮箱|none|
|school|string|true|none|学校|none|
|score|string|true|none|分数|none|

