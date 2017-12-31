# Udacity FSND Neighborhood Map Project

======

## TL;DR

This is a single webpage that lists all train stations in two MTA lines, Harlem and Hudson. Users can filter the train stations by lines and can view the Google Street View of a train station by clicking the marker. This page is still under development to add more features in the future.

======

## Application Design

This webpage uses *Bootstrap* to construct a responsive and mobile-friendly frond-end surface. Application follows MVM pattern by using *Knockout JS* observables to update DOM automatically. *Google Map API* and *Holder* are utilized and all data requests to them are retrieved in an asynchronous manner. Error handling logic is embedded to handle any failure of APIs.

======

## TO-DO

1.Deploy this application to a true website through Heroku
2.Add MTA lines until all is added
3.Add a sidebar to the right to give more information like parking and nearby amenities
