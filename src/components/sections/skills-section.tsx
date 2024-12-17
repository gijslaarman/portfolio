import { List, ListItem } from "../elements/list";
import { Heading } from "../elements/heading";
import { Section } from "../elements/section";

const currentlyUsing = [
    "HTML/CSS/Typescript",
    "React/NextJS",
    "(S)CSS Modules, TailwindCSS",
    "Jest",
    "Storybook",
    "NodeJS",
    "Docker, Azure Devops, Github actions",
    "Contentstack/Contentful",
  ],
  usedInPast = [
    "Vue, Angular, Svelte",
    "GraphQL",
    "Prisma w/ Postgres",
    "Chakra UI",
  ];

export const SkillsSection = () => {
  return (
    <Section isMuted>
      <div className="container">
        <div className="max-w-[40em]">
          <Heading as="h2" className="mb-4" id="currently-using">
            Technologies I'm using
          </Heading>

          <List listType="ul" aria-labelledby="currently-using">
            {currentlyUsing.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </List>

          <Heading as="h3" className="mb-3" id="used-in-past">
            Technologies I've used in the past
          </Heading>

          <List listType="ul" aria-labelledby="used-in-past">
            {usedInPast.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </List>
        </div>
      </div>
    </Section>
  );
};
