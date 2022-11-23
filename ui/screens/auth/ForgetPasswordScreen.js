
import { ForgotPasswordUI } from "./ForgotPasswordUI"
import { ROUTES } from "../../";
import { useFormik } from 'formik';
import { authSchemas } from "../../formSchemas/authSchemas";


function ForgetPasswordScreen({navigation, props}) {

    const formik = useFormik({
      initialValues : {
        email : '',
      },
      validationSchema : authSchemas.forgotPassword,
      onSubmit(values){
        onRecoveryTouch()
      }
    });


    const onRecoveryTouch = () => {
      navigation.navigate(ROUTES.RECOVER_PASSWORD_TOKEN);
    }

    return (
      <ForgotPasswordUI
        email = {formik.values.email}
        emailError = { formik.errors.email}
        onEmailHandler={formik.handleChange('email')}
        onRecoveryHandler={formik.handleSubmit}
      >
      </ForgotPasswordUI>
    )
}

export default ForgetPasswordScreen;


