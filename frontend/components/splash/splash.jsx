import React from "react"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import NavBarContainer from "../nav_bar/nav_bar_container"

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
                </div>

            </div>
        )
    }
}

export default Splash 