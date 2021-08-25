# jwt-authentication

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#working">Working</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project
[![Sample Webpage Picture](/samplePic.png)


API for login and registration page using JWT authentication. A Simplistic Single Page Application with login and registration page is being served. The "Get User Details" button present in the app calls the private route which requires the user to be logged in. The source code for the react app has not been included in this repo since this focuses on the JWT Authentication done in the backend.


### Built With

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- MySQL

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Dwabzy/jwt-authentication.git
   ```
2. Change working directory to the clone

   ```sh
   cd jwt-authentication
   ```

3. Install NPM packages
   ```sh
   npm install
   ```

## Usage

After Installing the required packages. Do the following steps

1. Create a database in mysql.
2. Add database credentials in ./configs/db.config.js.
3. Change the secrets used to generate refresh token and access token in ./configs/token.config.js
4. In the root directory, run the app using.

```sh
npm start
```

or
```sh
node app.js
```
5. The app should open up in localhost in the specified port, default is 3000


## Working
  The authentication flow is given in the authFlow.txt file present in the root directory.


## Contact

Pragadeesh J S - jspragadeesh@gmail.com

Project Link: [https://github.com/Dwabzy/jwt-authentication](https://github.com/Dwabzy/jwt-authentication)

