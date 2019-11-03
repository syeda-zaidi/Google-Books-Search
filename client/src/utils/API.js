import axios from "axios";

export default {


    //ajax call from FE to get all books 
    getBooks: function (search) {
        axios.get(`/api/google/${search}`);
    },

    getBookById: function (id) {
        axios.get("/api/books/" + id);
    },

    saveBook: function(bookObj) {
        axios.post("/api/books" + bookObj);
    },

    deleteBook: function (id) {
        axios.delete("/api/books/" + id);
    }
    
};