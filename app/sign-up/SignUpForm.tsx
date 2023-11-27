'use client';

import { ROUTES } from '@/routes';
import FormGroup from '@/src/components/ui/FormGroup';
import Input from '@/src/components/ui/Input';
import Label from '@/src/components/ui/Label';
import { box } from '@/src/recipes/box';
import { button } from '@/src/recipes/button';
import { heading } from '@/src/recipes/heading';
import { css, cx } from '@/styled-system/css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUser } from './actions';

function SignUpForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await createUser(formData);
    if (response.error) {
      return;
    }

    // replace this line by a request to sign in in order to auto sign in after sign up
    router.push(ROUTES.LOGIN);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx(
        box({ bg: 'content', rounded: 'main' }),
        css({ w: '30rem', maxW: '100%', pb: '3rem' }),
      )}
    >
      <h1 className={heading()}>Sign up</h1>
      <FormGroup>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' name='username' type='text' aria-required='true' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          aria-required='true'
          placeholder='john@example.com'
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          name='password'
          type='password'
          aria-required='true'
        />
      </FormGroup>
      <button className={cx(button(), css({ w: '100%', mt: '2.5rem' }))}>
        Sign Up
      </button>

      <p className={css({ color: 'text', mt: '1.2rem' })}>
        Already have an account ?{' '}
        <Link
          href={ROUTES.LOGIN}
          className={css({
            color: 'primary',
            _hover: { textDecoration: 'underline' },
          })}
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignUpForm;
