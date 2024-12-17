import { Card } from "../elements/card";
import { Heading } from "../elements/heading";
import { Link } from "../elements/link";
import { Section } from "../elements/section";

const clients: ClientItem[] = [
  {
    logo: "/images/clients/via-outlets.png",
    name: "VIA Outlets",
    description:
      "A multi-tenant platform built to support twelve different outlet center websites, along with a corporate site.",
    links: ["https://viaoutlets.com", "https://bataviastad.nl"],
  },
  {
    logo: "/images/clients/inter.png",
    name: "Inter Milan F.C.",
    description:
      "The marketing website for Inter Milan F.C. Including streaming services and news.",
    links: ["https://www.inter.it/en"],
  },
];

export const ClientsSection = () => {
  return (
    <Section className="container">
      <Heading as="h2" className="mb-2">
        Clients
      </Heading>

      <p className="mb-8">Some projects I have worked on:</p>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientItem key={client.name} {...client} />
        ))}
      </ul>
    </Section>
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
    <Card as="li">
      <div className="flex gap-2">
        <img src={logo} alt={name} className="w-6 h-6" loading="lazy" />
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
    </Card>
  );
};
