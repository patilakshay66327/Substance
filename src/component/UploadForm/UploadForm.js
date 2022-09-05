import React from "react";
import { FormGroup } from "react-bootstrap";
import "./UploadForm.css";

const UploadForm = () => {
    return (
        <div className="container upload-form-main-div">
            <div className="upload-title-btn">
                <h3>Product Selection Form</h3>
                <button className="Upload-btn" >Upload</button>
            </div>
            <FormGroup className="Upload-form">
                <label>Select Product</label><br />
                <input type="file" />
            </FormGroup>
        </div>
    );
}

export default UploadForm;
