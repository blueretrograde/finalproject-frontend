import "./Header.scss"

const Header = () => {

    return(
        <div className="header">

            <div className="header__name">
                <h3 className="header__name--title">T R A V E L .</h3>
            </div>

            <div className="header__buttons"> 
                <button className="header__buttons--home">Home</button>
                <button className="header__buttons--about">About</button>
                <button className="header__buttons--contact">Contact</button>
                <button className="header__buttons--locations">Locations</button>
                <button className="header__buttons--locations">Create</button>
                
            </div>
        </div>
    )

}

export default Header;