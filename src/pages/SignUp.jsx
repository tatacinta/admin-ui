import FormSignUp from "../component/Fragments/FormSignUp";
import Authlayout from "../component/Layout/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout title="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;