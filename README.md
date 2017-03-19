# **URL-Shortener**

This documentation will help you use the url shortener application, created with nodejs and express by Matt Drapchaty.

## **What does it do?**

URL-Shortener will allow you to take a long url and shorten it into a smaller 5 digit url

## **Getting Started**

* To get started download or clone URL-Shortener
* Install [nodejs](https://nodejs.org/en/)
* Get [npm](https://www.npmjs.com/package/npm) to install your dependencies, In your CLI run the following command to install npm:
	* ``` curl -L https://www.npmjs.com/install.sh | sh  ```

## URL-Shortener Dependencies

``` npm install ```

(express, body-parser, mysql, sequelize, chai, mocha, supertest, drapdebug)

## **Run Node**

Traverse to URL-Shortener in your CLI and run the following:

```node server.js```

Your CLI should give you the message indicating you are connected:

```works on 3000.```

## **MySQL**

Install a MySQL Database.


## **Environmental Variables**

```
DB_NAME="your database name"
DB_HOST="your host"
DB_PORT="your port"
DB_SCHEMA=mysql
DB_USER="your username"
DB_PASS="your password"
```
## **Debug Tool**

If you would to use the debug tool to create detailed logs for all your API's and database connection settings install and see documentation for [drapdebug](https://github.com/MDrapchaty/drapdebug) 


## **Unit Testing** ##

Please make sure you have installed [mocha](https://www.npmjs.com/package/mocha) and [chai](https://www.npmjs.com/package/chai) using npm.

In order to use the built in unit testing, simply run `mocha` in your CLI.

This will run a test for your database connection and every route and give a detailed report in your CLI.


## **Starting Point**

``` localhost:3000 ```


## **Endpoints**

Use each method by Entering these URL endpoints in your search bar:

Method | Endpoint | Instructions | Result
------ | -------- | -------------| ------
POST | /api/v1/urls | POST at this endpoint to send JSON object containing your Url you wish to shorten ex. {"Url": "http://apple.com"} | {"Url": "http://apple.com", "shortUrl": "Dee8s"}
GET | /api/v1/urls | Displays all urls in database |  {"id":2,"Url":"http://google.com", "shortUrl":"DPYZk", "createdAt":"2017-03-04T04:29:22.000Z", "updatedAt":"2017-03-04T06:50:56.000Z"}
GET | /api/v1/urls/:id | Enter the id of the url you wish to retreive in the `:id` parameter | http://localhost:3000/api/v1/urls/3 will retrieve {"id":3,"Url":"http://bannanas.com", "shortUrl":"rOoPx", "createdAt":"2017-03-04T05:54:09.000Z", "updatedAt":"2017-03-04T06:48:18.000Z"}
POST | /api/vi/urls/:id | POST at this endpoint by entering the id of the url you wish to update in the 1:id1 parameter | Any info changed will result in a permanent change to the data in the database
DELETE | /api/v1/urls/:id | DELETE a url by entering the id of the url you wish to remove in the `:id` paramter. | The selected url will be deleted
GET | /go/:shortURL | You will be redirected to your original url by entering the short url in the `:shortURL` paramter | http://localhost:3000/go/DPYZk will redirect you to http://google.com

## **Code Styling**

The code in this file is all styled using eslint-config-airbnb, if you wish to add to the code and keep it styled inthe same way you can install it locally on your machine and find the documentation for it here [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)


# Workflow

## Feature Branches
When adding s apecific features to this application, it is recommended to use a feature branch workflow. To do this:
* `git checkout master` - Make sure you are currently on the master branch.
* `git pull` - Pull from Github
* `git branch <feature-name>` - Create a new feature branch with the feature name of your choice.
* `git checkout <feature-name>` - Switch to the feauture branch you just made.
* Make your changes to code.
* Commit and push any from your `<feature-name>` branch in your CLI .
* Create a pull request for your feature into the master branch.

##Versioning
When making changes to the application, [semantic versioning](http://semver.org/) should be used, you can find the documentation for semantic versioning [here](http://semver.org/).


## Deployment Process

### Staging

By Pushing to the `release` branch you can deploy your code changes directly to the drap-url-shortener-staging app on [heroku](https://www.heroku.com/).

Codeship CI will automatically run the automated tests, and if all tests are passing will implement the code directly to the staging application. 

##Production

If the code runs as it should in staging app, it will be passed through the drap-url-shortener pipeline on heroku to the production app.

