"use client";
import React, { useState } from "react";

import Link from "next/link";    
const SigninForm = () => {
  
  return (
    <form
      className="flex flex-col gap-5 md:gap-6"
       
    >
      <div>
        <input
          className="form-control"
          placeholder="Email*" 
        />
      </div>
      <div className="relative">
        <input 
           className="form-control"
          placeholder="Password*" 
        />
       
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="inline-flex items-center gap-1.5">
          <input type="checkbox" name="remeber" id="remeber" />
          <label htmlFor="remeber" className="text-dark">
            Remember Me
          </label>
        </div>
        <div>
          <Link
            href="#"
            className="text-dark hover:underline hover:text-primary"
          >
            Forgot Password
          </Link>
        </div>
      </div>
      <div className="text-center pt-3">
        <button
          type="submit"
          className="px-9 md:px-12 lg:px-16 py-3 bg-primary text-white font-bold rounded-lg transition-all duration-300 hover:bg-dark"
        >
          Sign In
        </button>
      </div>
      

      <div className="text-center pt-3">
        <p className="text-white mb-0">
          Don’t have an account?{" "}
          <Link
            href={"/signup"}
            className="text-white font-bold hover:underline hover:text-primary"
          >
            Create an account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninForm;
