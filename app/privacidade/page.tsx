import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como o Publy coleta, usa e protege seus dados pessoais em conformidade com a LGPD (Lei 13.709/2018).",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacidade` },
};

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: 12 }}>{children}</p>
);
const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ marginBottom: 6, paddingLeft: 4 }}>{children}</li>
);
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: "inline-block", background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.2)", borderRadius: 6, padding: "2px 9px", fontSize: 12, color: "#4F8EF7", fontWeight: 600, margin: "2px 4px 2px 0" }}>
    {children}
  </span>
);

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Proteção de dados · LGPD"
      updatedAt="23 de maio de 2026"
      sections={[
        {
          title: "Introdução e Controlador",
          content: (
            <>
              <P>A Publy Tecnologia Ltda. ("Publy", "nós") é a <strong>controladora dos dados pessoais</strong> coletados por meio do sistema Publy, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</P>
              <P>Esta Política descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos seus dados pessoais. Ao utilizar o Serviço, você concorda com as práticas descritas aqui.</P>
              <P><strong>Contato do Encarregado (DPO):</strong> privacidade@publy.app</P>
            </>
          ),
        },
        {
          title: "Dados que Coletamos",
          content: (
            <>
              <P><strong>Dados fornecidos pelo Cliente (estabelecimento):</strong></P>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {["Nome completo do responsável","E-mail e telefone","Razão social e CNPJ","Endereço do estabelecimento e de cobrança","Dados de pagamento (processados pelo gateway — não armazenamos dados de cartão)"].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P><strong>Dados gerados pelo uso do sistema:</strong></P>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {["Pedidos realizados e histórico de vendas","Produtos, categorias e preços cadastrados","Logs de acesso e atividade no painel","Dados de monitoramento e disponibilidade da instância"].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P><strong>Dados dos clientes finais do estabelecimento:</strong> O Publy não coleta dados de identificação dos consumidores do bar/restaurante. Pedidos são associados apenas ao número de mesa.</P>
            </>
          ),
        },
        {
          title: "Bases Legais para o Tratamento (LGPD)",
          content: (
            <>
              <P>Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:</P>
              <div style={{ marginBottom: 12 }}>
                <div style={{ marginBottom: 10 }}><Tag>Art. 7º, II — Contrato</Tag><span style={{ fontSize: 14, color: "#555" }}>Dados necessários para execução do contrato de prestação de serviços (cadastro, cobrança, suporte).</span></div>
                <div style={{ marginBottom: 10 }}><Tag>Art. 7º, IX — Legítimo interesse</Tag><span style={{ fontSize: 14, color: "#555" }}>Melhoria do serviço, segurança da plataforma e comunicações relacionadas ao produto.</span></div>
                <div style={{ marginBottom: 10 }}><Tag>Art. 7º, V — Obrigação legal</Tag><span style={{ fontSize: 14, color: "#555" }}>Emissão de notas fiscais e cumprimento de obrigações tributárias.</span></div>
                <div><Tag>Art. 7º, I — Consentimento</Tag><span style={{ fontSize: 14, color: "#555" }}>Comunicações de marketing e novidades do produto (opt-out disponível a qualquer momento).</span></div>
              </div>
            </>
          ),
        },
        {
          title: "Como Usamos seus Dados",
          content: (
            <>
              <P>Seus dados são utilizados exclusivamente para:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Criar e gerenciar sua conta e assinatura",
                  "Processar pagamentos e emitir cobranças",
                  "Prestar suporte técnico e atendimento ao cliente",
                  "Enviar comunicações sobre o Serviço (atualizações, manutenções, alertas)",
                  "Melhorar as funcionalidades do sistema com base no uso agregado (dados anonimizados)",
                  "Cumprir obrigações legais e regulatórias",
                ].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P><strong>Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins publicitários.</strong></P>
            </>
          ),
        },
        {
          title: "Compartilhamento de Dados",
          content: (
            <>
              <P>Podemos compartilhar dados com os seguintes terceiros, estritamente necessários para a operação do Serviço:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Gateway de pagamento (Asaas) — para processamento de cobranças",
                  "Serviços de hospedagem em nuvem — para armazenamento seguro dos dados",
                  "Serviços de e-mail transacional — para envio de notificações do sistema",
                  "Autoridades governamentais — quando exigido por lei ou ordem judicial",
                ].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P>Todos os parceiros são contratados com cláusulas de proteção de dados e estão sujeitos às mesmas obrigações de confidencialidade.</P>
            </>
          ),
        },
        {
          title: "Armazenamento e Segurança",
          content: (
            <>
              <P>Os dados são armazenados em servidores localizados no Brasil ou em países com legislação equivalente de proteção de dados.</P>
              <P>Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Criptografia SSL/TLS em todas as comunicações",
                  "Senhas armazenadas com hash bcrypt (nunca em texto plano)",
                  "Controle de acesso por perfis e autenticação segura",
                  "Backups automáticos com retenção de 30 dias",
                  "Monitoramento contínuo de segurança",
                ].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P>Em caso de incidente de segurança que possa afetar seus dados, notificaremos a ANPD e os titulares afetados no prazo legal.</P>
            </>
          ),
        },
        {
          title: "Retenção dos Dados",
          content: (
            <>
              <P>Mantemos seus dados pelo período necessário para:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                <Li><strong>Durante a assinatura ativa:</strong> todos os dados são mantidos integralmente.</Li>
                <Li><strong>Após cancelamento:</strong> dados ficam disponíveis para exportação por 30 dias, após o que são excluídos dos sistemas ativos.</Li>
                <Li><strong>Dados fiscais e contábeis:</strong> mantidos por 5 anos conforme obrigação legal (Lei 9.394/96 e Código Civil).</Li>
                <Li><strong>Logs de segurança:</strong> mantidos por 6 meses.</Li>
              </ul>
            </>
          ),
        },
        {
          title: "Seus Direitos (LGPD — Art. 18)",
          content: (
            <>
              <P>Como titular de dados, você tem os seguintes direitos que podem ser exercidos a qualquer momento pelo e-mail <strong>privacidade@publy.app</strong>:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Confirmação da existência do tratamento",
                  "Acesso aos dados pessoais tratados",
                  "Correção de dados incompletos, inexatos ou desatualizados",
                  "Anonimização, bloqueio ou eliminação de dados desnecessários",
                  "Portabilidade dos dados a outro fornecedor (mediante solicitação)",
                  "Eliminação dos dados tratados com consentimento",
                  "Informação sobre compartilhamento com terceiros",
                  "Revogação do consentimento a qualquer momento",
                ].map(i => <Li key={i}>{i}</Li>)}
              </ul>
              <P>Responderemos às solicitações em até 15 (quinze) dias úteis.</P>
            </>
          ),
        },
        {
          title: "Cookies e Tecnologias de Rastreamento",
          content: (
            <>
              <P>O Publy utiliza cookies essenciais para o funcionamento do sistema (autenticação e preferências de sessão). Não utilizamos cookies de rastreamento para publicidade.</P>
              <P>Você pode gerenciar cookies nas configurações do seu navegador. A desativação de cookies essenciais pode afetar o funcionamento do sistema.</P>
            </>
          ),
        },
        {
          title: "Alterações nesta Política",
          content: (
            <>
              <P>Podemos atualizar esta Política periodicamente. Alterações relevantes serão comunicadas por e-mail com pelo menos 15 (quinze) dias de antecedência ou mediante aviso no painel do sistema.</P>
              <P>Para dúvidas sobre esta Política de Privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO): <strong>privacidade@publy.app</strong></P>
            </>
          ),
        },
      ]}
    />
  );
}
