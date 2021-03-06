# Udacity FSND Neighborhood Map Project

## TL;DR

[This](https://htmlpreview.github.io/?https://github.com/callforsky/udacity-frontend-project/blob/master/homepage.html) is a single webpage that lists all train stations in Harlem and Hudson railroads. Users can filter the train stations by lines and can view the Google Street View and relevant NYT news of a particular train station. This page is still under development and will add more features in the future.


## Build

This webpage uses **Bootstrap** to construct a responsive and mobile-friendly frond-end surface. Application follows MVM pattern by using **Knockout JS** observables to update DOM automatically. **Google Maps API** and **NYT API** are utilized and all data requests to them are retrieved in an asynchronous manner. Error handling logic is embedded to handle any failure of APIs.

## How to Use

This mini application has a simple structure and requires only a valid internet connection to work because it gets information from Google Maps API and NYT API. All required frameworks/packages are included in the js folder. However, I recommend the user to get his or her own Google Maps API and NYT API and replace the existing API keys in homepage.html (Google Maps API) and app.js (NYT API).

#### Option #1
1. Clone this reponsitory
2. Find the homepage.html and open it with your preferred browser

#### Option #2
1. Download the zip file and unzip it in your local disk
2. Find the homepage.html and open it with your preferred browser

## To-do List

1. Deploy this application to a true website through Heroku
2. Add MTA lines until all is added
3. Add a sidebar to the right to give more information like parking and nearby amenities
