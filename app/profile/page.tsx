import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth/next';

export default async function Profile() {
  const session = await getServerSession(authConfig)

  return (
    <div>
      <h2>Profile of {session?.user?.name}</h2>
      {session?.user?.image && <img src={session.user.image} alt="user image" width='100' height="100" />}
    </div>
  )
}
