import React from 'react'
import { Formik , useFormik } from 'formik';
import Signup from './Signup.js'
//HTML ELEMANLARINI KULLANMAK
function Form() {
    //USEFORMIK KULLANIMI
    // const {handleChange , handleSubmit , values} = useFormik({
    //     initialValues: {
    //         firstName: "",
    //         lastName:"",
    //         email: "",
    //         gender: "",
    //         hobbies: [],
    //         country: ""
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     }
    // })

    return (
        <>
            <h1>SIGN UP</h1>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                gender: "female",
                hobbies: [],
                country:""
            }} onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}>
                {
                    ({ handleSubmit, handleChange, values }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='firstName'>First Name:</label>
                            <input name='firstName' value={values.firstName} placeholder='Jane' onChange={handleChange} />

                            <br />
                            <br />

                            <label htmlFor='lastName'>Last Name:</label>
                            <input name='lastName' value={values.lastName} placeholder='Doe' onChange={handleChange} />

                            <br />
                            <br />

                            <label htmlFor='email'>E-mail:</label>
                            <input name='email' value={values.email} placeholder='jane@doe.com' onChange={handleChange} />

                            <br />
                            <br />

                            <label htmlFor='gender'>Gender: </label>
                            <br />

                            <label>Female</label>
                            <input name='gender' type='radio' value='female' onChange={handleChange} checked={values.gender === "female"} />
                            <label>Male</label>
                            <input name='gender' type='radio' value='male' onChange={handleChange} checked={values.gender === "male"} />
                            <br />
                            <br />

                            <select name="country" onChange={handleChange}>
                                <option value="Türkiye">Turkiye</option>
                                <option value="Germany">Germany</option>
                            </select>
                            <br /><br />
                            <label htmlFor="hobbies"> Volleyball:</label>
                            <input type="checkbox" name='hobbies' value="Volleyball" onChange={handleChange} />

                            <br /><br />

                            <label htmlFor="hobbies">Cinema:</label>
                            <input type="checkbox" name='hobbies' value="Cinema" onChange={handleChange} />


                            <br /><br />

                            <label htmlFor="hobbies">Run</label>
                            <input type="checkbox" name='hobbies' value="Run" onChange={handleChange} />


                            <br /><br />

                            <button onSubmit={handleSubmit}>SUBMIT</button>



                        </form>
                    )
                }



            </Formik>
        </>
    )
}

export default Form