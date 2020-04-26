<div align="center">
  <img src="./frontend/src/assets/logo-purple.svg" height="100px" alt="Gobaber"/>
</div>

<div align="center">

  #### Application for scheduling hours, for service providers


  ![](https://img.shields.io/badge/author-Junior%20Dias-/?color=7159c1)
  ![](https://img.shields.io/badge/Back--End-NodeJS-/?color=7159c1)
  ![](https://img.shields.io/badge/Front--End-ReactJS-/?color=7159c1)
  ![](https://img.shields.io/badge/Mobile-React%20Native-/?color=7159c1)
</div> 

# Gobarber
:barber:  Application using NodeJs on backend, ReactJs on frontend and React Native for mobile

![gobarber](https://user-images.githubusercontent.com/50254416/80059444-5cb4c100-8502-11ea-9260-17c4fdf5335e.gif)



## About this Project

The idea of the App is:

_"Customer management system and available sevices, scheduling hours"._
 
## Why?
This project is part of my portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: juniordias_@live.com;

Connect with me at [LinkedIn](https://www.linkedin.com/in/alexandre-junior-236894190/).

## Installers
If you want to test the App in the Production mode, the installers are listed below
- NodeJs [Link](https://nodejs.org/en/download/) for backend.
- ReactJs [Link](https://reactjs.org/docs/getting-started.html) for frontend.
- ReactNative [Link](https://facebook.github.io/react-native/docs/getting-started) for mobile


## App
 - The application has customer and service provider sides;
 - The App it is a possible to schedule times for services and has part of the user profile. 
 - Has user login and authentication part.
 
 ### Authentication 
 - Allows a user to authenticate using email and password.
 - Authentication is done using JWT.

## Configuration
### Backend

 - Configuration **Express** , a microframework that deals with routes, requests and responses.
- Configuration **Multer** to upload file.
- Creation of *Models* and *Controllers*.
- Using **axios** to handle external API requests.
- Using **Yup** for input data validation.

### Frontend
  - Configuration **BrowserRouter** and **Route** (lib *react-router-dom*) to handle navigation and each route individually;
  - Configuration of **axios** to make the request to the database;
  - Using **Redux** to manage components states.
  - Using **Redux-Saga** which handless our API-based trading rule by creating a sagas.js file for treatment.
  -  Using **date-fns** for date and time handling
  
### Mobile 
  - Using **react-navigation** for tratment navigation and routes.

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/ItsJuniorDias/Gobarber

$ cd Gobarber
```

**Installing dependencies**

```
$ yarn install
```

_or_

```
$ npm install
```
**Running**

**Backend**

```
$ cd backend
$ yarn dev
```

**Frontend**

```
$ cd frontend
$ yarn start
```

**Mobile**

```
$ cd mobile
$ yarn start
```
 
