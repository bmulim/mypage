import {
  AvailabilityCard,
  ContactForm,
  ContactInfoCard,
  SocialLinksCard,
} from "@/components";

export default function ContactPage() {
  const contactInfo = [
    { icon: "📧", label: "bruno.mulim.prog@gmail.com" },
    { icon: "📱", label: "(21) 99870-8634" },
    { icon: "📍", label: "Rio de Janeiro, RJ - Brasil" },
    { icon: "💼", label: "LinkedIn: /in/bruno-mulim" },
  ];

  const availability = [
    { day: "Segunda - Sexta", time: "9h às 18h", available: true },
    
    { day: " Sábado e Domingo", time: "Indisponível", available: false },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/bmulim" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bruno-mulim/" },
    { name: "Instagram", href: "https://instagram.com/brunopmulim" },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary fade-in mb-8 text-center text-4xl font-bold">
          Entre em Contato
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Formulário de Contato */}
          <ContactForm animation="fade-in-up animate-delay-200" />

          {/* Informações de Contato */}
          <div className="space-y-6 fade-in-up animate-delay-400">
            <ContactInfoCard contacts={contactInfo} />
            
            <AvailabilityCard
              availability={availability}
              description="Estou disponível para novos projetos e consultorias. Respondo todas as mensagens em até 24 horas."
            />
            
            <SocialLinksCard links={socialLinks} />
          </div>
        </div>
      </div>
    </main>
  );
}