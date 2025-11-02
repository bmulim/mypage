# ⚡ Guia Completo: Configuração EmailJS

Seu formulário está configurado com EmailJS! Agora siga estes passos para ativar o envio automático de emails.

## 🚀 Passo a Passo Completo

### **1. Criar Conta no EmailJS**

1. Acesse: https://www.emailjs.com
2. Clique em **"Sign Up"**
3. Crie conta com seu email
4. Confirme o email

### **2. Conectar Gmail**

1. No dashboard, vá em **"Email Services"**
2. Clique **"Add New Service"**
3. Escolha **"Gmail"**
4. Clique **"Connect Account"**
5. Autorize acesso ao Gmail `bruno.mulim.prog@gmail.com`
6. **COPIE O SERVICE ID** (exemplo: `service_abc123`)

### **3. Criar Template de Email**

1. Vá em **"Email Templates"**
2. Clique **"Create New Template"**
3. Cole este template:

**Subject:**

```
[PORTFÓLIO] {{subject}}
```

**Content:**

```
🚀 Nova mensagem do portfólio!

👤 Nome: {{from_name}}
📧 Email: {{from_email}}
📋 Assunto: {{subject}}

💬 Mensagem:
{{message}}

---
⏰ Enviado em: {{sent_date}}
🌐 Via: Portfólio Bruno Mulim
```

4. **COPIE O TEMPLATE ID** (exemplo: `template_xyz789`)

### **4. Pegar Public Key**

1. Vá em **"Account"** → **"General"**
2. **COPIE A PUBLIC KEY** (exemplo: `abcdef123456`)

### **5. Configurar no Código**

Edite o arquivo: `/src/lib/emailjs-config.ts`

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123", // ✅ Seu Service ID real
  TEMPLATE_ID: "template_xyz789", // ✅ Seu Template ID real
  PUBLIC_KEY: "abcdef123456", // ✅ Sua Public Key real
};
```

## ✅ Como Testar

1. **Salve** o arquivo de configuração
2. **Reinicie** o servidor (`npm run dev`)
3. **Acesse** `/contact`
4. **Preencha** o formulário
5. **Clique** "Enviar Mensagem"
6. **Verifique** seu Gmail!

## 🎯 O que Acontece Agora

**✅ Sucesso (EmailJS funcionando):**

- Mensagem: "✅ Mensagem enviada automaticamente!"
- Email chega instantaneamente no Gmail
- Sem intervenção do usuário

**⚠️ Fallback (se EmailJS falhar):**

- Mensagem: "⚠️ Usando método alternativo..."
- Abre cliente de email como backup
- Sistema sempre funciona!

## 🔧 Troubleshooting

**Problema:** "Erro EmailJS"
**Solução:** Verifique se os IDs estão corretos

**Problema:** Email não chega
**Solução:** Verifique spam/lixo eletrônico

**Problema:** "Service not found"
**Solução:** Confirme se o Gmail está conectado

## 📊 Limites Gratuitos EmailJS

- ✅ **200 emails/mês** (suficiente para portfólio)
- ✅ **Sem domínio** necessário
- ✅ **Templates ilimitados**
- ✅ **Suporte completo**

## 🎉 Resultado Final

Depois da configuração, seu formulário terá:

- ✅ **Envio automático** instantâneo
- ✅ **Emails formatados** profissionalmente
- ✅ **Fallback confiável** sempre funcional
- ✅ **Zero configuração** de servidor
- ✅ **Totalmente gratuito** para uso pessoal

**Agora é só configurar e ver a mágica acontecer!** 🪄✨
