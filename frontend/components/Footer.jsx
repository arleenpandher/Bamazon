import React from "react"
import Logo from "../../app/assets/images/logo2.png"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Footer = () => {

    return(
        <div id="outerfooterdiv">
           
            <div id="footerlogodiv">
                <img id="footerimg" src={Logo}/>
            </div>
            <div>
                <div>
                    <a id="linkedintag" href="https://www.linkedin.com/in/arleenpandher/">
                        <BsLinkedin color={"#dad3d3"} size={65}/>
                    </a>
                    <a href="https://github.com/arleenpandher">
                        <BsGithub color={"#dad3d3"} size={65}/>
                    </a>
                </div>
            </div>
       
      
        </div>
    )
}

export default Footer