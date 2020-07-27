import React, { Component } from "react";
import client from "../../functions/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Card from "../../components/Card";
import styled from "styled-components";


class RsvpPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
render() {

    return (
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        );
    };
};

//   onNameChange(event) {
//     this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
//     this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
//     this.setState({message: event.target.value})
//   }

export default RsvpPage;