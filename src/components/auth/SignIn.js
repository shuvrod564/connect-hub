import React from "react";
import SigninForm from "./SigninForm";

const SignIn = () => {
  return (
    <div className="max-w-[560px] shadow-box relative rounded-lg mx-auto p-5 pt-12 px-8 md:px-12 sm:pb-24 pb-12"> 
      <h1 className="text-center font-bold text-dark text-2xl md:text-3xl mb-2">
        Welcome
      </h1>
      <p className="text-center text-dark mb-6 md:mb-10">
        Sign in for a seamless experience
      </p>

      <SigninForm />
    </div>
  );
};

export default SignIn;
