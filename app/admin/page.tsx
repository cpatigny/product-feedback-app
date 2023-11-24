import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../src/lib/auth';
import SignOutButton from './SignOutButton';

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Welcome {session.user.username}</h2>
      <SignOutButton />
    </div>
  );
};

export default Admin;