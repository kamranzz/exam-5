import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Helmet } from "react-helmet";

const AddCardForm = () => {
    const initialValues = {
        title: "",
        description: "",
        imageURL: ""
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        imageURL: Yup.string().required("Image URL is required")
    });

    const Navigate = useNavigate(); 

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post("http://localhost:8080/products", values);
            console.log(response.data.message);
            resetForm();
            Navigate("/home");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
        
        <Helmet>
            <title>Add</title>
        </Helmet>

        <div className="add-card-form-container">
            <h1>Add Card</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <Field type="text" id="title" name="title" className="form-control" />
                        <ErrorMessage name="title" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <Field
                            type="text"
                            id="description"
                            name="description"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="description"
                            component="div"
                            className="error-message"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL:</label>
                        <Field
                            type="text"
                            id="imageURL"
                            name="imageURL"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="imageURL"
                            component="div"
                            className="error-message"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="mt-4 btn-submit">
                            Add Card
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
        </>
    );
};

export default AddCardForm;