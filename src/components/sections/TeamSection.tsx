import lauraImg from "@/assets/images/team-laura.jpg";
import sofiaImg from "@/assets/images/team-sofia.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  tasks: string[];
}

const members: TeamMember[] = [
  {
    name: "Laura Schmidt",
    role: "Empfang & Patientenservice",
    image: lauraImg,
    tasks: ["Terminvereinbarung", "Patientenempfang", "Telefon- und Servicebetreuung"],
  },
  {
    name: "Sofia Meier",
    role: "Medizinische Fachangestellte / Assistenz",
    image: sofiaImg,
    tasks: [
      "Assistenz bei Untersuchungen",
      "Vorbereitung der Behandlungsräume",
      "Betreuung der Patient:innen",
    ],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding section-alt-bg">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Unser Team
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {members.map((m) => (
            <div key={m.name} className="bg-card rounded-2xl overflow-hidden card-elevated">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{m.role}</p>
                <ul className="space-y-1.5">
                  {m.tasks.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
