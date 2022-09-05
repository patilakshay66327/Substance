import react from "react";
import { Form } from "react-bootstrap";
import "./DetailsForm.css";


const DetailsForm = () => {

    return (
        <div className="container">
            <h3>Details</h3>
            <Form>
                <Form.Group className="form-group">
                    <label> First name : </label>
                    <input type="text" />
                </Form.Group>

                <Form.Group className="form-group">
                    <label> Last name : </label>
                    <input type="text" />
                </Form.Group>

                <Form.Group className="form-group">
                    <label> Email : </label>
                    <input type="email" />
                </Form.Group>

                <Form.Group className="form-group">
                    <label> Mobile Number : </label>
                    <input type="number" />
                </Form.Group>

                <Form.Group className="form-group">
                    <label> Address : </label>
                    <input type="text" />
                </Form.Group>

                <Form.Group className="form-group">
                    <label> Substance select : </label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Substance 1</option>
                        <option value="2">Substance 2</option>
                        <option value="3">Substance 3</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="form-group btn-div">
                    <button className="cancle-btn">
                        cancel
                    </button>
                    <button className="submit-btn">
                        Submit
                    </button>
                </Form.Group>
            </Form>
        </div>
    );
}


export default DetailsForm;
