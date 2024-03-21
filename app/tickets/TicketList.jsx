import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function getTickets() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      <Link
        className="bg-blue-700 text-white text-center"
        href="/tickets/create"
      >
        Add New form
      </Link>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no tickets</p>
      )}
    </>
  );
}

export default TicketList;
