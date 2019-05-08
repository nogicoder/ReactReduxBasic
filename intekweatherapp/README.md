# Intek Weather App
A React Native app for displaying weather data of cities in Vietnam

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Setup](#setup)
- [Instruction](#instruction)

## Introduction
This app displays the weather information of cities including temperature, humidity and pressure through OpenWeatherAPI (https://openweathermap.org/api)

## Technologies
This project is created with:
- React Native v0.59.6
- Redux v4.0.1/ react-redux v7.0.3
- JavaScript ES6
- HTML 5.0
- CSS 3.0

# Requirements
Before running the app, it is required that you have these packages installed locally:
- npm v6.9.0 (Coming with NodeJS installer: https://nodejs.org/en/download/)
- react-native v0.59.6 (https://www.npmjs.com/package/react-native)
- redux v4.0.1/ react-redux v7.0.3 (https://redux.js.org/introduction/installation)
- react-native-fbsdk v0.9.0 (https://github.com/facebook/react-native-fbsdk).  
Note: During the process of installing Facebook SDK, there could be many problems coming up. It is therefore recommended to follow the setting up steps closely according to the instruction on the link above.  
Tips: Make sure you download the FacebookSDK package and place it in the right local directory.

## Setup
To run this project, follow these steps:  
Step 1: Clone the repository locally  
Step 2: Open the Terminal and go inside the repository  
```cd mbach/```  
Step 3: Run the app on the simulator  
```react-native run-ios```  
Note: During the process, if the app returns a FBSDK module missing error, make sure you have completed all the setup steps.  
To run the version of this application without setting up Facebook environment, please follow this instruction:
-  Find the HomeScreen component of the app at 
```~/intekweatherapp/app/screens/HomeScreen.js```  
- Comment out the FBLoginButton from the HomeScreen component  
```(line 11) import FBLoginButton from "../components/FBLoginButton";```
```(line 46) <FBLoginButton/>```

## Instruction
You can change the theme of the app between Light theme and Dark theme by clicking on the subtitle of the app ("Top Ten Movies of IMDB").  
Display the weather data from OpenWeather by:
- Input the city name in the field
- Selecting a city from the scroller

Thank you very much for your time reading this document. Any feedback please response through my email: bach.mai@alumni.intek.edu.vn. Hope you have a good time with Intek Weather App!
