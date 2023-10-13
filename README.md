# Web Scraper with MongoDB

This is a web scraping project that collects data from specific websites and stores it in a MongoDB database. This document provides information on how to set up and run the project.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- npm (Node.js package manager)
- MongoDB (ensure the MongoDB server is running)

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/jjvemz/Web-Scraper
   cd web-scraper-mongodb
   ```
Install project dependencies:
  ```
  npm install
  ```
Configure the .env file with the necessary information. Specify the URL of the website you want to scrape, MongoDB credentials, and any other project-specific settings.
  ```
  MONGODB_URI=mongodb://localhost:27017/your_database_name
  WEBSITE_URL=http://books.toscrape.com

  ```
## Usage

To run the project, use the following command:

  ```
  npm run dev
  ```
This will initiate the web scraping process and store the data in the MongoDB database according to the configuration provided in the .env file.

## Contributions

If you want to contribute to the project, please feel free to do so. You can open issues or submit pull requests in the repository.

## License

This project is distributed under the MIT License.

## Contact

If you have any questions or need assistance, don't hesitate to get in touch with the project author:
Juan José
