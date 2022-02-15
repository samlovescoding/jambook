import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import ImageJambookLogo from "@images/logo.svg";
import AuthInput from "@components/AuthInput";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

interface LoginFormType {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const initialValues: LoginFormType = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup.string(),
    password: yup.string(),
  });

  const onSubmit = (values: LoginFormType) => {
    console.log(values);
    router.push("/models");
  };

  return (
    <>
      <div className="jb-logo">
        <Image src={ImageJambookLogo} />
        <Formik {...{ initialValues, onSubmit, validationSchema }}>
          {(props) => (
            <div className="jb-auth-form">
              <Field id="username" name="username" label="Username" as={AuthInput} />
              <Field id="password" name="password" label="Password" type="password" as={AuthInput} />

              <div className="jb-auth-form-buttons">
                <button className="btn btn-primary btn-block" onClick={() => props.handleSubmit()}>
                  Login
                </button>
                <button className="btn btn-secondary btn-block" onClick={() => router.push("/register")}>
                  Create Account
                </button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
