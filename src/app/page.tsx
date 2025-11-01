import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-primary animate-fade-in mb-6 text-4xl font-bold md:text-6xl">
            Bem-vindo ao meu portfólio
          </h1>
          <p className="text-foreground/80 animate-fade-in animation-delay-300 mb-8 text-xl md:text-2xl">
            Desenvolvedor Full Stack especializado em soluções modernas e
            inovadoras
          </p>
          <div className="animate-fade-in animation-delay-600 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="bg-primary text-primary-foreground hover:shadow-primary/20 transform rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver Portfólio
            </Link>
            <Link
              href="/contact"
              className="bg-secondary text-secondary-foreground hover:shadow-secondary/20 transform rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card/20 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-foreground animate-slide-up mb-12 text-center text-3xl font-bold md:text-4xl">
            Serviços Oferecidos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card text-card-foreground border-border hover:shadow-card/20 animate-fade-in-up animation-delay-200 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="group-hover:text-primary mb-4 text-xl font-semibold transition-colors duration-300">
                Desenvolvimento Web
              </h3>
              <p className="text-card-foreground/80">
                Criação de websites e aplicações web modernas, responsivas e
                otimizadas.
              </p>
            </div>
            <div className="bg-card text-card-foreground border-border hover:shadow-card/20 animate-fade-in-up animation-delay-400 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="group-hover:text-primary mb-4 text-xl font-semibold transition-colors duration-300">
                Aplicações Mobile
              </h3>
              <p className="text-card-foreground/80">
                Desenvolvimento de aplicativos nativos e híbridos para iOS e
                Android.
              </p>
            </div>
            <div className="bg-card text-card-foreground border-border hover:shadow-card/20 animate-fade-in-up animation-delay-600 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="group-hover:text-primary mb-4 text-xl font-semibold transition-colors duration-300">
                Consultoria Tech
              </h3>
              <p className="text-card-foreground/80">
                Assessoria em tecnologia e arquitetura de sistemas para sua
                empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo do Header Responsivo */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground animate-slide-up mb-6 text-3xl font-bold">
            Header Responsivo Implementado
          </h2>
          <p className="text-foreground/80 animate-fade-in animation-delay-200 mb-8 text-lg">
            O header se adapta automaticamente a diferentes tamanhos de tela:
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-muted animate-slide-in-left animation-delay-400 hover:bg-muted/80 transform rounded-lg p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-muted-foreground mb-3 text-xl font-semibold">
                Desktop & Tablet
              </h3>
              <p className="text-muted-foreground/80">
                Navegação tradicional com links visíveis e logo completo
              </p>
            </div>
            <div className="bg-muted animate-slide-in-right animation-delay-600 hover:bg-muted/80 transform rounded-lg p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-muted-foreground mb-3 text-xl font-semibold">
                Smartphone
              </h3>
              <p className="text-muted-foreground/80">
                Menu hambúrguer com animação suave e overlay de fundo
              </p>
            </div>
          </div>
          <p className="text-foreground/60 animation-delay-1000 mt-8 animate-bounce text-sm">
            💡 Redimensione a janela ou use as ferramentas de desenvolvedor para
            testar a responsividade
          </p>
        </div>
      </section>
    </main>
  );
}
