# Buck Boost FC


## Usage

### List all team members

`GET /team`

**Response**

- `200 OK` on success

```json
[
    {
        "id": 1,
        "name": "Ina",
        "surname": "Busakwe",
        "position": "Right Mid",
        "age": 31,
        "dateCreated": "2019-06-19T13:55:05.000Z"
    },
    {
        "id": 2,
        "name": "Dok",
        "surname": "Kakaza",
        "position": "Centre Mid",
        "age": 30,
        "dateCreated": "2019-06-19T13:55:50.000Z"
    }
]
```

`GET /team/<name>`

**Response**

- `200 OK` on success

```json
[
    {
        "id": 1,
        "name": "Ina",
        "surname": "Busakwe",
        "position": "Right Mid",
        "age": 31,
        "dateCreated": "2019-06-19T13:55:05.000Z"
    }
]
```


### Add a new team member

`POST /team`

**Arguments**

- name: 'Tom', string
- surname: 'Brady', string
- position: 'Quarter', string
 -age: 38, int


**Response**

- `200 Created successfully!` on success



### Delete a player
`DELETE /team/<name>`

**Response**

- `404 Not Found` if the member does not exist
- `200 Deleted successfully!` on success