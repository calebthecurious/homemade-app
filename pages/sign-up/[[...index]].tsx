import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="w-full flex justify-center items-center">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);
