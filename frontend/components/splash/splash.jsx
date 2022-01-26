import React from "react"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import NavBarContainer from "../nav_bar/nav_bar_container"

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchservices()
    }

    render() {
        if (!this.props.services.length) return null
        return(
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
                </div>
                <div id="borderdiv">
                    <div id="basicideadiv">
                        <span id="basicideatextone">The basic idea:</span>
                        <span id="basicideatexttwo">highly rated</span>
                        <span id="basicideatexttwo">heros</span>
                        <span id="basicideatexttwo">at low prices.</span>
                    </div>
                    <div id="minielements">
                    <div id="toprow">
                        <div id="first">
                            <span id="text">{this.props.services[3].title}</span>
                            <img id="bbpicture" src={this.props.services[3].photoUrl}></img>
                        </div>
                        <div id="second">
                            <span id="text">{this.props.services[2].title}</span>
                            <img id="picture" src={this.props.services[2].photoUrl}></img>
                        </div>
                    </div>
                    <div id="bottomrow">
                        <div id="third">
                            <span id="text">{this.props.services[1].title}</span>
                            <img id="picture" src={this.props.services[1].photoUrl}></img>
                        </div>
                        <div id="fourth">
                            <span id="text">{this.props.services[0].title}</span>
                            <img id="picture" src={this.props.services[0].photoUrl}></img>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash 