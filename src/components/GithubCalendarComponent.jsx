import ContributionGraph from "@/components/CoontributionGraph";
import { Slide } from "@/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section className="mt-24 flex flex-col justify-center items-center">
      <Slide delay={0.16} className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}
