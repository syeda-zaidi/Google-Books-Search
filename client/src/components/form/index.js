import React from "react";

function FormInput(props) {
    return (
        <div className="container-fluid">
            <form>
                <div class="form-group">
                    <label for="bookInput"> Search Books </label>
                    <input type="text" class="form-control" id="bookInput" placeholder=""></input>
                </div>

            </form>
            <button type="submit" className="btn btn-success"> Submit </button>
        </div>

    )
};

export default FormInput;

