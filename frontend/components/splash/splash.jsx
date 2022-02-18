import React from "react"
// import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import Footer from "../Footer"

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
                    <img id="BasicHeadImage" src={window.logo1}></img>
                </div>
                <div id="entirelowernavbar">
                    <div id="lowernavbartext">
                        {this.props.services.map((service) => (
                            <Link id="lowernavbarentries" key={service.id} to={`/services/${service.id}/products`}>{service.title.toUpperCase()}</Link>
                        ))}
                    </div>
                    <div id="hnavline">
                     </div>
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
                        <Link id="link" to={`/services/4/products`}>
                            <img id="bbpicture" src={this.props.services[3].photoUrl}></img>
                            <span id="harrypotterservice">Flying Lessons</span>
                        </Link>
                        <Link id="link" to={`/services/3/products`}>
                            <img id="picture" src={this.props.services[2].photoUrl}></img>
                            <span id="harrypotterservice">Balance your Diet</span>
                        </Link>
                    </div>
                    <div id="bottomrow">
                    <Link id="link" to={`/services/2/products`}>
                        <img id="picture" src={this.props.services[1].photoUrl}></img>
                        <span id="harrypotterservice">Save the Universe</span>
                    </Link>
                    <Link id="link" to={`/services/1/products`}>
                        <img id="picture" src={this.props.services[0].photoUrl}></img>
                        <span id="harrypotterservice">Save the Earth</span>
                    </Link>
                    </div>
                    </div>
                </div>
                <div id="borderdiv2">
                    <div id="minielements">
                    <div id="toprow">
                        <Link id="link" to={`/services/5/products`}>
                        
                            <img id="bbpicture" src={this.props.services[4].photoUrl}></img>
                            <span id="harrypotterservice">Demogorgon Pest Control</span>

                        </Link>
                        <Link id="link" to={`/services/6/products`}>
                            <img id="picture" src={this.props.services[5].photoUrl}></img>
                            <span id="harrypotterservice">Save the Galaxy</span>
                        </Link>
                    </div>
                    <div id="bottomrow">
                    <Link id="link" to={`/services/7/products`}>
                        <img id="picture" src={this.props.services[6].photoUrl}></img>
                        <span id="harrypotterservice">Volunteer as Tribute</span>
                    </Link>
                    <Link id="link" to={`/services/8/products`}>
                        <img id="picture" src={this.props.services[7].photoUrl}></img>
                        <span id="harrypotterservice">Marble Game Partner</span>
                    </Link>
                    </div>
                    </div>
                    <div id="basicideadiv2">
                        <Link id="link" to={`/services/9/products`}>
                            <div id="fifth">
                                <span id="text">{this.props.services[8].title}</span>
                                <img id="picturefor9" src={this.props.services[8].photoUrl}></img>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Splash 