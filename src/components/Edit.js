import React, { Component } from 'react';
import { getReviewById, updateReview } from '../services/reviews'
import { Link } from 'react-router-dom'

class Edit extends Component {

    state = {
        _id: '',
        title: '',
        album: '',
        comments: ''
    }

    componentDidMount() {
        console.log(this.props.match.params._id)
        getReviewById(this.props.match.params._id)
            .then((response) => {
                console.log(response)
                this.setState({
                    _id: response.data._id,
                    title: response.data.title,
                    album: response.data.album,
                    comments: response.data.comments, 
                    imageUrl: response.data.imageUrl
                })
            })
    }

    handleInput = (e) => {
        // per official react docs
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        updateReview(this.state._id, this.state)
            .then((response) => {
                console.log(response)
                window.location.href = '/'
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="Edit">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Edit: {this.state.title}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Album Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="album"
                                    value={this.state.album}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Image Url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="imageUrl"
                                    value={this.state.imageUrl}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <button type="submit" className="btn btn-info mx-1">Update</button>
                            <Link to="/" className="btn btn-danger mx-1">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
