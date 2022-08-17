import React, { Component } from 'react'
import Layout from '../components/Layout/layout'

export default class AddnewStudent extends Component {
    render() {
        return (
            <Layout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <section class="add-home">
                            <form action="">
                                <fieldset>
                                    <legend>Personal Info</legend>
                                    <div class="student-name">
                                        <div class="a-label">
                                            <label for="fname">Name :</label>
                                        </div>
                                        <div class="a-name-div">
                                            <input type="text" name="fname" id="fname" placeholder="First Name" required class="a-boxsize" />
                                            <input type="text" name="fname" id="fname" placeholder="Middle Name" required class="a-boxsize" />
                                            <input type="text" name="fname" id="fname" placeholder="Last Name" required class="a-boxsize" />
                                        </div>
                                    </div>
                                    <div class="inline">
                                        <div class="student-email">
                                            <div class="a-label">
                                                <label for="a-email">Email :</label>
                                            </div>
                                            <div class="a-email-div">
                                                <input type="email" name="eamil" id="a-email" required class="a-box2" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="student-mnumber">
                                            <div class="a-label">
                                                <label for="pnumber">Contact :</label>
                                            </div>
                                            <div class="a-contact-div">
                                                <input type="tel" name="phonenumber" id="pnumber" placeholder="Phone Number" required
                                                    maxlength="14" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$s"
                                                    class="a-box2" />
                                            </div>
                                        </div>


                                    </div>
                                    <div class="inline">
                                        <div class="student-bday">
                                            <div class="a-label">
                                                <label for="bday">Date Of Birth :</label>
                                            </div>
                                            <div class="a-bday-div">
                                                <input type="date" name="birthdate" id="bday" class="a-boxsize" required />
                                            </div>
                                        </div>

                                        <div class="student-catagory">
                                            <div class="a-label">
                                                <label for="catagory">Catagory :</label>
                                            </div>
                                            <select name="catagory" id="catagory" class="a-boxsize" required>
                                                <option value="#">Select Catagory</option>
                                                <option value="genral">Genral</option>
                                                <option value="obc">OBC</option>
                                                <option value="sc">SC</option>
                                                <option value="st">ST</option>
                                            </select>
                                        </div>
                                        <div class="student-gedner">
                                            <div class="a-label">
                                                <label for="gender">Gender :</label>
                                            </div>
                                            <div class="a-gender-div">
                                                <div style="display: flex; justify-content: space-between; margin-left: 10px;">
                                                    <div>
                                                        <label for="male">Male :</label>
                                                        <input type="radio" name="gender" id="male" value="male" class="a-radio" checked />
                                                    </div>
                                                    <div style="margin-left: 10px;">
                                                        <label for="male">Female :</label>
                                                        <input type="radio" name="gender" id="male" value="female" class="a-radio" />
                                                    </div>
                                                    <div style="margin-left: 10px;">
                                                        <label for="male">other :</label>
                                                        <input type="radio" name="gender" id="male" value="other" class="a-radio" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="inline">
                                        <div class="profile-img">
                                            <div class="a-label">
                                                <label for="profile-img">Profile Image :</label>
                                            </div>
                                            <input type="file" name="profile-img" id="profile-img" class="a-boxsize" required />
                                        </div>
                                        <div class="age">
                                            <div class="a-label">
                                                <label for="age">Age :</label>
                                            </div>
                                            <div class="age-div">
                                                <input type="number" name="age" id="age" placeholder="Age" max="100" min="16" required
                                                    class="a-box3" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Educational Details</legend>
                                    <div class="inline">
                                        <div class="student-qualification">
                                            <div class="a-label">
                                                <label for="qualification">Qualification :</label>
                                            </div>
                                            <div class="student-qualificaation-div">
                                                <input type="text" name="qualification" id="qualification" placeholder="Qualification"
                                                    required class="a-box2" />
                                            </div>
                                        </div>
                                        <div class="selected-course">
                                            <div class="a-label">
                                                <label for="course">Selected Course :</label>
                                            </div>
                                            <div class="course-div">
                                                <select name="course" id="course" required class="a-box2">
                                                    <option value="#" aria-readonly="true">Selected Course</option>
                                                    <option value="c & c++">C & C++</option>
                                                    <option value="web design">Web Design</option>
                                                    <option value="fronted development">Fronted Development</option>
                                                    <option value="backend development">Backend Development</option>
                                                    <option value="fullstack development">Fullstack Development</option>
                                                    <option value="3D & 360 in web">3D & 360 in web</option>
                                                    <option value="firebase">Firebase</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inline">
                                        <div class="12th%">
                                            <div class="a-label">
                                                <label for="12th%">12th persatage :</label>

                                                <input type="number" name="12th-pr" id="12th%" placeholder="Persantege" class="a-box3"
                                                    min="0" max="100" />
                                            </div>
                                        </div>
                                        <div class="10th%">
                                            <div class="a-label">
                                                <label for="10th%">10th persatage :</label>

                                                <input type="number" name="10th-pr" id="10th%" placeholder="Persantege" class="a-box3"
                                                    min="0" max="100" />
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                                <fieldset>
                                    <legend>Parents Info</legend>
                                    <div class="father-info">
                                        <div class="a-label">
                                            <h1 style="padding-bottom: 20px;">Father's Details</h1>
                                        </div>
                                        <div class="inlilne">
                                            <div class="a-label">
                                                <label for="fathername"> Name :</label>
                                            </div>
                                            <div class="a-name-div">
                                                <input type="text" name="fatherfirstname" id="fathername" placeholder="First Name"
                                                    class="a-boxsize" required />
                                                <input type="text" name="fathermiddlename" id="fathername" placeholder="Middle Name"
                                                    class="a-boxsize" required />
                                                <input type="text" name="fatherlastname" id="fathername" placeholder="Last Name"
                                                    class="a-boxsize" required />
                                            </div>
                                        </div>
                                        <div class="inline">
                                            <div class="father-ocupation">
                                                <div class="a-label">
                                                    <label for="ocupation">Ocupation :</label>
                                                </div>
                                                <div class="father-ocupation-div">
                                                    <select name="ocupation" id="ocupaion" class="a-boxsize" required>
                                                        <option value="#">Select Ocupation</option>
                                                        <option value="job">Job</option>
                                                        <option value="business">Business</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="father-education">
                                                <div class="a-label">
                                                    <label for="father-education">Education :</label>
                                                </div>
                                                <div class="father-education-div">
                                                    <input type="text" name="father-education" id="father-education" class="a-boxsize"
                                                        placeholder="Education" required />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="mother-info">
                                        <div class="a-label">
                                            <h1 style="padding-bottom: 20px;">Mother's Details</h1>
                                        </div>
                                        <div class="inlilne">
                                            <div class="a-label">
                                                <label for="mothername"> Name :</label>
                                            </div>
                                            <div class="a-name-div">
                                                <input type="text" name="motherfirstname" id="mothername" placeholder="First Name"
                                                    class="a-boxsize" required />
                                                <input type="text" name="mothermiddlename" id="mothername" placeholder="Middle Name"
                                                    class="a-boxsize" required />
                                                <input type="text" name="motherlastname" id="mothername" placeholder="Last Name"
                                                    class="a-boxsize" required />
                                            </div>
                                        </div>
                                        <div class="inline">
                                            <div class="mother-ocupation">
                                                <div class="a-label">
                                                    <label for="ocupation">Ocupation :</label>
                                                </div>
                                                <div class="mother-ocupation-div">
                                                    <select name="ocupation" id="ocupaion" class="a-boxsize" required>
                                                        <option value="#">Select Ocupation</option>
                                                        <option value="job">Job</option>
                                                        <option value="business">Business</option>
                                                        <option value="housewife">House Wife</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mother-education">
                                                <div class="a-label">
                                                    <label for="mother-education">Education :</label>
                                                </div>
                                                <div class="mother-education-div">
                                                    <input type="text" name="mother-education" id="mother-education" class="a-boxsize"
                                                        placeholder="Education" required />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Residential Info</legend>
                                    <div class="inline">
                                        <div class="address-1">
                                            <div class="a-label">
                                                <label for="address-1">Address 1 :</label>
                                            </div>
                                            <div class="address-1-div">
                                                <input type="text" name="address-1" id="address-1" placeholder="Address 1" required
                                                    class="a-box2" />
                                            </div>
                                        </div>
                                        <div class="address-2">
                                            <div class="a-label">
                                                <label for="address-2">Address 2 :</label>
                                            </div>
                                            <div class="address-2-div">
                                                <input type="text" name="address-2" id="address-2" placeholder="Address 2" required
                                                    class="a-box2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inline">
                                        <div class="pincode">
                                            <div class="a-label">
                                                <label for="pincode">Pincode :</label>
                                            </div>
                                            <div class="pincode-div">
                                                <input type="number" name="pincode" id="pincode" placeholder="Pincode" required
                                                    class="a-boxsize" min="6" max="6" />
                                            </div>
                                        </div>
                                        <div class="city">
                                            <div class="a-label">
                                                <label for="city">City :</label>
                                            </div>
                                            <div class="city-div">
                                                <input type="text" name="city" id="city" placeholder="City" required class="a-boxsize" />
                                            </div>
                                        </div>
                                        <div class="state">
                                            <div class="a-label">
                                                <label for="state">State :</label>
                                            </div>
                                            <div class="state-div">
                                                <input type="text" name="state" id="state" placeholder="State" class="a-boxsize" required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <input type="submit" name="add-student" id="add-student" value="Add Student" />
                            </form>
                        </section>
                    </div>
                </div>
            </Layout>
        )
    }
}
