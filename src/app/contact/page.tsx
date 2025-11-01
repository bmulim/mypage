export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary fade-in mb-8 text-center text-4xl font-bold">
          Entre em Contato
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Formulário de Contato */}
          <div className="bg-card text-card-foreground border-border fade-in-up animate-delay-200 hover:shadow-primary/20 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div className="fade-in-up animate-delay-300">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-border bg-input text-foreground focus:ring-primary hover:border-primary/50 w-full rounded-lg border p-3 transition-all duration-300 focus:border-transparent focus:ring-2"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="fade-in-up animate-delay-400">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-border bg-input text-foreground focus:ring-primary hover:border-primary/50 w-full rounded-lg border p-3 transition-all duration-300 focus:border-transparent focus:ring-2"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="fade-in-up animate-delay-500">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="border-border bg-input text-foreground focus:ring-primary hover:border-primary/50 w-full rounded-lg border p-3 transition-all duration-300 focus:border-transparent focus:ring-2"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="fade-in-up animate-delay-600">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="border-border bg-input text-foreground focus:ring-primary hover:border-primary/50 w-full resize-none rounded-lg border p-3 transition-all duration-300 focus:border-transparent focus:ring-2"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:shadow-primary/30 fade-in-up animate-delay-700 w-full rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="fade-in-up animate-delay-400 space-y-6">
            <div className="bg-card text-card-foreground border-border hover:shadow-primary/20 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">
                Informações de Contato
              </h3>
              <div className="space-y-3">
                <div className="hover:text-primary flex items-center transition-colors duration-300">
                  <span className="text-primary mr-3">📧</span>
                  <span>bruno@exemplo.com</span>
                </div>
                <div className="hover:text-primary flex items-center transition-colors duration-300">
                  <span className="text-primary mr-3">📱</span>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="hover:text-primary flex items-center transition-colors duration-300">
                  <span className="text-primary mr-3">📍</span>
                  <span>São Paulo, SP - Brasil</span>
                </div>
                <div className="hover:text-primary flex items-center transition-colors duration-300">
                  <span className="text-primary mr-3">💼</span>
                  <span>LinkedIn: /in/brunogusmao</span>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground border-border hover:shadow-primary/20 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">Disponibilidade</h3>
              <p className="text-card-foreground/80 mb-4">
                Estou disponível para novos projetos e consultorias. Respondo
                todas as mensagens em até 24 horas.
              </p>
              <div className="space-y-2">
                <div className="hover:text-primary flex justify-between transition-colors duration-300">
                  <span>Segunda - Sexta:</span>
                  <span className="text-primary">9h às 18h</span>
                </div>
                <div className="hover:text-primary flex justify-between transition-colors duration-300">
                  <span>Sábado:</span>
                  <span className="text-primary">9h às 14h</span>
                </div>
                <div className="hover:text-primary flex justify-between transition-colors duration-300">
                  <span>Domingo:</span>
                  <span className="text-muted-foreground">Indisponível</span>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground border-border hover:shadow-primary/20 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="bg-accent text-accent-foreground hover:shadow-primary/20 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="bg-accent text-accent-foreground hover:shadow-primary/20 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="bg-accent text-accent-foreground hover:shadow-primary/20 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="bg-accent text-accent-foreground hover:shadow-primary/20 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
