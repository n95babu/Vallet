![Vallet logo](https://i.imgur.com/7cE6IH7.png)

# Project Overview:

## Table of Contents
- [Project Description](#project-description)
- [Design](#design)
  - [Sitemap](#sitemap)
  - [Wireframes](#wireframes)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
    - [Database Table Structure](#express-database-structure)
    - [React Structure](#react-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
  - [Supporting Libraries](#supporting-libraries)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)

<br>
<br>


# Overview

## Project Description
Vallet is cryptocurrency profilio tracking app. See your entire profilio on one screen. Set up your profilio in Vallet by manually adding your buy/sell transctions. Vallet also brings all the crypto related news so you can easily stay on top of the market. 

## Design


### ERD Model

![ERD](https://i.imgur.com/YzGOWLo.png)

### Sitemap

### Wireframes

##### Desktop
![Vallet DEK 1](https://i.imgur.com/mcTszs1.png)
![Vallet DEK 2](https://i.imgur.com/0wu5gd4.png)
![Vallet DEK 3](https://i.imgur.com/OTpzM4x.png)

##### Mobile
![Vallet IMG 1](https://i.imgur.com/ZRIteRC.png)
![Vallet IMG 2](https://i.imgur.com/TKaxhPy.png)
![Vallet IMG 3](https://i.imgur.com/o99FNKC.png)
![Vallet IMG 4](https://i.imgur.com/bys7JB2.png)

## Development

### Functional Goals

#### MVP
* Full CRUD on User Coins
* Access User Dashboard, profile , coins, live news
* Update User Info
* Backend API News Fetch 

#### Post-MVP
* Email user when account created
* Email user if the users unable login 
* Upload Picture to profile
* Live crypto discussion form

### Functional Heirarchy

```
Vallet

|___ client
      (Refer to React Structure below.)
      
|___ routes
      |___ UserRouter.js
      |___ CoinRouter.js

|___ auth.js
|___ models.js
|___ resetDb.js
|___ scratch.js
|___ seed.js
|___ server.js

|___ readme.md
```


```
client

|___ public
      |___ favicon.ico
      |___ index.html

|___ src
      |___ assets
            |___ images
            |___ graphics
            
      |___ components
            |___ Header.jsx
            |___ LoginForm.jsx
            |___ RegisterForm.jsx
            |___ Footer.jsx

      |___ pages
            |___ Landing.jsx
            |___ Home.jsx
            |___ User.jsx
            |___ News.jsx

      |___ services
            |___ api-helper.js

      |___ App.css
      |___ App.js
      |___ index.css
      |___ index.js
      |___ logo.svg

|___ readme.md

```

### Supporting Libraries
* Server-Side
	* Better-Error 
	* HTTP Party
	* Rails
	
* Authentication
	* bcrypt
	* jsonwebtoken
	
* Client-Side
	* axios
	* react
	* react-router-dom
	  
## Project Review


<!--clickable: <n95babu@gmail.com>  -->


#### Component Timeframes

The following is a list of optional inline markups supported:

Copmponen	  | Priority  | Estimated Time  | Actual Time|
------------|-----------|-----------------|------------
SignInForm  | High 		 | 4 Hours	      | TBD      |
SignUpForm  |	 High		|	TBD				| TBD         |
LogOut      |	 High		|	TBD				| TBD     |
RegisterForm| High    | TBD				| TBD     |
Dashboard   | High    | TBD				| TBD     |



<br>
<br>


