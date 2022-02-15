import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import ImageJambookLogo from "@images/logo.svg";
import AuthInput from "@components/AuthInput";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

interface RegisterFormType {
  name: string;
  username: string;
  password: string;
}

const Register: NextPage = () => {
  const router = useRouter();
  const initialValues: RegisterFormType = {
    name: "",
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    name: yup.string(),
    username: yup.string(),
    password: yup.string(),
  });

  const onSubmit = (values: RegisterFormType) => {
    console.log(values);
  };

  return (
    <>
      <div className="jb-logo">
        <Image src={ImageJambookLogo} />
        <Formik {...{ initialValues, onSubmit, validationSchema }}>
          {(props) => (
            <div className="jb-auth-form">
              <Field id="name" name="name" label="Name" as={AuthInput} />
              <Field id="username" name="username" label="Username" as={AuthInput} />
              <Field id="password" name="password" label="Password" type="password" as={AuthInput} />

              <div className="jb-auth-form-buttons">
                <button className="btn btn-primary btn-block" onClick={() => props.handleSubmit()}>
                  Create Account
                </button>
                <button className="btn btn-secondary btn-block" onClick={() => router.push("/login")}>
                  Login
                </button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
