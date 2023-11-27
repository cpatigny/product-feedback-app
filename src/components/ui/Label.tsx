import { css } from '@/styled-system/css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className={css({ color: 'text', fontSize: '1.1rem' })}>
      {children}
    </label>
  );
}

export default Label;
