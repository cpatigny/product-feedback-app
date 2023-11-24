'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { css } from '../../styled-system/css';

const inputStyles = css({
  display: 'block',
  border: '1px solid black',
});

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.ok) {
      router.push('/login');
      return;
    }

    const data = await response.json();
    console.error(...data.message);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            className={inputStyles}
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            className={inputStyles}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className={inputStyles}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className={css({ bg: 'primary' })}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
