import { css } from '@/styled-system/css';

function FormGroup({ children }: { children: React.ReactNode }) {
  return <div className={css({ mt: '1rem' })}>{children}</div>;
}

export default FormGroup;
