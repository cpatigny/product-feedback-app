import { ROUTES } from '@/routes';
import { authOptions } from '@/src/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignOutButton from './SignOutButton';

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(ROUTES.LOGIN);
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
