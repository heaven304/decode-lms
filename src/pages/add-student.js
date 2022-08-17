import React, { useState } from "react";
import Layout from "../components/Layout/layout";
import Profile from "../images/profile.png";
import Upload from "../images/upload-icon.svg";
import PhoneInput from "react-phone-input-2";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
function AddStudent() {



    const submitStudentData = (formData, resetForm) => {
        console.log("student :: ", formData);
    };
    const submitFatherData = (formData, resetForm) => {
        console.log("father :: ", formData);
    };
    const submitMotherData = (formData, resetForm) => {
        console.log("mother :: ", formData);
    };
    const submitRecidentalData = (formData, resetForm) => {
        console.log("recidental :: ", formData);
    };

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

    const [value, setValue] = useState();

    return (
        <Layout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-title-info">
                                <h1>Student Details</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="white-box-main">
                                <div className="stsg-box-list d-flex align-items-center stsg-box-list-text mb-4">
                                    <span className="d-block">
                                        <img src={Profile} alt="profile" />
                                    </span>
                                    <div className="stsg-box-list-text ps-3">
                                        <bdi className="d-block">Upload your profile</bdi>
                                        <p className="mb-0">You can upload image of max size of 5mb. Image will be cropped to 256*256px.</p>
                                        <div className="upload-btn-wrapper mt-3">
                                            <button className="btn">
                                                <img src={Upload} className="pe-2" alt="profile" />
                                                Upload Image
                                            </button>
                                            <input type="file" name="myfile" />
                                        </div>
                                    </div>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        f_name: '',
                                        m_name: '',
                                        l_name: '',
                                        standard: '',
                                        dob: '',
                                        email: '',
                                        phone: '',
                                        eme_phone: '',
                                    }}
                                    validationSchema={Yup.object({
                                        f_name: Yup.string().required("First name is required."),
                                        m_name: Yup.string().required("Middle name is required."),
                                        l_name: Yup.string().required("Last name is required."),
                                        standard: Yup.string().required("Standard is required."),
                                        dob: Yup.string().required("Date Of Birth is required."),
                                        eme_phone: Yup.string().required("Emergency Contact number is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitStudentData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">First Name</label>
                                                <input type="text" name="f_name" {...formAttr(runform, "f_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "f_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Middle Name</label>
                                                <input type="text" name="m_name" {...formAttr(runform, "m_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "m_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Last Name</label>
                                                <input type="text" name="l_name" {...formAttr(runform, "l_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "l_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Standard</label>
                                                <input type="text" name="standard" {...formAttr(runform, "standard")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "standard")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Date Of Birth</label>
                                                <input type="date" name="dob" {...formAttr(runform, "dob")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "dob")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Email Address</label>
                                                <input type="email" name="email" {...formAttr(runform, "email")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "email")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Contact Number</label>
                                                <div className="phone-cust-input">
                                                    <input type="tel" name="phone" {...formAttr(runform, "phone")} className="form-control input-style" maxLength='10' placeholder="" />
                                                    {errorContainer(runform, "phone")}
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Emergency Contact Number</label>
                                                <div className="phone-cust-input">
                                                    <input type="tel" name="eme_phone" {...formAttr(runform, "eme_phone")} className="form-control input-style" maxLength='10' placeholder="" />
                                                    {errorContainer(runform, "eme_phone")}
                                                </div>
                                            </div>
                                            <div className="col-12 pt-4 text-md-end text-center">
                                                <button type="submit" className="btn-comn-all">
                                                    Save
                                                </button>
                                                <button type="button" className="btn-comn-all3 ms-3">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-title-info">
                                <h1>Parent Details</h1>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="white-box-main">

                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        f_f_name: '',
                                        f_m_name: '',
                                        f_l_name: '',
                                        occupation: '',
                                        qualification: '',
                                        f_phone: '',
                                    }}
                                    validationSchema={Yup.object({
                                        f_f_name: Yup.string().required("First name is required."),
                                        f_m_name: Yup.string().required("Middle name is required."),
                                        f_l_name: Yup.string().required("Last name is required."),
                                        occupation: Yup.string().required("Occupation is required."),
                                        f_phone: Yup.string().required("Contact number is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFatherData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's First Name</label>
                                                <input type="text" name="f_f_name" {...formAttr(runform, "f_f_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "f_f_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Middle Name</label>
                                                <input type="text" name="f_m_name" {...formAttr(runform, "f_m_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "f_m_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Last Name</label>
                                                <input type="text" name="f_l_name" {...formAttr(runform, "f_l_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "f_l_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Occupation</label>
                                                <input type="text" name="occupation" {...formAttr(runform, "occupation")} className="form-control input-style" placeholder="" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Qualification</label>
                                                <input type="qualification" name="qualification" {...formAttr(runform, "qualification")} className="form-control input-style" placeholder="" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Contact Number</label>
                                                <div className="phone-cust-input">
                                                    <input type="tel" name="f_phone" {...formAttr(runform, "f_phone")} className="form-control input-style" maxLength='10' placeholder="" />
                                                    {errorContainer(runform, "f_phone")}
                                                </div>
                                            </div>

                                            <div className="col-12 pt-4 text-md-end text-center">
                                                <button type="submit" className="btn-comn-all">
                                                    Save
                                                </button>
                                                <button type="button" className="btn-comn-all3 ms-3">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="white-box-main">

                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        m_f_name: '',
                                        m_m_name: '',
                                        m_l_name: '',
                                        occupation: '',
                                        qualification: '',
                                        m_phone: '',
                                    }}
                                    validationSchema={Yup.object({
                                        m_f_name: Yup.string().required("First name is required."),
                                        m_m_name: Yup.string().required("Middle name is required."),
                                        m_l_name: Yup.string().required("Last name is required."),
                                        occupation: Yup.string().required("Occupation is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitMotherData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's First Name</label>
                                                <input type="text" name="m_f_name" {...formAttr(runform, "m_f_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "m_f_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's Middle Name</label>
                                                <input type="text" name="m_m_name" {...formAttr(runform, "m_m_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "m_m_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's Last Name</label>
                                                <input type="text" name="m_l_name" {...formAttr(runform, "m_l_name")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "m_l_name")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's Occupation</label>
                                                <input type="text" name="occupation" {...formAttr(runform, "occupation")} className="form-control input-style" placeholder="" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's Qualification</label>
                                                <input type="qualification" name="qualification" {...formAttr(runform, "qualification")} className="form-control input-style" placeholder="" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Mother's Contact Number</label>
                                                <div className="phone-cust-input">
                                                    <input type="tel" name="m_phone" {...formAttr(runform, "m_phone")} className="form-control input-style" maxLength='10' placeholder="" />
                                                </div>
                                            </div>

                                            <div className="col-12 pt-4 text-md-end text-center">
                                                <button type="submit" className="btn-comn-all">
                                                    Save
                                                </button>
                                                <button type="button" className="btn-comn-all3 ms-3">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-title-info">
                                <h1>Recidental Details</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="white-box-main">

                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        line_1: '',
                                        line_2: '',
                                        city: '',
                                        state: '',
                                        country: '',
                                        zipcode: '',
                                    }}
                                    validationSchema={Yup.object({
                                        line_1: Yup.string().required("Address is required."),
                                        city: Yup.string().required("city is required."),
                                        state: Yup.string().required("state is required."),
                                        country: Yup.string().required("country is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitRecidentalData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Line 1</label>
                                                <input type="text" name="line_1" {...formAttr(runform, "line_1")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "line_1")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Line 2</label>
                                                <input type="text" name="line_2" {...formAttr(runform, "line_2")} className="form-control input-style" placeholder="" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">City</label>
                                                <input type="text" name="city" {...formAttr(runform, "city")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "city")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">State</label>
                                                <input type="text" name="state" {...formAttr(runform, "state")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "state")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Country</label>
                                                <input type="text" name="country" {...formAttr(runform, "country")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "country")}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Zipcode</label>
                                                <input type="tel" name="zipcode" {...formAttr(runform, "zipcode")} className="form-control input-style" placeholder="" />
                                                {errorContainer(runform, "zipcode")}
                                            </div>

                                            <div className="col-12 pt-4 text-md-end text-center">
                                                <button type="submit" className="btn-comn-all">
                                                    Save
                                                </button>
                                                <button type="button" className="btn-comn-all3 ms-3">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AddStudent;
