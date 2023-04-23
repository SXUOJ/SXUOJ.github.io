---
lang: zh-CN
title: 快速上手
description: 使用说明
---

## Getting-start

## Judger

请提前安装 `Docker`、`Docker-compose` 。

### 安装&&启动

```bash
git clone https://github.com/isther/judger.git /tmp/judger
mkdir ./sxu-judger
cp /tmp/judger/docker-compose.yml .
docker-compose up -d
```

默认 9000 端口，如有需要，在`docker-compose.yml`中修改。

- `log`: 日志文件夹
- `code`: 代码文件夹
- `sample`: 样例文件夹

### Api

#### `/ping`

##### 接口说明

**服务器及判题机健康状态**

- 请求类型: `HTTP`
- 请求地址: `/ping`
- 请求方式: `GET`
- Content-Type: `multipart/form-data`

**返回结果:**

```json
{
  "message": "pong"
}
```

#### `/submit`

- 请求类型: `HTTP`
- 请求地址: `/submit`
- 请求方式: `POST`
- Content-Type: `application/json`
- 响应类型: `JSON`

**请求参数**
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
submit_id | SXU001 | String | 是 | 提交 ID
problem_id | SXU001 | String | 是 | 题目 ID
problem_type | 1 | String | 是 | 题目类型
code_type | C | String | 是 | 代码类型
code_source_name | SubmitID1.c | String | 是 | 源代码路径
time_limit | 1000 | String | 是 | 时间限制
memory_limit | 268435456 | String | 是 | 内存限制

Json 请求实例：

```json
{
  "submit_id": "SXU001",
  "problem_id": "TEST001",
  "problem_type": "1",
  "code_type": "C",
  "code_source_name": "SubmitID1.c",
  "time_limit": "1000",
  "memory_limit": "268435456"
}
```

**返回数据**
|参数名称|类型|描述|
|:--|:--:|:--:|
|result|数组|运行结果|
|- sample_id|String|样例 ID|
|- status|String|此样例运行结果|
|- cpu_time|String|此样例运行 Cpu 消耗时间|
|- real_time|String|此样例运行实际消耗时间|
|- memory|String|此样例运行消耗内存|
|- signal|String|运行结束信号|

返回数据实例:

```json
{
  "result": [
    {
      "sample_id": "1",
      "status": "Accepted",
      "cpu_time": "0",
      "real_time": "0",
      "memory": "1372160",
      "signal": "0"
    },
    {
      "sample_id": "2",
      "status": "Wrong Answer",
      "cpu_time": "1",
      "real_time": "2",
      "memory": "1376256",
      "signal": "0"
    }
  ]
}
```
