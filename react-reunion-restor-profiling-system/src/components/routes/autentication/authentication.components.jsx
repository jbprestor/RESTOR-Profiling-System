/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../../firebase/firebase.utils";
import './authentication.styles.scss'
const Authentication = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
