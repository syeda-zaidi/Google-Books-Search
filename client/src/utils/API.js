import axios from "axios";

export default {


    //ajax call from FE to get all books 
    getBooksFromGoogle: function (search) {
        return axios.get(`/api/google/${search}`);
    },

    getBooks: function (req, res) {
        return axios.get("/api/books")
    },

    getBookById: function (id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function (bookObj) {
        return axios.post("/api/books" + bookObj);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

};