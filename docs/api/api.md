## model

### User

* username  `unique`
* password
* usergroup
* truename
* email
* school
* score



### question

* title
* context

  * description
  * input
  * output
  * []sample Input
  * source
* information
  
  * id
  * time_limit
  * mem_limit
  * io_mode
  * create_by
  * level
  * tags
* statistic
  * ac
  * wa



### code

* code_id string
* code_q_id string
* code_user_id string
* code_type  string
* code_time  string
* code_source  string



## Api

### user

#### register

`/api/register/`

in:

```json
{
    "username":"",
	"password":""
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
 	"token": ""
}
```

#### login

`/api/login/`

in:

```json
{
    "username":"",
	"password":""
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
 	"token": ""
}
```

####  get_user_info

`/api/user/get_user_info/`

in:

```json
{
    "token":"",
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
 	"info":"{}",
}
```

#### put_user_info

`/api/user/put_user_info/`

in:

```json
{
    "token":"",
    "put_info":""
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " "
}
```

### question

#### get_question_detail

`/api/question/get_question_detail/:id`
通过占位符传递id

in:

```json
{
    "token":"",
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
    "question_info":""
}
```



#### get_question_list

`/api/question/get_question_list/:page/:amount`
通过占位符传递页码和每页显示数量

in:

```json
{
    "token":"",
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
    "question_list":"[]"
}
```



#### push_question_judge

`/api/question/push_question_judge/`

in:

```json
{
    "token":"",
    "code_question_id":"",
    "code_time":"",
	"code_type":"",
    "code_source":"",
}
```

out:

```json
{
    "code": "200",
    "msg":"ok" / " ",
    "result":""
}
```











