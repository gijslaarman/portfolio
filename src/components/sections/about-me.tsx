import { Heading } from "../elements/heading";
import { Section } from "../elements/section";

export const AboutMeSection = () => {
  return (
    <Section>
      <div className="container">
        <div className="max-w-screen-sm">
          <Heading as="h2" className="mb-4" id="about-me">
            About me
          </Heading>

          <p className="mb-10">
            I'm Gijs Laarman—a developer and designer who loves combining
            creativity with technology. My main expertise is in frontend
            development, where I focus on performance, SEO, accessibility, and
            good user experiences. I also have an interest in UI/UX design,
            backend work (exclusively with NodeJS for now), and DevOps. This
            site, for example, is deployed on my own virtual private server. I
            enjoy building useful things, taking on new challenges, and helping
            teams work better together. I'm always curious and ready to learn
            more.
          </p>

          <Heading as="h3" className="mb-3">
            Outside of work related stuff
          </Heading>

          <p>
            In my free time, I like to stay active with a mix of boxing,
            running, weightlifting, and yoga—just because I love it. I also
            enjoy cooking and baking with my girlfriend, reading, watching
            football, and practicing on my DJ set at home.
          </p>
        </div>
      </div>
    </Section>
  );
};
