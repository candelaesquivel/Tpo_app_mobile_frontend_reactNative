
import { ForgotPasswordUI } from "./ForgotPasswordUI"
import { useState } from "react"
import { ROUTES } from "../../";


function ForgetPasswordScreen({navigation, props}) {

  const [email, setEmail] = useState('');

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setEmail(text);
    }

    const onRecoveryTouch = (event) => {
      navigation.navigate(ROUTES.RECOVER_PASSWORD_TOKEN);
    }

    return (
      <ForgotPasswordUI
        email = {email}
        onRecoveryHandler={onRecoveryTouch}
        onEmailHandler={onEmailChange}
      >
      </ForgotPasswordUI>
    )
}

export default ForgetPasswordScreen;


