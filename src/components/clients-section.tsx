import { Heading } from "./elements/heading";
import { Link } from "./elements/link";

type ClientsSectionProps = {
  clients: ClientItem[];
};

export const ClientsSection = ({ clients }: ClientsSectionProps) => {
  return (
    <section className="container py-8 md:py-12 lg:py-16">
      <Heading as="h2" className="mb-2">
        Clients
      </Heading>

      <p className="mb-8">Some projects I have worked on:</p>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientItem key={client.name} {...client} />
        ))}
      </ul>
    </section>
  );
};

type ClientItem = {
  name: string;
  logo: string; // SVG logo path to public folder.
  description: string;
  links: string[];
};

const ClientItem = ({ name, logo, description, links }: ClientItem) => {
  return (
    <li className="bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-slate-700 border p-4 rounded flex flex-col gap-4">
      <div className="flex gap-2">
        <img src={logo} alt={name} className="w-6 h-6" />
        <Heading as="h3">{name}</Heading>
      </div>

      <p>{description}</p>

      <ul className="mt-auto">
        {links.map((link) => (
          <li key={link}>
            <Link isExternalLink href={link}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
