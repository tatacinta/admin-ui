import Logo from "../Elements/Logo";
import LabeledInput from "../Elements/Labelinput"; // Perbaiki nama kelas menjadi LabeledInput (huruf kapital)
import Checkbox from "../Elements/Checkbox";
import Button from "../Elements/Button";

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>

      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>

      <div className="mb-3">
        <Checkbox label="Keep me signed in" name="status" />
      </div>

      <Button variant="bg-primary w-full text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;
