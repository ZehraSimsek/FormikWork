import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './Validations.js';

function Signup() {

    const {handleSubmit , handleChange , values , errors , handleBlur , touched} = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    console.log(errors);

    return (
        <div>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>E-mail:</label>
                <input name='email' value={values.email} placeholder='jane@doe.com' onChange={handleChange} onBlur={handleBlur}/>

                {errors.email && touched.email && (<div>{errors.email}</div>)}
                
                <br />
                <br />

                <label htmlFor='password'>Password:</label>
                <input name='password' value={values.password} placeholder='***' onChange={handleChange} onBlur={handleBlur} />

                {errors.password && touched.password && (<div>{errors.password}</div>)}

                <br />
                <br />

                <label htmlFor='passwordConfirm'>Confirm Password:</label>
                <input name='passwordConfirm' value={values.passwordConfirm} placeholder='***' onChange={handleChange} onBlur={handleBlur}/>

                {errors.passwordConfirm && touched.passwordConfirm && (<div>{errors.passwordConfirm}</div>)}

                <br />
                <br />

                <button type="submit">SUBMIT</button>
            </form>
        </div >
    )
}

export default Signup
