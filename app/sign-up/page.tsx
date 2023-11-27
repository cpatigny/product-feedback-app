import { container } from '@/src/recipes/container';
import { cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <div
      className={cx(
        container({ py: true }),
        flex({ minH: '100%', justify: 'center', align: 'center' }),
      )}
    >
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
