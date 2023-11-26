'use client';

import { ROUTES } from '@/routes';
import { css } from '@/styled-system/css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const inputStyles = css({
  display: 'block',
  border: '1px solid black',
});

function LoginForm() {
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

    router.push(ROUTES.ADMIN);
  };

  return (
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
          aria-required='true'
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
          aria-required='true'
        />
      </div>
      <button className={css({ bg: 'primary' })}>Login</button>
    </form>
  );
}

export default LoginForm;
