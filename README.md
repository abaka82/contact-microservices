 Able to store, list, and edit Contacts in my new app. A contact looks like this:

```js
[
	{
    "id": "1",
    "firstName": "Bilbo",
    "lastName": "Baggins",
    "age": 111,
    "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    "other": {}
	}
]
```

  Based on [hapijs](https://hapijs.com/).

## Features

- A detailed `README.md` file
- Documentation with Swagger
- Functional HTTP Tests (with [lab](https://github.com/hapijs/lab))
- Code quality with eslint and ES6 (with [lab](https://github.com/hapijs/lab))
- Error handling
- Promises
- Modules
- Simplicity
- REST

Added:
- Object schema validation (with [Joi](https://github.com/hapijs/joi))
- Utility that will monitor for any changes in your source and automatically restart your server. Perfect for development (with [nodemon](https://nodemon.io/))

## Installation

```bash
$ npm install
```

## Run app

In development mode, run your app with nodemon for autowatch files changes:

```bash
$ npm run dev
```
or

Run your app with:

```bash
$ npm start
```
You can see your API in action by opening: `http://localhost:8080/contact`.

## Code Quality

Make sure you lint your code! We use [eslint](http://eslint.org/), you can run the linter with:

```bash
npm run lint
```

## Documentation

You can view your API documention by following this link:
 `http://localhost:8080/documentation`.


## Test

Note that npm test will execute lab with the -t 100 option which will require 100% code coverage. Check the coverage.html file to figure out where coverage is lacking. When coverage is below the threshold, the CLI will exit with code 1 and will result in an npm Error message.

Run your tests with

```bash
$ npm test
```
