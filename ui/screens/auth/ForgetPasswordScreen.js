
import { ForgotPasswordUI } from "./ForgotPasswordUI"
import { ROUTES } from "../../";
import { useFormik } from 'formik';
import { authSchemas } from "../../formSchemas/authSchemas";
import { authWS } from "../../../networking/endpoints";
import { useDispatch } from "react-redux";


function ForgetPasswordScreen({navigation, props}) {

    const formik = useFormik({
      initialValues : {
        email : '',
      },
      validationSchema : authSchemas.forgotPassword,
      async onSubmit(values){
        await onRecoveryTouch()
      }
    });

    const dispatch = useDispatch();
    
    const onRecoveryTouch = async () => {

      try {
        const result = await authWS.recoverPassword(formik.values.email, dispatch);

        if (result)
          navigation.navigate(ROUTES.RECOVER_PASSWORD_TOKEN);

      } catch (error) {
        
      }
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


