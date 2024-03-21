import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    params: {
      id: ticket.id.toString(),
    },
  }));
}

async function getTicket(id) {
  // Imitate a delay in fetching data
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/tickets/" + id, {
    headers: {
      // Add any required headers here
    },
  });

  if (!res.ok) {
    // Handle 404 error by throwing an error
    throw new Error("Ticket not found");
  }

  return res.json();
}

async function TicketDetails({ params }) {
  try {
    const ticket = await getTicket(params.id);

    return (
      <main>
        <nav className="card">
          <h2>Ticket Details</h2>
        </nav>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </main>
    );
  } catch (error) {
    // Handle any errors, e.g., display a generic error message
    console.error("Error fetching ticket details:", error);
    return <div>Error fetching ticket details. Please try again later.</div>;
  }
}

export default TicketDetails;
