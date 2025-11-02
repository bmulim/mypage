# ProjectCard Component

## Como Usar

O componente `ProjectCard` foi criado para exibir projetos no portfólio de forma reutilizável e customizável.

## Importação

```tsx
import { ProjectCard } from "@/components";
```

## Props

| Prop               | Tipo         | Obrigatório | Descrição                                   |
| ------------------ | ------------ | ----------- | ------------------------------------------- |
| `title`            | `string`     | ✅          | Título do projeto                           |
| `description`      | `string`     | ✅          | Descrição do projeto                        |
| `technologies`     | `string[]`   | ✅          | Array com as tecnologias utilizadas         |
| `image`            | `string`     | ❌          | URL da imagem principal do projeto          |
| `placeholder`      | `string`     | ❌          | Texto mostrado quando não há nenhuma imagem |
| `placeholderImage` | `string`     | ❌          | Imagem de capa/placeholder do projeto       |
| `animation`        | `string`     | ❌          | Classes CSS para animação                   |
| `href`             | `string`     | ❌          | Link externo (GitHub, demo, etc.)           |
| `onClick`          | `() => void` | ❌          | Função chamada ao clicar no card            |

## Exemplos de Uso

### Projeto Básico

```tsx
<ProjectCard
  title="Meu Projeto"
  description="Descrição do que faz o projeto"
  technologies={["React", "TypeScript", "Node.js"]}
/>
```

### Projeto com Imagem

````tsx
### Projeto com Imagem de Capa
```tsx
<ProjectCard
  title="Meu App"
  description="Aplicativo incrível"
  technologies={["React", "TypeScript"]}
  placeholderImage="/covers/app-cover.jpg"
/>
````

### Projeto com Imagem Principal

```tsx
<ProjectCard
  title="E-commerce App"
  description="Loja online completa"
  technologies={["Next.js", "Stripe", "PostgreSQL"]}
  image="/projects/ecommerce.jpg"
/>
```

### Projeto com Link

```tsx
<ProjectCard
  title="Dashboard Analytics"
  description="Dashboard com métricas em tempo real"
  technologies={["React", "Chart.js", "API"]}
  href="https://github.com/seu-usuario/dashboard"
/>
```

````

### Projeto com Link

```tsx
<ProjectCard
  title="Dashboard Analytics"
  description="Dashboard com métricas em tempo real"
  technologies={["React", "Chart.js", "API"]}
  href="https://github.com/seu-usuario/dashboard"
/>
````

### Projeto com Animação

```tsx
<ProjectCard
  title="App Mobile"
  description="Aplicativo para dispositivos móveis"
  technologies={["React Native", "Firebase"]}
  animation="animate-fade-in-up animation-delay-200"
/>
```

## Diferença entre Imagens

### `image` vs `placeholderImage`

- **`image`**: Imagem principal do projeto (screenshot, demo, resultado final)
- **`placeholderImage`**: Imagem de capa/placeholder (logo, icon, preview simples)

**Prioridade de exibição**:

1. Se `image` existe → mostra `image`
2. Se `placeholderImage` existe → mostra `placeholderImage`
3. Se nenhuma existe → mostra texto `placeholder`

### Projeto com Ação Personalizada

```tsx
<ProjectCard
  title="Sistema Interno"
  description="Sistema privado da empresa"
  technologies={["Vue.js", "Laravel"]}
  onClick={() => openModal("project-details")}
/>
```

## Como Adicionar Novos Projetos

1. **Edite o arquivo**: `/src/app/portfolio/page.tsx`
2. **Adicione um novo objeto** no array `projects`:

```tsx
const projects = [
  // ... projetos existentes
  {
    title: "Seu Novo Projeto",
    description: "Descrição detalhada do projeto...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    placeholder: "Preview Text", // opcional
    image: "/images/projeto.jpg", // opcional
    href: "https://github.com/user/repo", // opcional
  },
];
```

## Estrutura de Pastas para Imagens

Para organizar as imagens dos projetos:

```
public/
├── projects/           # Imagens principais (screenshots, demos)
│   ├── ecommerce.jpg
│   ├── dashboard.png
│   └── mobile-app.webp
└── covers/            # Imagens de capa/placeholder
    ├── app-cover.jpg
    ├── web-cover.png
    └── default-cover.svg
```

**Referências no código**:

- Imagem principal: `image: "/projects/ecommerce.jpg"`
- Imagem de capa: `placeholderImage: "/covers/app-cover.jpg"`

## Customização de Estilos

O componente usa as classes de tema definidas em `globals.css`:

- `bg-card` - Fundo do card
- `text-primary` - Cor primária (hover no título)
- `bg-accent/20` - Fundo das tags de tecnologia

## Animações Disponíveis

- `animate-fade-in`
- `animate-fade-in-up`
- `animate-slide-in-left`
- `animate-slide-in-right`
- Delays: `animation-delay-200`, `animation-delay-400`, etc.

## Comportamentos do Card

- **Sem `href` nem `onClick`**: Card estático
- **Com `href`**: Abre link em nova aba
- **Com `onClick`**: Executa função personalizada
- **Hover**: Escala ligeiramente e adiciona sombra
- **Tecnologias**: Hover muda a cor de fundo
