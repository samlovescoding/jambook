import { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import ImageJambookLogo from '@images/logo.svg';
import AuthInput from '@components/AuthInput';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import api from 'services/api';

interface LoginFormType {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<any>();
  const initialValues: LoginFormType = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object({
    username: yup.string(),
    password: yup.string(),
  });

  const onSubmit = async (values: LoginFormType) => {
    try {
      setError(null);
      const response = await api.post('/auth/login', values);
      console.log({ response });
    } catch (e: any) {
      setError(e?.response?.data?.message || e?.message);
    }
    // router.push('/models');
  };

  return (
    <>
      <div className="jb-logo">
        <Image src={ImageJambookLogo} alt="Jambook Logo" />
        <Formik {...{ initialValues, onSubmit, validationSchema }}>
          {(props) => (
            <div className="jb-auth-form">
              <Field
                id="username"
                name="username"
                label="Username or Email"
                as={AuthInput}
              />

              <Field
                id="password"
                name="password"
                label="Password"
                type="password"
                as={AuthInput}
              />

              {error && <div className="jb-auth-error">{error}</div>}

              <div className="jb-auth-form-buttons">
                <button
                  className="jb-auth-btn"
                  onClick={() => props.handleSubmit()}
                >
                  Login
                </button>
                <button
                  className="jb-auth-btn-link"
                  onClick={() => router.push('/register')}
                >
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
