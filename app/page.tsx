import { ROUTES } from '@/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
      </div>
      <h1>Product Feedback App</h1>
      <Link href={ROUTES.ADMIN}>Open My Admin</Link>
    </div>
  );
}
