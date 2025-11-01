export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-primary animate-fade-in mb-8 text-center text-4xl font-bold">
          Portfólio
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card text-card-foreground border-border hover:shadow-primary/20 animate-fade-in-up animation-delay-200 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-primary/20 group-hover:bg-primary/30 mb-4 flex h-48 items-center justify-center rounded-lg transition-colors duration-300">
              <span className="text-primary font-semibold">Projeto 1</span>
            </div>
            <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors duration-300">
              E-commerce Moderno
            </h3>
            <p className="text-card-foreground/80 mb-4">
              Plataforma completa de e-commerce com painel administrativo e
              integração com gateways de pagamento.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                React
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                Node.js
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                MongoDB
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground border-border hover:shadow-secondary/20 animate-fade-in-up animation-delay-400 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-secondary/20 group-hover:bg-secondary/30 mb-4 flex h-48 items-center justify-center rounded-lg transition-colors duration-300">
              <span className="text-secondary-foreground font-semibold">
                Projeto 2
              </span>
            </div>
            <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors duration-300">
              App de Delivery
            </h3>
            <p className="text-card-foreground/80 mb-4">
              Aplicativo mobile para delivery com tracking em tempo real e
              sistema de pagamento integrado.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                React Native
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                Firebase
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                Maps API
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground border-border hover:shadow-accent/20 animate-fade-in-up animation-delay-600 group transform rounded-lg border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-accent/20 group-hover:bg-accent/30 mb-4 flex h-48 items-center justify-center rounded-lg transition-colors duration-300">
              <span className="text-accent-foreground font-semibold">
                Projeto 3
              </span>
            </div>
            <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors duration-300">
              Dashboard Analytics
            </h3>
            <p className="text-card-foreground/80 mb-4">
              Dashboard avançado para análise de dados com gráficos interativos
              e relatórios customizáveis.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                Vue.js
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                D3.js
              </span>
              <span className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200">
                Python
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground border-border rounded-lg border p-6">
            <div className="bg-primary/20 mb-4 flex h-48 items-center justify-center rounded-lg">
              <span className="text-primary font-semibold">Projeto 4</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Sistema de CRM</h3>
            <p className="text-card-foreground/80 mb-4">
              Sistema completo de gerenciamento de relacionamento com clientes
              para empresas de médio porte.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                Angular
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                .NET
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                SQL Server
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground border-border rounded-lg border p-6">
            <div className="bg-secondary/20 mb-4 flex h-48 items-center justify-center rounded-lg">
              <span className="text-secondary-foreground font-semibold">
                Projeto 5
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">API Microserviços</h3>
            <p className="text-card-foreground/80 mb-4">
              Arquitetura de microserviços escalável com API Gateway e sistema
              de autenticação robusto.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                Docker
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                Kubernetes
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                Redis
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground border-border rounded-lg border p-6">
            <div className="bg-accent/20 mb-4 flex h-48 items-center justify-center rounded-lg">
              <span className="text-accent-foreground font-semibold">
                Projeto 6
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">PWA Educacional</h3>
            <p className="text-card-foreground/80 mb-4">
              Progressive Web App para educação online com recursos offline e
              gamificação.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                PWA
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                ServiceWorker
              </span>
              <span className="bg-accent/20 text-accent rounded px-2 py-1 text-sm">
                IndexedDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
