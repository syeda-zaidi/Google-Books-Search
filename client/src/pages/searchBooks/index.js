import React from "react";
import API from "../../utils/API";
import axios from "axios";
import Jumbotron from "../../components/jumbotron";
import { FormInput, SubmitBtn } from "../../components/form";
import "./style.css";
import BooksCard from "../../components/booksCard";


class Books extends React.Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        googleBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "" })
            )
            .catch(err => console.log(err));
    };

    getBooksFromGoogle = () => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=";
        axios.get(url + this.state.title)
            .then(res => {
                this.setState({ books: res.data.items, title: "" })
                console.log(this.state.books);
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooksFromGoogle();
        console.log(this.state.title);
    };

    renderResults = () => {
        if (this.state.books) {
            return (
                <div className="container-fluid results">
                    <ul className="list-group">
                        {this.state.books.map(book => (

                            <BooksCard
                                data-id={book.id}
                                key={book.id}
                                title={`Title: ` + book.volumeInfo.title}
                                author={book.volumeInfo.author}
                                description={book.volumeInfo.description}
                            />
                        ))}
                    </ul>

                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <p>No Books To Display </p>
                </div>
            )
        }
    }

    changeText = (event) => {
        this.setState(
            { title: event.target.value }
        );
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <FormInput
                    value={this.state.title}
                    onChange={this.changeText}
                    name="searchTitle"
                    placeholder="Enter Book Title"
                />
                <SubmitBtn onClick={this.handleFormSubmit} />

                {this.renderResults()}
            </div>

        )
    }

}

export default Books;