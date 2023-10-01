import React from 'react';
import './App.css';
// import { Formik, Field, Form } from 'formik';
// import Form from './Components/Form.js';

import Signup from './Components/Signup.js';

function App() {
  return (
    <div className="App">
      {/* <h1>SIGN UP</h1>
      <Formik initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }} onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}>

        <Form>
          <label htmlFor='firstName'> First Name : </label>
          <Field name='firstName' placeholder="Jane" />

          <br />
          <br />

          <label htmlFor='lastName'> Last Name : </label>
          <Field name='lastName' placeholder="Doe" />

          <br />
          <br />

          <label htmlFor='email'> Mail : </label>
          <Field name='email' placeholder="janedoe@doe.com" type="email" />

          <br />
          <br />

          <button type='submit'>
            submit
          </button>
        </Form>
      </Formik> */}
       {/* <Form/>  */}
       <Signup/>
    </div>
  );
}

export default App;
