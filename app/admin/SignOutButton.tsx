'use client';

import { signOut } from 'next-auth/react';
import { css } from '../../styled-system/css';

const SignOutButton = () => {
  return (
    <button
      className={css({ bg: 'primary', p: '4' })}
      onClick={() => signOut({ callbackUrl: window.location.origin })}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
