import {React, Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/company_login.png";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
import Navbar from "./Navbar";
import axios from 'axios';

class StudentSignup extends Component {

    constructor(props){
    super(props);
    
    this.state = {
      email : '',
      password : '',
      names : '' ,
      about : '',
      year_of_established : '',
      location : '',
      website : '',
      twitter : '',
      facebook : '',
      linkedin : '',
      instagram : '',
      vedio_link : ''
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login_link = this.login_link.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateContactNo = this.updateContactNo.bind(this);
    this.updateAbout = this.updateAbout.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateWebsite = this.updateWebsite.bind(this);
    this.updateTwitter = this.updateTwitter.bind(this);
    this.updateInstagram = this.updateInstagram.bind(this);
    this.updateLinkedin = this.updateLinkedin.bind(this);
    this.updateFacebook = this.updateFacebook.bind(this);
    this.updateVediolink = this.updateVediolink.bind(this);

    }
    
    
    updateInput(event){
    this.setState({email : event.target.value})
    }

    updatePassword(event){
        this.setState({password : event.target.value})
    }

    updateName(event){
        this.setState({name : event.target.value})
    }

    updateContactNo(event){
        this.setState({contactno : event.target.value})
    }

    updateAbout(event){
        this.setState({about : event.target.value})
    }

    updateYear(event){
        this.setState({year_of_established : event.target.value})
    }

    updateLocation(event){
        this.setState({location : event.target.value})
    }

    updateWebsite(event){
        this.setState({ website : event.target.value})
    }

    updateTwitter(event){
        this.setState({twitter : event.target.value})
    }
    
    updateInstagram(event){
        this.setState({instagram : event.target.value})
    }

    
    updateFacebook(event){
        this.setState({facebook : event.target.value})
    }
    
    updateLinkedin(event){
        this.setState({linkedin : event.target.value})
    }
    
    updateVediolink(event){
        this.setState({vedio_link : event.target.value})
    }
    
    login_link (){
        console.log(this.state.email);
        console.log(this.state.password);
        // POST request using fetch with error handling
        const body =  
            { 
                "email" : this.state.email,
                "password" : this.state.password,
                "name" : this.state.name,
                "contactno" : this.state.contactno,
                "year_of_established" : this.state.year_of_established,
                "about" : this.state.about,
                "website" : this.state.website,
                "socialmedia" : {
                    "linkedin" : this.state.linkedin,
                    "instagram" : this.state.instagram,
                    "facebook" : this.state.facebook,
                    "twitter" : this.state.twitter,
                },
                "vedio_link" : this.state.vedio_link,
                "approve" : false
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/company/signup',body,{header})
            .then(function(response) {
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem("company",JSON.stringify(response.data))
                window.location.replace('/companyhome');
                 
        })
         .catch(error => {
                console.error('There was an error!');
                if(this.state.email  && this.state.password){
                    window.alert("Incorect Id and Password");
                }
                
            });
            
    };
    
    render(){
    return (
            <>
            <Navbar/>
            <div className="pop image width height">
                <img src={web5} className = "image-fluid animated size_img margin-l-lg" alt = "login img"/>
                <div className = "col-md-4 col-10 left_margin">
                            <div className="margin-t-lg">
                                <div className="card-body card_us">
                                 <h3 className="card-title card_us"><strong>Company Signup</strong></h3>
                                    <Form >
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="text" id= 'email' className="form-control"  onChange={this.updateInput} placeholder="Username" required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="password" id= 'password' className="form-control" onChange={this.updatePassword} placeholder="password" required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="text" id= 'name' className="form-control" onChange={this.updateName} placeholder="password" required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="text" id= 'contactno' className="form-control" onChange={this.updateContactNo} placeholder="password" required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="text" id= 'about' className="form-control" onChange={this.updateAbout} required/>
                                        </div>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-t" value="Login"  onClick={this.login_link}></input>
                                    </Form>
                        </div>
                    </div>
                </div>
            </div> 
            </>
        );
    }
} 

export default StudentSignup;