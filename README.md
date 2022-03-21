# The NOBRAC Initiative (Front-end)

The NOBRAC Initiative is a React front-end and Rails back-end application designed to help raise awareness about climate change and combat global warming using various tools (such as a carbon footprint calculator) as well as provide users with global/U.S. statistics and additional resources on ways to reduce carbon emissions. Note that there are two separate repositories for this application. Click [here](https://github.com/hiddencilantro/nobrac-rails) for the back-end repository.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* (For Rails API) You have installed `ruby 3.0.0`, `rails 7.0.2`, and `PostgreSQL`.
* (For React) You have installed `react 17.0.2` and `react-dom 17.0.2`.

## Installing NOBRAC Initiative

To install NOBRAC Initiative, follow these steps:

1. Fork and clone both repositories
2. Back-end: Run `bundle install` to require all dependencies
3. Back-end: Run `rake db:setup`
4. Back-end: Run `rake db:migrate`
5. Front-end: Run `yarn install` to install all dependencies

## Using NOBRAC Initiative (locally)

1. Back-end: Run `rails s` to start up the server on your local machine
2. Front-end: Run `yarn start` to compile and view the application in the browser

*Note: Because this application utilizes data from a 3rd-party API which cannot be accessed without an API key, it is highly recommended that you visit the deployed version (linked below) to experience the application's full functionality.*

## Contact

If you want to contact me you can reach me at <thehiddencilantro@gmail.com>.

## Copyright Notice and Statement

This project is under exclusive copyright and is currently not offering any license for open-source contributions. Nobody shall copy, distribute, or modify this project unless specified otherwise.

## Links
[Live](https://nobrac-initiative.netlify.app/)
