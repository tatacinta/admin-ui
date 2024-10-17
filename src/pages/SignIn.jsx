import FormSignIn from "../component/Fragments/FormSignIn";
import Authlayout from "../component/Layout/AuthLayout";
const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
