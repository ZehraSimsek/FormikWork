import React from 'react'
import { Formik } from 'formik';
//HTML ELEMANLARINI KULLANMAK
function Form() {

    return (
        <>
            <h1>SIGN UP</h1>
            <Formik initialValues={{
                email: "",
                password: "",
                passwordConfirm: ""
            }} onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}>
                {
                    ({ handleSubmit, handleChange, values }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>E-mail:</label>
                            <input name='email' value={values.email} placeholder='jane@doe.com' onChange={handleChange} />

                            <br />
                            <br />

                            <label htmlFor='password'>Password:</label>
                            <input name='password' value={values.password} placeholder='***' onChange={handleChange} />

                            <br />
                            <br />

                            <label htmlFor='passwordConfirm'>Confirm Password:</label>
                            <input name='passwordConfirm' value={values.passwordConfirm} placeholder='***' onChange={handleChange} />

                            <br />
                            <br />

                            <button onSubmit={handleSubmit}>SUBMIT</button>



                        </form>
                    )
                }



            </Formik>
        </>
    )
}

export default Form