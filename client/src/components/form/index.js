import React from "react";

export function FormInput(props) {
    return (
        <div className="container-fluid">
            <form>
                <div className="form-group">
                    <label> Search Books</label>
                    <input className="form-control" {...props} />
                </div>

            </form>
        </div>

    )
};

export function SubmitBtn(props) {
    return (
        <div className="container-fluid">
        <button className="btn btn-success" {...props}> Submit </button>
        </div>
    )
}

