'use client';

import { ROUTES } from '@/routes';
import { css } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import { createUser } from './actions';

const inputStyles = css({
  display: 'block',
  border: '1px solid black',
});

function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const response = await createUser(formData);
    if (response.error) {
      return;
    }

    // replace this line by a request to sign in in order to auto sign in after sign up
    router.push(ROUTES.LOGIN);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            className={inputStyles}
            aria-required='true'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            className={inputStyles}
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
            aria-required='true'
          />
        </div>
        <button className={css({ bg: 'primary' })}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
