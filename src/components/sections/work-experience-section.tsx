import { Heading } from "../elements/heading";
import { Link } from "../elements/link";
import { Section } from "../elements/section";

type WorkExperienceItem = {
  date: string;
  company: {
    name: string;
    url?: string;
    role: string;
  };
  description: string;
};

const workExperience: WorkExperienceItem[] = [
  {
    date: "February 2021 - Present",
    company: {
      name: "DEPT® Agency",
      role: "Frontend Developer",
      url: "https://www.deptagency.com",
    },
    description:
      "DEPT® is a worldwide agency consisting of 4000+ digital experts from tech to marketing. Collaborating with the biggest brands across the world pioneering the future of Digital Marketing.",
  },
  {
    date: "January 2019 - January 2021",
    company: {
      name: "The Close App",
      role: "Creative Developer",
      url: "https://thecloseapp.com/",
    },
    description:
      "The Close App is trying to bridge the gap between event organiser and the visitor. Where normally the purchase of the ticket would be the end of the communication funnel, Close makes it the start.",
  },
  {
    date: "October 2018 - March 2020",
    company: {
      name: "O! creative digital",
      role: "Frontend developer",
    },
    description:
      "The Close App is trying to bridge the gap between event organiser and the visitor. Where normally the purchase of the ticket would be the end of the communication funnel, Close makes it the start.",
  },
  {
    date: "April 2018 - June 2018",
    company: {
      name: "Go2People",
      role: "Frontend intern",
      url: "https://go2people.nl/english",
    },
    description:
      "Internship at Go2People websites. Creating wordpress websites mainly for charities and public instances.",
  },
];

export const WorkExperienceSection = () => {
  return (
    <Section isMuted>
      <div className="container">
        <Heading as="h2" className="mb-4" id="currently-using">
          Work experience
        </Heading>

        <ul className="flex flex-col gap-8 max-w-[40rem]">
          {workExperience.map((item) => {
            return (
              <li key={item.company.name + item.company.role}>
                <Heading as="h4" size="h4">
                  {item.date}
                </Heading>

                <p className="mb-3">
                  {item.company.url ? (
                    <Link isExternalLink href={item.company.url}>
                      {item.company.name}
                    </Link>
                  ) : (
                    item.company.name
                  )}
                  {" • "}
                  {item.company.role}
                </p>

                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
