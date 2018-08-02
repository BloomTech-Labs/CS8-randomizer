# Lambda Randomizer

Welcome from the Randomizer App Team! Please use the `Navigation Guide` below to begin exploring Randomizer's features!
 

Deployed at: https://lambda-labs-frontend.herokuapp.com/

# Navigation Guide

## Landing Page 
https://lambda-labs-frontend.herokuapp.com/

Signup and Login work as expected.
Click on `About Magic Randomizer` to learn more!

## Class List/ Add Class Page
https://lambda-labs-frontend.herokuapp.com/classes

Classes owned by users will be displayed here.

If no classes are owned, clicking on the `[+]` button link while navigate your to the `Create Class Page`.

## Create Class Page
https://lambda-labs-frontend.herokuapp.com/create

In order to create a class, you need to enter a "Class Name" and `Add` at least one student. An alert will confirm that your new class was added successfully.

To view your classes, click on the hamburger menu (top left on desktop, bottom left for tablet/mobile devices) and navigate to `Classes`. You should see a card for each class that you added.  Clicking on the cards will take you to the `Magic Randomizer Page` for that class.

## Magic Randomizer Page
https://lambda-labs-frontend.herokuapp.com/classes/:id

To navigate to the `Magic Randomizer Page`, you must have created at least one class.  To begin randomizing, simply navigate to your `Classes` via the hamburger menu (top left for desktops, bottom left for tablet/mobile devices), and select the class you wish to begin randomizing.

Currently the `Magic Randomizer Page` will cycle through your student names once until each student has participated once.  Once all students have participated, you will need to click the `Reset 'All Go'` button to begin a new cycle. 

Sorry! The features below are not working yet!

  * `Participated` and `Declined` buttons.
  * `Edit` link to `Class Edit Page`
  * `DATE`
  * `On Deck` feature - shows next randomized student to be called on.
  * `Participation Rate Graph`

## Billing Page
https://lambda-labs-frontend.herokuapp.com/billing

Sorry! We are still working on this! Thank You for your patience!

## Settings Page
https://lambda-labs-frontend.herokuapp.com/setting

Sorry! This page is currently not working!

When functioning, this page will serve as a way to update your `username` and/or `password`.

## Logout

Clicking the `Logout` button (top right corner on desktops) will log you out and take you back to the `Landing Page`.



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


