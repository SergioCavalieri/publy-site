import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Leia os Termos de Uso do Publy — condições para utilização do sistema de pedidos para bares e pubs.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/termos` },
};

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: 12, color: "#888" }}>{children}</p>
);
const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ marginBottom: 6, paddingLeft: 4, color: "#888" }}>{children}</li>
);

export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Documento legal"
      updatedAt="23 de maio de 2026"
      sections={[
        {
          title: "Aceitação dos Termos",
          content: (
            <>
              <P>Ao acessar ou utilizar o sistema Publy ("Serviço"), você ("Cliente") concorda com estes Termos de Uso. Caso não concorde com qualquer disposição, não utilize o Serviço.</P>
              <P>O Publy é um sistema de gestão de pedidos, cardápio digital e autoatendimento via QR Code desenvolvido e operado por Publy Tecnologia Ltda., com sede no Brasil.</P>
              <P>Estes Termos aplicam-se a todos os usuários do Serviço, incluindo administradores, funcionários e clientes finais do estabelecimento.</P>
            </>
          ),
        },
        {
          title: "Descrição do Serviço",
          content: (
            <>
              <P>O Publy oferece as seguintes funcionalidades principais:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Cardápio digital acessível via QR Code por mesa",
                  "Recebimento e gestão de pedidos em tempo real",
                  "Painel kanban para acompanhamento da cozinha e atendimento",
                  "Fechamento de contas e controle de mesas",
                  "Relatórios e analytics de vendas",
                  "Controle de estoque e produtos",
                ].map((item) => <Li key={item}>{item}</Li>)}
              </ul>
              <P>O Serviço é oferecido como Software como Serviço (SaaS), acessível via navegador web, sem necessidade de instalação de aplicativos adicionais.</P>
            </>
          ),
        },
        {
          title: "Cadastro e Conta",
          content: (
            <>
              <P>Para utilizar o Publy, é necessário criar uma conta fornecendo informações verídicas e atualizadas. Você é responsável por:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Manter a confidencialidade de suas credenciais de acesso",
                  "Todas as atividades realizadas com sua conta",
                  "Notificar imediatamente qualquer uso não autorizado",
                  "Manter os dados cadastrais atualizados",
                ].map((item) => <Li key={item}>{item}</Li>)}
              </ul>
              <P>É proibido compartilhar credenciais de acesso com terceiros não autorizados ou criar contas falsas.</P>
            </>
          ),
        },
        {
          title: "Planos, Preços e Pagamentos",
          content: (
            <>
              <P>O Publy oferece planos de assinatura mensais com diferentes limites de mesas e funcionalidades. Os preços vigentes estão disponíveis na página de Planos do site.</P>
              <P><strong>Trial gratuito:</strong> Todos os novos clientes têm direito a 14 (quatorze) dias de uso gratuito, sem necessidade de cadastro de cartão de crédito. Ao fim do trial, a assinatura é convertida automaticamente ao plano escolhido, mediante confirmação de pagamento.</P>
              <P><strong>Cobrança:</strong> O pagamento é realizado mensalmente, antecipado, via Pix, boleto bancário ou cartão de crédito. O vencimento é calculado a partir da data de início da assinatura paga.</P>
              <P><strong>Inadimplência:</strong> O acesso ao Serviço poderá ser suspenso após 5 (cinco) dias de atraso no pagamento, sem prejuízo da cobrança dos valores devidos.</P>
              <P><strong>Reajuste:</strong> Os preços poderão ser reajustados com aviso prévio de 30 (trinta) dias por e-mail.</P>
            </>
          ),
        },
        {
          title: "Cancelamento",
          content: (
            <>
              <P>O Cliente pode cancelar a assinatura a qualquer momento, sem multa, diretamente pelo painel administrativo ou por e-mail para contato@publy.tech.</P>
              <P>O cancelamento tem efeito ao final do período já pago. Não há reembolso proporcional de valores pagos, exceto nos casos previstos pelo Código de Defesa do Consumidor (Lei 8.078/1990).</P>
              <P>Após o cancelamento, os dados do estabelecimento ficam disponíveis para exportação por 30 (trinta) dias. Após esse prazo, poderão ser excluídos definitivamente.</P>
            </>
          ),
        },
        {
          title: "Uso Permitido e Proibições",
          content: (
            <>
              <P>O Serviço deve ser utilizado exclusivamente para fins lícitos e em conformidade com a legislação brasileira. É expressamente proibido:</P>
              <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                {[
                  "Utilizar o sistema para atividades ilegais ou fraudulentas",
                  "Tentar acessar dados de outros clientes ou sistemas internos do Publy",
                  "Fazer engenharia reversa, descompilar ou modificar o software",
                  "Revender ou sublicenciar o acesso ao Serviço sem autorização",
                  "Sobrecarregar intencionalmente a infraestrutura do sistema",
                  "Publicar conteúdo ofensivo, difamatório ou ilegal no cardápio",
                ].map((item) => <Li key={item}>{item}</Li>)}
              </ul>
            </>
          ),
        },
        {
          title: "Disponibilidade e Suporte",
          content: (
            <>
              <P>O Publy envidar esforços para manter o Serviço disponível 24 horas por dia, 7 dias por semana. No entanto, não garantimos disponibilidade ininterrupta, podendo haver interrupções para manutenção, atualizações ou por fatores externos.</P>
              <P>O suporte ao cliente é prestado via e-mail (contato@publy.tech) em dias úteis, horário comercial de Brasília (GMT-3). Planos Pró e Pró Max possuem suporte prioritário.</P>
            </>
          ),
        },
        {
          title: "Propriedade Intelectual",
          content: (
            <>
              <P>O software Publy, incluindo código-fonte, design, marca, logotipo e documentação, são propriedade exclusiva da Publy Tecnologia Ltda. e protegidos pela legislação de propriedade intelectual brasileira.</P>
              <P>O Cliente retém a propriedade de todos os dados inseridos no sistema (produtos, pedidos, clientes), podendo exportá-los a qualquer momento.</P>
            </>
          ),
        },
        {
          title: "Limitação de Responsabilidade",
          content: (
            <>
              <P>O Publy não se responsabiliza por perdas indiretas, lucros cessantes ou danos consequentes decorrentes do uso ou impossibilidade de uso do Serviço.</P>
              <P>A responsabilidade total do Publy perante o Cliente, em qualquer hipótese, fica limitada ao valor pago pelo Cliente nos últimos 3 (três) meses de assinatura.</P>
            </>
          ),
        },
        {
          title: "Alterações nos Termos",
          content: (
            <>
              <P>Podemos atualizar estes Termos periodicamente. Alterações materiais serão comunicadas por e-mail com pelo menos 15 (quinze) dias de antecedência.</P>
              <P>O uso continuado do Serviço após a vigência das alterações constitui aceitação dos novos Termos.</P>
            </>
          ),
        },
        {
          title: "Foro e Lei Aplicável",
          content: (
            <>
              <P>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São José dos Campos/SP para dirimir quaisquer controvérsias, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</P>
              <P>Dúvidas sobre estes Termos podem ser enviadas para: <strong>contato@publy.tech</strong></P>
            </>
          ),
        },
      ]}
    />
  );
}
