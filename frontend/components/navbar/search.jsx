import React from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultText: "Try Yosemite, Big Sur...",
            searchInput: "Try Yosemite, Big Sur...", 
            parks: [
                "Big Sur", 
                "Death Valley National Park", 
                "Joshua Tree National Park", 
                "Kings Canyon National Park", 
                "Lassen Volcanic National Park", 
                "Tahoe National Forest", 
                "Yosemite National Park", 
            ], 
            showDropdown: false
        }; 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.closeDropdown = this.closeDropdown.bind(this);
        this.openDropdown = this.openDropdown.bind(this);
    }

    availableParks() {
        const parkList = []; 
        for (let i = 0; i < this.state.parks.length; i++) {
            let park = this.state.parks[i]
            if (park.includes(this.state.searchInput) ||
                park.toUpperCase().includes(this.state.searchInput) ||
                park.toLowerCase().includes(this.state.searchInput)) {
                parkList.push(park); 
            }
        }
        return parkList; 
    }

    parkPath(park) {
        return park.split(" ").join("").toLowerCase();
    }

    updateFromList(park) {
        return (e) => this.setState({
            searchInput: park, 
            showDropdown: false
        });
    }

    parkSearchDropdown() {
        const parkList = this.availableParks(); 

        if (parkList.length < 1) {
            return (
                <div className="park-search-list-container">
                    <ul className="park-search-list">
                        <li key={1000} className="park-search-list-item" id="no-location-hover">
                            <p>Location not available</p>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="park-search-list-container">
                    <ul className="park-search-list">
                        {parkList.map((park, idx) => {
                            return (
                                <Link to={`/spots/${this.parkPath(park)}`}>
                                    <li key={idx} className="park-search-list-item" onClick={this.updateFromList(park)}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <h1>{park}</h1> 
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

    handleSubmit(e) {
        
        e.preventDefault(); 
        const parkList = this.availableParks();
        if (parkList.length > 0) {
            const park = parkList[0]; 
            const parkPath = this.parkPath(park); 
            this.setState({ searchInput: park, showDropdown: false}, () => {
                this.props.history.push(`/spots/${parkPath}`)
            })
        }  
        
    }

    openDropdown() {
        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.closeDropdown);
            if (this.state.defaultText === this.state.searchInput) {
                this.setState({ searchInput: ""});
            }
        });
    }

    closeDropdown() {
        this.setState({ showDropdown: false }, () => {
            document.removeEventListener('click', this.closeDropdown);
            if (this.state.searchInput === "") {
                this.setState({ searchInput: "Try Yosemite, Big Sur..." });
            }
        });
    }

    update() {
        return e => this.setState({
            searchInput: e.currentTarget.value })
    }

    renderDefaultText() {
        if (this.state.searchInput === "") {
            return () => this.setState({
                searchInput: this.state.defaultText
            });
        }
    }

    render () {
       
        const defaultTextStyles = this.state.defaultText === this.state.searchInput ? "defaultTextStyles" : ""; 

        return (
            <div className="search-bar-container">
                <form onSubmit={this.handleSubmit} className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text"
                        className={defaultTextStyles}
                        value={this.state.searchInput}
                        onClick={this.openDropdown}
                        onChange={this.update()}
                    />
                    {/* <br/>
                    <input type="submit" value="Search"/> */}
                    {this.state.showDropdown
                            ? (
                                this.parkSearchDropdown()
                        ) : (
                            null
                        )}
                </form>
            </div>
        )
    }
}

export default Search; 