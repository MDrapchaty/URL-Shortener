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

(express, body-parser)

## **Run Node**

Traverse to URL-Shortener in your CLI and run the following:

```node src/server.js```

Your CLI should give you the message indicating you are connected:

```works on 3000.```

## **Starting Point** ##
 
```localhost:3000```

## **Endpoints** ##

Use each method by Entering these URL endpoints in your search bar:

Method | Endpoint | Instructions | Result
------ | -------- | -------------| ------
POST | /api/v1/urls | POST at this endpoint to send JSON object containing your Url you wish to shorten ex. {"Url": "http://apple.com"} | Generates shortened url ex. {"Url": "http://apple.com", "shortUrl": "Dee8s"}
GET | /api/v1/urls | Displays all urls in database | Displays all urls in database ex. {"id":2,"Url":"http://google.com","shortUrl":"DPYZk","createdAt":"2017-03-04T04:29:22.000Z","updatedAt":"2017-03-04T06:50:56.000Z"}
GET | /api/v1/urls/:id | Enter the id of the url you wish to retreive in the `:id` parameter | ex. http://localhost:3000/api/v1/urls/3 will retrieve {"id":3,"Url":"http://bannanas.com","shortUrl":"rOoPx","createdAt":"2017-03-04T05:54:09.000Z","updatedAt":"2017-03-04T06:48:18.000Z"}

