import { ServiceCard } from "@/components";

export default function ServicesPage() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Criação de sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: [
        "Sites institucionais",
        "E-commerce",
        "Aplicações web complexas",
        "PWAs (Progressive Web Apps)",
      ],
    },
    {
      title: "Consultoria Técnica",
      description:
        "Assessoria especializada em tecnologia e arquitetura de sistemas.",
      features: [
        "Arquitetura de sistemas",
        "Code review",
        "Otimização de performance",
        "Migração de tecnologias",
      ],
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary animate-fade-in mb-8 text-4xl font-bold">
          Serviços
        </h1>
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              animation={`animate-fade-in-up animation-delay-${200 + index * 200}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
