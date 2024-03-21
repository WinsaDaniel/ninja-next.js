import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";

function NavBar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="dojo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>dojo helperdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default NavBar;
