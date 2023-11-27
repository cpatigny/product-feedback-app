import { container } from '@/src/recipes/container';
import { cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div
      className={cx(
        container({ py: true }),
        flex({ minH: '100%', justify: 'center', align: 'center' }),
      )}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
