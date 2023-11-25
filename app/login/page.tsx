'use client';

import { css } from '@/styled-system/css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const inputStyles = css({
  display: 'block',
  border: '1px solid black',
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const signInData = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (signInData?.error) {
      console.log(signInData.error);
      return;
    }

    router.push('/admin');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            className={inputStyles}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className={inputStyles}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className={css({ bg: 'primary' })}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
