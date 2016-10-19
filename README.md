### MovieApp server REST-ful application

MovieApp by server side requires Node.js and MongoDB as a database to run.
It is the first part of full MEAN API Application.

Install the dependencies and start the server.

```sh
$ npm install
```

After installation, database has to be started.
MongoDB you can find [here](https://www.mongodb.com/download-center#community).

```sh
$ sudo mongod
```

When applicaiton will be connected with database, server has to be started.
```sh
$ node bin/www.js 
```

Application will be available at
```sh
http://localhost:8000/
```
### Workflow example

The best way of checking if connection is established is to use [Postman](https://www.getpostman.com/) App to check the current workflow.
In the Postman App, paste: 

```sh
http://localhost:8000/api/movies
```

within the GET request method, to check which movies are available in the database.

You can send other requests such as : POST, PUT, DELETE to perform other actions.
