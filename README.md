#Lambda Randomizer

Deployed at: https://lambda-labs-frontend.herokuapp.com/

# Endpoints

## POST -- `/api/register` -- POST

Registers a new user.

| Field        | Input                                                     | Required |
| ------------ | --------------------------------------------------------- | -------- |
| username     | String, 30 chars max                                      | Yes      |
| password     | String 6+ characters                                      | Yes      |
| confirm      | String matching password                                  | Yes      |


#GET -- `/api/login` -- GET

Authorization through JWT. Checks to see if user is valid or already authorized.

# POST -- `/api/login/` -- POST

| Property | Type   | Required |
| -------- | ------ | -------- |
| username | String | Yes      |
| password | String | Yes      |


