import Link from "next/link";

function Notfound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>we could not find the thicket you were looking for.</p>
      <p>
        Go back to all <Link href="/tickets">Dashboard</Link>
      </p>
    </main>
  );
}

export default Notfound;
