import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/quiz"><button>Starta quiz</button></Link>
      <Link href="/admin"><button>Admin</button></Link>
    </>
  );
}
