import React from "react"
import { FaStar } from "react-icons/fa"
import NavBar from "../nav_bar/nav_bar"

class CreateReview extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentDidMount() {
        this.props.fetchproduct(this.props.match.params.productId)
    }
    

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createreview(this.state)
        .then(() => this.props.history.push('/'))
    }

    render() {
        if (!this.props.product) return null 
        return (
            <div id="reviewdiv">
                <NavBar />
                <h2>Create Review</h2>
                <div>
                    <img id="cartindeximage" src={this.props.product.photoUrl}/>
                    <span>{this.props.product.title} - {this.props.product.description}</span>
                </div>
                <form id="reviewformdiv" onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.update("title")}/>
                    </label>
                    <label>Body:
                        <textarea value={this.state.body} onChange={this.update("body")}/>
                    </label>
                    <div id="starratingbox">
                        {[...Array(5)].map((star,i) => {
                            const ratingvalue = i + 1;
                            return (
                                <label key={i}>
                                    <input id="ratingsbutton" type="radio" value={ratingvalue} onClick={this.update("ratings")}/>
                                    <FaStar id="star" color={ratingvalue <= (this.state.ratings) ? "#ffc107" : "#e4e5e9"} 
                                    size={55}
                                    />
                                </label>
                            )
                        })}
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default CreateReview