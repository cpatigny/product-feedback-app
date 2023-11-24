import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Link href='/sign-up'>Sign Up</Link>
      </div>
      <h1>Product Feedback App</h1>
      <Link href='/admin'>Open My Admin</Link>
    </div>
  );
}
