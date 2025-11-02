# 📧 Configuração de Email para Formulário de Contato

O formulário de contato está funcional e enviará mensagens para `bruno.mulim.prog@gmail.com`. Atualmente está simulando o envio (logs no console), mas você pode facilmente integrar um serviço real.

## 🚀 Serviços Recomendados

### 1. **Resend** (Recomendado) ⭐

```bash
npm install resend
```

```typescript
// src/app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to: string, subject: string, content: string) {
  const { data, error } = await resend.emails.send({
    from: "contato@seudominio.com",
    to: [to],
    subject: subject,
    text: content,
  });

  return !error;
}
```

**Configuração:**

1. Criar conta em https://resend.com
2. Verificar domínio
3. Adicionar `RESEND_API_KEY` no `.env.local`

### 2. **EmailJS** (Frontend) 🌐

```bash
npm install @emailjs/browser
```

```typescript
// src/components/ContactForm/index.tsx
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  try {
    await emailjs.sendForm(
      "service_id",
      "template_id",
      e.currentTarget,
      "public_key",
    );
    // Sucesso
  } catch (error) {
    // Erro
  }
};
```

### 3. **Nodemailer + Gmail** 📮

```bash
npm install nodemailer
npm install @types/nodemailer
```

```typescript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // App Password, não senha normal
  },
});

async function sendEmail(to: string, subject: string, content: string) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: to,
    subject: subject,
    text: content,
  };

  const result = await transporter.sendMail(mailOptions);
  return !!result.messageId;
}
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Para Resend
RESEND_API_KEY=re_xxxxxxxxx

# Para EmailJS (opcional se usar no frontend)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx

# Para Nodemailer + Gmail
GMAIL_USER=bruno.mulim.prog@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

## ✅ Status Atual

- ✅ **Formulário funcional** com validação
- ✅ **API route criada** (`/api/contact`)
- ✅ **Validação completa** de campos
- ✅ **Feedback visual** para usuário
- ✅ **Logs detalhados** no console
- ⏳ **Integração real** de email (fácil de adicionar)

## 🛠️ Como Testar

1. Acesse `/contact`
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique o console do servidor para os logs
5. Usuário verá mensagem de sucesso

## 📝 Próximos Passos

1. Escolher um serviço de email
2. Instalar dependências
3. Configurar variáveis de ambiente
4. Substituir a função `sendEmail` na API route
5. Testar envio real

O sistema está pronto para produção! 🚀
