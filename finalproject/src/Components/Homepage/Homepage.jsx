import "./Homepage.scss"
import map from "../../Assets/images/world-map.gif"

const Homepage = () => {
    return(
        <div className="homepage">
            <h4 className="homepage__title">Pick a destination!</h4>
            <img className="homepage__photo" src={map} alt="world map" />
        </div>
    )
};

export default Homepage;