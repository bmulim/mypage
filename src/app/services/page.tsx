export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-8 text-4xl font-bold animate-fade-in">Serviços</h1>
        <div className="space-y-8">
          <section className="bg-card text-card-foreground border-border rounded-lg border p-6 animate-fade-in-up animation-delay-200 hover:scale-105 hover:shadow-xl hover:shadow-card/20 transition-all duration-300 group">
            <h2 className="mb-4 text-2xl font-semibold group-hover:text-primary transition-colors duration-300">Desenvolvimento Web</h2>
            <p className="mb-4">
              Criação de sites e aplicações web modernas, responsivas e
              otimizadas para performance.
            </p>
            <ul className="text-card-foreground/80 list-inside list-disc space-y-2">
              <li className="hover:text-primary transition-colors duration-200">Sites institucionais</li>
              <li className="hover:text-primary transition-colors duration-200">E-commerce</li>
              <li className="hover:text-primary transition-colors duration-200">Aplicações web complexas</li>
              <li className="hover:text-primary transition-colors duration-200">PWAs (Progressive Web Apps)</li>
            </ul>
          </section>

          <section className="bg-card text-card-foreground border-border rounded-lg border p-6 animate-fade-in-up animation-delay-400 hover:scale-105 hover:shadow-xl hover:shadow-card/20 transition-all duration-300 group">
            <h2 className="mb-4 text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
              Desenvolvimento Mobile
            </h2>
            <p className="mb-4">
              Aplicativos nativos e híbridos para iOS e Android.
            </p>
            <ul className="text-card-foreground/80 list-inside list-disc space-y-2">
              <li className="hover:text-primary transition-colors duration-200">Apps nativos (Swift/Kotlin)</li>
              <li className="hover:text-primary transition-colors duration-200">React Native</li>
              <li className="hover:text-primary transition-colors duration-200">Flutter</li>
              <li className="hover:text-primary transition-colors duration-200">Ionic</li>
            </ul>
          </section>

          <section className="bg-card text-card-foreground border-border rounded-lg border p-6 animate-fade-in-up animation-delay-600 hover:scale-105 hover:shadow-xl hover:shadow-card/20 transition-all duration-300 group">
            <h2 className="mb-4 text-2xl font-semibold group-hover:text-primary transition-colors duration-300">Consultoria Técnica</h2>
            <p className="mb-4">
              Assessoria especializada em tecnologia e arquitetura de sistemas.
            </p>
            <ul className="text-card-foreground/80 list-inside list-disc space-y-2">
              <li className="hover:text-primary transition-colors duration-200">Arquitetura de sistemas</li>
              <li className="hover:text-primary transition-colors duration-200">Code review</li>
              <li className="hover:text-primary transition-colors duration-200">Otimização de performance</li>
              <li className="hover:text-primary transition-colors duration-200">Migração de tecnologias</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
