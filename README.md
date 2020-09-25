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

<p align="center">
  <img src="https://calcamper-seed.s3-us-west-1.amazonaws.com/splash_search_bar.png" alt="logo" height="auto" width="900"/> 
</p>

Listing index pages show all available listings by the user's selected park or category (camping, glamping, RV) and can be filtered further by selecting the category button located at the top of the page. Listing index pages display high level information about each listing, including the listing's name, cost, and park, as well as the listing's location, enabled by the Google Maps API.  

<p align="center">
<img align="center" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/search_bar_screenshot.png" alt="logo" height="auto" width="900"/> 
</p>

- **Browse Listing Amenities** 

Once on the listing page, users can view all the different features that listing has on offer. The comprehensive information available about the listing allows users to make well-informed booking decisions. 

<p align="center">
  <img src="https://calcamper-seed.s3-us-west-1.amazonaws.com/gif1.gif">
</p>

These listing pages were developed using a boolean-based detail entry system to more efficiently seed listing information. Within the listing's react component, conditions were utilized to dynamically categorize amenities as present or not present to customize HTML and CSS. An example of these conditions is displayed below:

```
booleanEntries(attributeName) {
    if (this.props.spot[attributeName] !== true) {
        return "amenity-false"
    }
}

renderCorrectSpotType() {
    const byot = this.props.spot.bring_your_own_tents ? "Bring your own tents" : "Tents provided";
    const pat = this.props.spot.park_at_listing ? "Park at listing" : "No parking at listing"; 
    const ada = this.props.spot.ada_access ? "ADA access" : "No ADA access";

    let heading;
    if (this.props.spot.spot_type === "RV") {
        heading = "RV camping area"; 
    } else if (this.props.spot.spot_type === "camping") {
        heading = "Campsite area";
    } else {
        heading = "Lodging provided";
    }

    let firstItem; 
    if (this.props.spot.spot_type === "glamping") {
        const name = this.props.spot.lodging_type;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        firstItem = (
            <li>
                <div className="box-icons"><FontAwesomeIcon icon={faHome} /></div>
                <p>{nameCapitalized}</p>
            </li>
        )
    } else {
        firstItem = (
            <li className={this.booleanEntries("bring_your_own_tents")}>
                <div className="box-icons"><FontAwesomeIcon icon={faCampground} /></div>
                <p>{byot}</p>
            </li>
        )
    }
    
    return (
        <ul className="amenity-box">
            <h1>{heading}</h1>
            {firstItem}
        </ul>
    )
}
```

- **Book Listing (CRUD Feature)**

Users can create, view, update, destroy bookings. The booking create form is located on the each listing page. Users must be logged in to create a booking. To view bookings, logged in users can navigate to the "Trips" page, linked in the nav bar. When on the "Trips" page, users can either update or cancel their bookings. The create and update forms use the React-dates package to allow for complex date picking. 


<p align="center">
  <img height="auto" width="900" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/create+booking+form.png">
</p>

<p align="center">
  <strong>Create Booking</strong>
</p>

<p align="center">
  <img height="auto" width="300" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/create_booking1.png">
</p>
<p align="center">
  <img height="auto" width="300" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/create_booking2.png">
</p>

<p align="center">
  <strong>View Bookings</strong>
</p>

<p align="center">
  <img height="auto" width="700" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/view_bookings.png">
</p>

<p align="center">
  <strong>Update Booking</strong>
</p>
<p align="center">
  <img height="auto" width="300" src="https://calcamper-seed.s3-us-west-1.amazonaws.com/update_booking.png">
</p>

- **Add a Review (CRUD Feature)**


# Coming Soon
- Create listing saves feature

Love a site, but not ready to book? Soon you will be able to add a campsite, glampsite, or RV park to your saved list to keep track of your favorite listings. When you are ready for your next adventure, all you have to do is look at your saves and book!  
