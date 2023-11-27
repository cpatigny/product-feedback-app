import { formElement } from '@/src/recipes/formElement';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: InputProps) {
  return <input {...props} className={formElement()} />;
}

export default Input;
