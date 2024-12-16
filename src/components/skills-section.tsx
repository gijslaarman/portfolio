import { List, ListItem } from "./elements/list";
import { Heading } from "./heading";

type SkillsSectionProps = {
  currentlyUsing: string[];
  usedInPast: string[];
};

export const SkillsSection = ({
  currentlyUsing,
  usedInPast,
}: SkillsSectionProps) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-slate-200 dark:bg-slate-900">
      <div className="container">
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
    </section>
  );
};
