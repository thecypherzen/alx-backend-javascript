# Overview #

## Background Context ##
ES6 promises can be confusing...but getting my hands dirty on this one, life has definitely become easier.

## Objectives ##
The objectives of this project is to understand:
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function


## Resources For References  ##
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)


## Folder Details ###
- **Date Created:** Wed 2 Oct. 2024**
- **Author:** [William Inyam](https.//github.com/thecypherzen).
- **Project Timeline:**
  - **Released:** Wed 2 Oct. 2024 - 6am.
  - **1st Deadline:** Fri 4 Oct. 2024 - 6am.
  - **Duration:** 48hrs.<br/>


## Setup and Installations ##
### Install NodeJS ###

``` bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

``` sh
nodejs -v
v20.17.0
$ npm -v
10.8.2
```

### Jest, Babel, and ESLint ###

``` sh
$ npm install --save-dev jest
$ npm install --save-dev babel
$ npm install --save-dev eslint
```

### Installing Dependencies ###

``` sh
$ npm install  #in the project root directory - where the package.json lives
```


## Note: Response Data Format ##
`uploadPhoto` returns a response with the format

``` bash
{
  status: 200,
  body: 'photo-profile-1',
}

```
`createUser` returns a response with the format
``` bash
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```



## Files ###
- *Here is a detailed list of all files in the repo and their description*.

| SN | File                         | Description                                         |
|----|------------------------------|-----------------------------------------------------|
| 1. | [0-promise.js]() | A simple function returning a promise. |

