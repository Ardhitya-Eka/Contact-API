# user API Spec

## Register User API

endpoint : POST /api/users

Request Body :
```json
{
    "username" : "moyu",
    "password" : "rahasia",
    "name" : "Ardhitya Eka"
}
```

Response Body Success :
```json
{
    "data" : {
        "username" : "moyu",
        "name" : "Ardhitya Eka"
    }
}
```

Response Body Error :
```json
{
    "errors" : "Username already registred"
}
```
## login User API 

Endpoint : POST /api/users/login

Request Body : 

```json
{
   "username" : "moyu",
   "password" : "rahasia"
}
```

Respons Body Success :

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :

```json
{
    "error" : "username or password wrong"
}
```

## Update User Api
Endpoint : PATCH /api/users/current

Headers : 
- Authorization : token

Request Body : 

```json
{
    "name" : "Ardhitya Eka", //optional
    "password" : "new password" //optonal
}
```

Response Body Success :

```json
{
    "data" : {
        "username" : "new username",
        "name" : "new name"
    }
}
```

Response Body Error : 

```json
{
    "error" : "name length max 100"
}
```

## GET User API 
Endpoint : GET /api/users/current

Headers : 
- Authorization : token

Response Body Succces : 

```json
{
    "data" : {
        "username" : "moyu",
        "name" : "Ardhitya Eka"
    }
}
```

Response Body Error : 

```json
{
    "error" : "Unauthorized"
}
```
## Logout User API

Endpoint DELETE /api/users/logout

Headers : 
- Authorization : token

Response Body Success : 

```json
{
    "data" : "ok"
}
```

Response Body Error :

```json
{
    "error" : "unauthorized"
}
```