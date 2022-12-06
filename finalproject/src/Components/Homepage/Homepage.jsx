import "./Homepage.scss"
import map from "../../Assets/images/world-map.gif"
import sf from "../../Assets/images/San Francisco.JPG"

const Homepage = () => {
    return(
        <div className="homepage">
            <h4 className="homepage__title">San Franciso, California</h4>
            <img className="homepage__photo" src={sf} alt="world map" />
        </div>
    )
};

export default Homepage;