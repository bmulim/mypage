import { NextRequest, NextResponse } from "next/server";

// Função para simular envio de email (você pode substituir por um serviço real)
async function sendEmail(to: string, subject: string, content: string) {
  // Aqui você pode integrar com serviços como:
  // - Resend (recomendado): https://resend.com
  // - SendGrid: https://sendgrid.com
  // - Nodemailer com Gmail/SMTP
  // - EmailJS (frontend)

  // Por enquanto, vamos simular o envio e logar no console
  console.log(`📧 Email enviado para: ${to}`);
  console.log(`📋 Assunto: ${subject}`);
  console.log(`📄 Conteúdo:\n${content}`);

  // Retorna sucesso (simula envio bem-sucedido)
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 },
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Criar o conteúdo do email
    const emailContent = `
📬 NOVA MENSAGEM DE CONTATO - PORTFÓLIO

👤 Nome: ${name}
📧 Email: ${email}
📋 Assunto: ${subject}

💬 Mensagem:
${message}

---
⏰ Enviado em: ${new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

🔗 Responder para: ${email}
    `.trim();

    // Enviar o email
    const emailSent = await sendEmail(
      "bruno.mulim.prog@gmail.com",
      `[PORTFÓLIO] ${subject}`,
      emailContent,
    );

    if (!emailSent) {
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 },
      );
    }

    // Retorna sucesso
    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Retornarei em breve.",
    });
  } catch (error) {
    console.error("❌ Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
