import { Card } from "../elements/card";
import { Heading } from "../elements/heading";
import { Link } from "../elements/link";
import { Section } from "../elements/section";

const clients: ClientItem[] = [
  {
    logo: "/images/clients/via-outlets.png",
    name: "VIA Outlets",
    description:
      "A multi-tenant platform built to support twelve different outlet center websites, along with a corporate site. Built with NextJS.",
    links: ["https://viaoutlets.com", "https://bataviastad.nl"],
  },
  {
    logo: "/images/clients/inter.png",
    name: "Inter Milan F.C.",
    description:
      "The marketing website for Inter Milan F.C. Including streaming services and news.",
    links: ["https://www.inter.it/en"],
  },
  {
    logo: "/images/clients/tts.svg",
    name: "Team Town Sports",
    description:
      "A Salesforce webshop for sport items in Canada. I was involved in the frontend templates.",
    links: ["https://www.teamtownsports.com"],
  },
  {
    logo: "/images/clients/acorn.png",
    name: "Rabobank - Acorn",
    description:
      "An initiative by Rabobank to help companies offset carbon emissions.",
    links: ["https://acorn.rabobank.com"],
  },
  {
    logo: "/images/clients/mauritshuis.png",
    name: "Mauritshuis",
    description:
      "An artistic website for the Mauritshuis museum in The Hague, Netherlands.",
    links: ["https://www.mauritshuis.nl/en/"],
  },
  {
    logo: "/images/clients/ricola.png",
    name: "Ricola",
    description: "Marketing website for Ricola. Built with AstroJS & VueJS.",
    links: ["https://www.ricola.com/en-gb/"],
  },
  {
    logo: "/images/clients/onvz.png",
    name: "ONVZ",
    description: "A marketing website for a Dutch health insurance company.",
    links: ["https://www.onvz.nl"],
  },
  {
    logo: "/images/clients/dept.png",
    name: "WEB3/Labs DEPT®",
    description:
      "Internal platform that never really launched teaching DEPT® employees about web3 technologies.",
    links: ["https://web3-labs.deptagency.com/"],
  },
];

export const ClientsSection = () => {
  return (
    <Section className="container">
      <Heading as="h2" className="mb-2">
        Clients
      </Heading>

      <p className="mb-8 max-w-screen-sm">
        These are some projects that I'm proud of, and feel like I've
        contributed a lot to or even led the development:
      </p>

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
        <img
          src={logo}
          alt={`logo of: ${name}`}
          className="w-6 h-6 object-contain"
          loading="lazy"
        />
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
