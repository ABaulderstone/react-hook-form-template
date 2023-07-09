import { useState } from 'react';
import './App.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from './components/Form';
import { useForm } from 'react-hook-form';

function App() {
  const schema = yup.object({
    username: yup
      .string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Must be a valid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters'),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('formData:', data);
    reset();
  };
  return (
    <>
      <h1>Example Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <Form.Input
            type='text'
            inputName='username'
            label='Username'
            register={register}
            error={errors.username}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='email'
            inputName='email'
            label='Email'
            register={register}
            error={errors.email}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='password'
            inputName='password'
            placeholder='password'
            register={register}
            error={errors.password}
          />
        </Form.Field>
        <button>Submit</button>
      </Form>
    </>
  );
}

export default App;
