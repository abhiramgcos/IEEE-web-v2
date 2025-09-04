import Image from "next/image";
import BackgroundEffects from "./background-effects";
import ScrollReveal from "./scrollrevel";

const AboutSection = () => {
  return (
    <div id="about">
      <section className="relative bg-foreground text-background py-20 overflow-hidden">
        <BackgroundEffects />
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex justify-end">
            <ScrollReveal
              textClassName="text-7xl md:text-6xl font-bold about-us-heading-dark leading-tight"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=60%"
              scrollEnd="bottom bottom-=60%"
              stagger={0.1}
            >
              About Us
            </ScrollReveal>
          </div>
          <p className="text-lg md:text-xl max-w-4xl ml-auto text-right mt-8">
            IEEE Student Branch PRC is a dynamic community of students
            passionate about technology, innovation, and professional growth.
            Affiliated with the global IEEE organization, our branch aims to
            foster technical skills, leadership development, and collaboration
            through workshops, seminars, and industry-driven initiatives. We
            strive to bridge the gap between academia and industry, empowering
            students to become future-ready engineers and innovators.
          </p>
        </div>
      </section>

      <section
        id="chapters"
        className="relative bg-background text-foreground py-20 overflow-hidden"
      >
        <BackgroundEffects />
        <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <ScrollReveal
              textClassName="text-7xl md:text-6xl font-bold about-us-heading mb-8 leading-tight"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
            >
              Chapters
            </ScrollReveal>
            <p className="text-lg md:text-xl ">
              The IEEE Circuits and Systems Society (CASS) Chapter at IEEE SB
              PRC focuses on innovation and learning in the fields of circuits,
              systems, and signal processing. It provides students with
              opportunities to grow through workshops, tech talks, and hands-on
              projects, encouraging both theoretical understanding and practical
              application in modern engineering challenges.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/image/cas.png"
              alt="CAS Logo"
              width={300}
              height={150}
              data-ai-hint="CAS society logo"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-foreground text-background py-20 overflow-hidden">
        <BackgroundEffects />
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex justify-end">
            <ScrollReveal
              textClassName="text-7xl md:text-6xl font-bold about-us-heading-dark mb-8 leading-tight"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
            >
              Why IEEE?
            </ScrollReveal>
          </div>
          <p className="text-lg md:text-xl max-w-4xl ml-auto text-right">
            The Institute of Electrical and Electronics Engineers (IEEE) is the
            world's largest technical professional organization dedicated to
            advancing technology for humanity. With members in over 160
            countries, IEEE promotes innovation through conferences, research
            publications, standards, and educational programs across various
            engineering and technology fields.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
