import React from 'react';
import FormInput from '../form-input/form-inout.component';
import CustomeButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.style.scss';

class SingUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]:value});
}

handleSubmit =async (e) => {
    e.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;

    if(password !== confirmPassword){
        alert("password don't match");
        return;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName})

        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'' 
        })
    } catch (error){
        console.log(error)
    }
}

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">
                    I don not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='emai'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email '
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomeButton type='submit'>
                        Sign up
                    </CustomeButton>

                </form>
            </div>
        )
    }
};

export default SingUp; 

