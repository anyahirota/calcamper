import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

class SpotHeaderPhotos extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            photos: this.props.photos
        }; 
    }

    rotatePhotos(num) {
        let newPhotos = this.state.photos.slice();
        if (num > 0) { 
            let firstPhoto = newPhotos.shift(); 
            newPhotos.push(firstPhoto); 
        } else {
            let lastPhoto = newPhotos.pop();
            newPhotos.unshift(lastPhoto);  
        }
        return (e) => this.setState({photos: newPhotos})
    }


    render () {
        if (this.state.photos.length < 2) {
            return (
                <ul className="spot-header-photos">
                    {this.state.photos.map((photo, idx) =>(
                        <li key={ idx }> <img src={photo} alt="" /></li>
                    ))}
                </ul>
            ) 
        } else {
            return (
                <div className="carousel-container">
                    <ul className="spot-header-photos">
                        {this.state.photos.map((photo, idx) => (
                            <li key={idx}> <img src={photo} alt="" /></li>
                        ))}
                    </ul>
                    <div className="rotating-buttons">
                        <div className="button-backward" onClick={this.rotatePhotos(-1)}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></div>
                        <div className="button-forward" onClick={this.rotatePhotos(1)}><FontAwesomeIcon icon={faArrowAltCircleRight} /></div>
                    </div>
                </div>
            )
        }
    }

}

export default SpotHeaderPhotos; 