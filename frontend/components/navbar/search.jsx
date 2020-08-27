import React from 'react'; 
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultText: "Try Yosemite, Big Sur, Tahoe...",
            searchInput: "Try Yosemite, Big Sur, Tahoe...", 
            parks: [
                "Big Sur", 
                "Death Valley National Park", 
                "Joshua Tree National Park", 
                "Kings Canyon National Park", 
                "Lassen Volcanic National Park", 
                "Tahoe National Forest", 
                "Yosemite National Park", 
            ]
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let park = this.state.searchInput;
        let parkPath = park.split(" ").join("").toLowerCase();
    }

    clearInput() {
        if (this.state.defaultText === this.state.searchInput) {
            return () => this.setState({
                searchInput: ""
            });
        }
    }

    renderDefaultText() {
        if (this.state.searchInput === "") {
            return () => this.setState({
                searchInput: this.state.defaultText
            });
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="search-bar">
                <input type="text"
                    value={this.state.searchInput}
                    onClick={this.clearInput()}
                />
                <input type="submit" value="Search"/>
            </form>
        )
    }
}

export default Search; 