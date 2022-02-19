import { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import ImageJambookLogo from '@images/logo.svg';
import AuthInput from '@components/AuthInput';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import api from 'services/api';

interface RegisterFormType {
  name: string;
  username: string;
  password: string;
  email: string;
}

const Register: NextPage = () => {
  const [error, setError] = useState<any>();
  const router = useRouter();
  const initialValues: RegisterFormType = {
    name: '',
    username: '',
    password: '',
    email: '',
  };

  const validationSchema = yup.object({
    name: yup.string(),
    username: yup.string(),
    password: yup.string(),
    email: yup.string().email(),
  });

  const onSubmit = async (values: RegisterFormType) => {
    try {
      setError(null);
      const response = await api.post('/auth/register', values);
      if (response.data.success) {
        router.push('/login');
      }
    } catch (e: any) {
      setError(e?.response?.data?.message || e?.message);
    }
  };

  return (
    <>
      <div className="jb-logo">
        <Image src={ImageJambookLogo} alt="Jambook Logo" />
        <Formik {...{ initialValues, onSubmit, validationSchema }}>
          {(props) => (
            <div className="jb-auth-form">
              {error}
              <Field id="name" name="name" label="Name" as={AuthInput} />
              <Field
                id="email"
                name="email"
                label="Email"
                as={AuthInput}
                type="email"
              />
              <Field
                id="username"
                name="username"
                label="Username"
                as={AuthInput}
              />
              <Field
                id="password"
                name="password"
                label="Password"
                type="password"
                as={AuthInput}
              />

              <div className="jb-auth-form-buttons">
                <button
                  className="jb-auth-btn"
                  onClick={() => props.handleSubmit()}
                >
                  Create Account
                </button>
                <button
                  className="jb-auth-btn-link"
                  onClick={() => router.push('/login')}
                >
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
