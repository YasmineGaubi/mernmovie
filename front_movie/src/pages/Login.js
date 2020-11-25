import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

const loginStyle = {
  height: "calc(100vh - 56px)",
  width: "100vw",
  display: "flex",
};

const API_ENDPOINT = "https://erp-backend-apis.herokuapp.com/member/login"

export default function Login() {

    const [values, setValues] = useState({ email: '', password: ''})
    const [emailerrors, setEmailErrors] = useState({})
    const [passerrors, setPasswordErrors] = useState({})

    const handleEmailChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handlePasswordChange = event => {
        setValues({ ...values, password: event.target.value })
    }

   const handleLoginSubmit = event => {
    event.preventDefault()

    handleEmailValidation(values.email)
    handlePasswordValidation(values.password)

    if(passerrors.password === "" && emailerrors.email === "") {
        const payload = {
            email: values.email,
            password: values.password
        }
        axios.post(API_ENDPOINT, payload).then(response => localStorage.setItem('token', response.data.token))
    }
   

   } 

   const handleEmailValidation = email => {
    if(email === "") {
        setEmailErrors({ ...emailerrors, email: "Email should not be empty"})
    } else {
        setEmailErrors({ ...emailerrors, email: ""})
    }
   }

   const handlePasswordValidation = password => {
    if(password === "") {
        setPasswordErrors({ ...passerrors, password: 'Please enter a password'})
    }else {
        setPasswordErrors({ ...passerrors, password: ""})
    }
   }

  return (
    <div style={loginStyle}>
      <div style={{ margin: "auto", width: 300}}>
        <Form onSubmit={handleLoginSubmit}>
            <p>{emailerrors.email}</p>
            <p>{passerrors.password}</p>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
            onBlur={e => handleEmailValidation(e.target.value)}
           onChange={handleEmailChange}
            value={values.email}
                id="email"
              type="email"
              name="email"
              placeholder="email@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
            onBlur={e => handlePasswordValidation(e.target.value)}
            onChange={handlePasswordChange}
            value={values.password}
            id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </FormGroup>
          <Button type="submit" color="primary">S'Authentifier</Button>
        </Form>
      </div>
    </div>
  );
}