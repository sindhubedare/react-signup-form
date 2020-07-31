import React from 'react';
import Userinfo from './Userinfo';
import '../App.css';


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            Email: "",
            Password: "",
            Age: "",
            Gender: "",
            Occupation: "",
            FormDate: []
        }

     this.onChange= this.onChange.bind(this);
     this.onSubmit= this.onSubmit.bind(this);   
    }


    onChange(event){
        console.log("Onchange", event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit(event){
        event.PreventDefault(); 
        this.setState({FormData: <Userinfo 
            Email={this.state.Email}
            Password={this.state.Password}
            Age={this.state.Age}
            Gender={this.state.Gender}
            Occupation={this.state.Occupation}
           
    
            /> })
    }
    // handleSubmit= () => alert("Submitted Email, Password, Age, Gender and Occupation" )


    render(){
        return(
            <div>

                <form onSubmit={this.onSubmit}>
                    <label className="label">Email/Username: </label>
                    <input placeholder="Email" type="text" name="Email" value={this.state.Email} onChange={this.onChange}/>
                    <br/>
                    <label className="label">Password:</label>
                    <input placeholder="Password:" id="submit" type="password" name="Password" value={this.state.Password} onChange={this.onChange} />
                    <br/>
                    <label className="label">Gender: </label>
                    <br/>
                    <label for="female">Female:</label>
                    <input name="Gender" id="female"  type="radio" value={this.state.Gender} onChange={this.onChange}/>
                    
                    <label for="male">Male:</label>
                    <input name="Gender" id="male" type="radio" value={this.state.Gender} onChange={this.onChange}/>
                    <label for="other">Other:</label>
                    <input name="Gender" id="other" type="radio" value={this.state.Gender} onChange= {this.onChange}/>
                   <br/>
                   <label className="label">Age:</label>
                    <input placeholder="age" type="text" name="Age" value={this.state.Age} onChange={this.onChange}/>
                    <br/>
                    <label className="label">Occupation:</label>
                    <input placeholder="occupation" type="text" name="Occupation" value={this.state.Occupation} onChange={this.onChange}  />
                    <br/>
                      <label className="button">
                        <input type="submit" value="Submit" />
                    </label> 
                </form>
               <div>{this.state.FormData}</div>
            </div>
        )
    }
}
export default Form;