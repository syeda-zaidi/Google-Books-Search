import React from "react";
import API from "../../../utils/API";


class Books extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks() {
        API.getBooks().then(res => {
            this.setState({ books: res.data })
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        
    }


}
