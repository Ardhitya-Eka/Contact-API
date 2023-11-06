# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "ardhit",
  "last_name": "darmawan",
  "email": "ardhiteka@gmail.com",
  "phone": "089765656789"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "ardhit",
    "last_name": "darmawan",
    "email": "ardhiteka@gmail.com",
    "phone": "089765656789"
  }
}
```

Response Body Error :

```json
{
  "error": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "ardhit",
  "last_name": "darmawan",
  "email": "ardhiteka@gmail.com",
  "phone": "089765656789"
}
```

Response Body Succes :

```json
{
  "data": {
    "id": 1,
    "first_name": "ardhit",
    "last_name": "darmawan",
    "email": "ardhiteka@gmail.com",
    "phone": "089765656789"
  }
}
```

Response Body Error :

```json
{
  "error": "Email is not valid format"
}
```

## Get Contact API

Endpoint : POST /api/contacts/:id

Headers :

- Authorization : token

Response Body Succes :

```json
{
  "data": {
    "id": 1,
    "first_name": "ardhit",
    "last_name": "darmawan",
    "email": "ardhiteka@gmail.com",
    "phone": "089765656789"
  }
}
```

Response Body Error :

```json
{
  "error": "contact is not found"
}
```

## search Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Query params :

- name : search by first_name or last_name, optional
- email : search by email using like, optional
- phone : search by phone number using like, optional
- page : number of page, default 1
- size : size of page, default 10

Response Body Succes :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "ardhit",
      "last_name": "darmawan",
      "email": "ardhiteka@gmail.com",
      "phone": "089765656789"
    },
    {
      "id": 2,
      "first_name": "eka",
      "last_name": "darmawan",
      "email": "ekaardhit@gmail.com",
      "phone": "086756378909"
    }
  ],
  "pagging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Response Body Succes :

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "error": "contact not found"
}
```
