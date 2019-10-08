import React from 'react';
import FormInput from '../form-input/form-inout.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in wiht your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput type='email'
                    name='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                       
                        label='Email' />

                    <FormInput type='password' handleChange={this.handleChange}
                    name='password'
                    value={this.state.password}
                       
                        label='Password' />
                    <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                        </CustomButton>  
                    </div>
                   
                </form>
            </div>
        )
    }
};

export default SignIn; 