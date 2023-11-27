'use client';

import { ROUTES } from '@/routes';
import FormGroup from '@/src/components/ui/FormGroup';
import Input from '@/src/components/ui/Input';
import Label from '@/src/components/ui/Label';
import { box } from '@/src/recipes/box';
import { button } from '@/src/recipes/button';
import { heading } from '@/src/recipes/heading';
import { css, cx } from '@/styled-system/css';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    <form
      onSubmit={handleSubmit}
      className={cx(
        box({ bg: 'content', rounded: 'main' }),
        css({ w: '30rem', maxW: '100%', pb: '3rem' }),
      )}
    >
      <h1 className={heading()}>Login</h1>
      <FormGroup>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-required='true'
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-required='true'
        />
      </FormGroup>
      <button className={cx(button(), css({ w: '100%', mt: '2.5rem' }))}>
        Login
      </button>

      <p className={css({ color: 'text', mt: '1.2rem' })}>
        Don't have an account ?{' '}
        <Link
          href={ROUTES.SIGN_UP}
          className={css({
            color: 'primary',
            _hover: { textDecoration: 'underline' },
          })}
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
