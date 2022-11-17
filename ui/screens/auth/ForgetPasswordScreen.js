
import { ForgotPasswordUI } from "./ForgotPasswordUI"
import { useState } from "react"

function ForgetPasswordScreen({navigation, props}) {

  const [email, setEmail] = useState('');

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setEmail(text);
    }

    const onRecoveryTouch = (event) => {

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


