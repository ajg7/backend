# pintereach_backend

Deployment url: "https://pintereach-backend-ajg.herokuapp.com/"

## Authorization

### POST /users/signup

This creates a new user in the database, and returns both the *user object* and *user id*

Table:

| Name     | Requried | Type   | Unique?   | Description                  |
|----------|----------|--------|-----------|------------------------------|
| username |   yes    | string |     yes   | the username of the user     |
| password |   yes    | string |     no    | the password of the user     |

### POST /users/login

This creates a *token* and returns it if login was successful

| Name     | Requried | Type   | Unique?   | Description                  |
|----------|----------|--------|-----------|------------------------------|
| username |   yes    | string |     yes   | the username of the user     |
| password |   yes    | string |     no    | the password of the user     |

## Articles

### GET /articles

Returns a list of all articles

Article Object:

| Name     | Type    | Description                                      |
| Id       | Integer | Autoincremented Id                               |
| Title    | String  | Name of the article                              |
| Author   | String  | Author of the article                            |
| Summary  | String  | Short summary of the article in Lorem Ipsum      |
| Image    | String  | Link to Randomly Generated Image on Lorem Picsum |
| Category | String  | Category name of the article                     |
| Rank     | Integer | Ranking between 1-5, 1 being the lowest          |

### GET /articles/:id

Returns the *article with corresponding id*

| Name      | Requried | Type          | Unique?   | Description           |
| articleId |    yes   | URL Parameter |   yes     | The Id of the article |

### PUT /articles/:id

Returns the *id* and *changes*

All keys in article object except id can be changed

## Saved Articles

These endpoints require you to be logged in

### GET /

Returns the Article Ids and the Id of the User, who saved it

Saved Articles Object:

| Name       | Type    | Description                                      |
| Id         | Integer | Autoincremented Id                               |
| user_id    | Integer | Id of the specific user who liked the article    |
| article_id | Integer | Id of the article that was liked                 |

### Get /:id

Returns Saved Article with the corresponding id

| Name      | Requried | Type          | Unique?   | Description                 |
| id        |    yes   | URL Parameter |   yes     | The Id of the saved article |

### POST /:articleId

Returns object with the *current user's id (user_id)* and *article_id*

| Name             | Requried | Type          | Unique?   | Description                                 |
| articleId        |    yes   | URL Parameter |   yes     | The id of the article that you want to save |

### DELETE /:id

Returns the id of the deleted saved article

| Name      | Requried | Type          | Unique?   | Description                                         |
| id        |    yes   | URL Parameter |   yes     | The Id of the saved article that you want to delete |
