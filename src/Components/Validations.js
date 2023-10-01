import * as yup from 'yup'

const validations = yup.object().shape(
    {
        email : yup.string().email("Geçerli bir mail girin").required("Zorunlu alan"),
        password : yup.string().min(4 , "Yetersiz/fazla karakter").required("Zorunlu alan"),
        passwordConfirm : yup.string().oneOf([yup.ref('password')] , "Parola ile uyuşmazlık tespit edildi.").required("Zorunlu alan")
    }
)

export default validations;