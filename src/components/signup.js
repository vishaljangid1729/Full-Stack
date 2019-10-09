import React from 'react';
import { Signin } from './signin';
import { Foot } from './footer';
import axios from 'axios';


export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entity: '',
            contact_name: '',
            category: '',
            country: '',
            pincode: '',
            state: '',
            city: '',
            email: '',
            password: '', 
            mobile: '',
            gstin: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/signup", this.state)
        .then(res => {console.log(res)});

        

    }

    render(){
        const {entity, contact_name, category, country, pincode, state, city, email, password, mobile, gstin} = this.state;
        return(
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-5" id = "singnup_image">
                        <img src= {require("../images/singup.svg")} alt="" srcset="" className = "img-fluid" />
                    </div>
                    <div className="col-sm-6" id = "signup_box">
                        <div className="row justify-content-end">
                            <a class="waves-effect waves-light btn modal-trigger blue white-text " href="#modal1">Login </a>
                            <Signin></Signin>
                        </div>
                        
                        <form onSubmit = {this.handleSubmit}>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="entity" type="text" onChange = {this.handleChange} value = {entity}  name = "entity" required class="validate"/>
                                    <label for="entity">Legal Entity Name</label>
                                </div>
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="contact" type="text" onChange={this.handleChange} value= {contact_name} name = "contact_name" required class="validate" />
                                    <label for="contact">Contact Name</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="input-field  form-group col-md-6">
                                    <select name="category" required onChange={this.handleChange} value= {category} >
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Category</label>
                                </div>
                                <div className="input-field  form-group col-md-6">
                                    <select name="country" required onChange={this.handleChange} value= {country} >
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Country</label>

                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="pincode" name="pincode" onChange={this.handleChange} value = {pincode} required type="text" class="validate" />
                                    <label for="pincode">Pincode</label>
                                </div>

                                
                                <div className="input-field  form-group col-md-6">
                                    <select name="state" required onChange={this.handleChange} value={state} >
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>State</label>

                                </div>
                            </div>
                            <div className="form-row">
                               
                                <div class="input-field  form-group col-md-6">
                                    <input id="city" type="text" name="city" required class="validate" onChange={this.handleChange} value= {city} />
                                    <label for="city">City</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="email" name="email" required type="email" class="validate" onChange={this.handleChange} value= {email} />
                                    <label for="email">Email ID</label>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="password" type="password" name="password" required class="validate" onChange={this.handleChange} value= {password} />
                                    <label for="password">Password</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="con_pass"  required type="password" class="validate" />
                                    <label for="con_pass">Confirm Password</label>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="mobile" name="mobile" onChange={this.handleChange} value={mobile} required type="tel" class="validate" />
                                    <label for="mobile">Mobile</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="gstin" name="gstin" onChange={this.handleChange} value={gstin} required type="text" class="validate" />
                                    <label for="gstin">GSTIN</label>
                                </div>
                            </div>
                            <div className="form-row justify-content-end">
                                <button class="btn waves-effect waves-light right blue white-text" type="submit" name="action">Submit
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        );
    }
}
