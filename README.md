<img src="https://calcamper-seed.s3-us-west-1.amazonaws.com/logo.png" alt="logo" height="120" width="auto"/> 

**CalCamper** is a web application that allows users to view, search for, and book unique camping, glamping, and rv experiences, located in a selection of California's greatest national and state parks. Each location displays listing-specific information to allow users to make fully informed and satifying booking decisions. While booking features are exclusive to signed-in users, all are welcome to browse. Signed-in users are able to create, view, update, and cancel bookings and reviews. CalCamper is inspired by and designed in the spirit of Hipcamp. 

Check out the live site [here](https://calcamper.herokuapp.com/).

# Technologies Used

- PostgreSQL
- Ruby on Rails 
- React/Redux
- HTML
- CSS
- Amazon Web Services (S3 Storage)
- Google Map API
- React-dates

# Key Features
- **Search for Listings** 

Users can search for listings using the search bar located towards the top of the splash page or in the nav bar of all other pages. The search bars filter listings by park name. As the user types in a park name, the search bar dropdown will list all available parks matching the user input. The user can click on a dropdown item or press enter to bring them to the listing index page of choice. 

<img align="center" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/search_bar_screenshot.png" alt="logo" height="auto" width="900"/> 

Listing index pages show all available listings by the user's selected park or category (camping, glamping, RV) and can be filtered further by selecting the category button located at the top of the page. Listing index pages display high level information about each listing, including the listing's name, cost, and park, as well as the listing's location, enabled by the Google Maps API.  

- **Browse Listing Amenities** 

- **Book Listing (CRUD Feature)**

- **Add a Review (CRUD Feature)**


# Coming Soon
- Create listing saves feature

Love a site, but not ready to book? Soon you will be able to add a campsite, glampsite, or RV park to your saved list to keep track of your favorite listings. When you are ready for your next adventure, all you have to do is look at your saves and book!  
