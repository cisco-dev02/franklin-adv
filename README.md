# Franklin Santiago Advocacia — Next.js para Vercel

Projeto com **Next.js 15, React 19 e TypeScript**, pronto para hospedagem nativa na **Vercel**.

## Rotas
- `/` — página institucional
- `/trabalhista` — landing page de Direito Trabalhista
- `/familia` — landing page de Direito de Família
- `/privacidade` — texto-base de privacidade, que precisa ser revisado antes da publicação

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Publicar na Vercel

1. Extraia este projeto e envie os arquivos para um repositório GitHub.
2. Na [Vercel](https://vercel.com/new), selecione **Add New → Project**, importe o repositório.
3. Confirme **Framework Preset: Next.js**, **Root Directory: `./`** e **Build Command: `npm run build`** (normalmente detectados automaticamente).
4. Crie a variável de ambiente `NEXT_PUBLIC_SITE_URL` com a URL de produção, por exemplo, `https://seu-projeto.vercel.app` (sem barra final).
5. Clique em **Deploy**. Se o endereço definitivo for alterado depois, atualize a variável e faça novo deploy.
6. Para domínio próprio, utilize **Project → Settings → Domains** e siga as instruções de DNS da Vercel.

Também é possível implantar via Vercel CLI (`vercel` para preview; `vercel --prod` para produção) em uma conta autenticada.

**Não é necessário arquivo `vercel.json`.** A Vercel oferece suporte nativo a Next.js App Router.

## Personalização
- Dados do advogado, telefone e WhatsApp: `lib/content.ts` no objeto `firm`.
- Conteúdo das landing pages e FAQs: `lib/content.ts`, objeto `landings`.
- Estilos: `app/globals.css`.
- Componente dos botões e link WhatsApp: `components/WhatsAppButton.tsx`.
- As fotografias e o logotipo reais não foram incluídos: substitua os monogramas `FS.` por materiais autorizados.

## Google Ads, política de privacidade e conformidade

- Links de WhatsApp possuem texto pré-preenchido por assunto; o clique **não comprova** mensagem efetivamente enviada nem contratação.
- O componente registra o evento `whatsapp_click` no `dataLayer` somente quando esse objeto já está definido. **Não estão instaladas tags de Google Ads, Analytics ou GTM** nem pixels por padrão.
- Revise a política de privacidade conforme o fluxo efetivo de dados e configure consentimento e instrumentos de mensuração aplicáveis antes de adicionar tags.
- Evite encaminhar assuntos jurídicos pessoais a ferramentas de anúncios; não use temas sensíveis como atributos personalizados de audiência.
- A redação evita promessas de resultados e afirmações sobre a condição individual dos visitantes, mas **não garante aprovação** no Google Ads. Também confira os anúncios, segmentação, URL e acesso do AdsBot.
- Direcione os anúncios trabalhistas para `/trabalhista` e os de família para `/familia`, e não para a homepage genérica.

## Verificar antes de anunciar

- Número de WhatsApp, OAB, e-mail e informações profissionais.
- Texto e adequação da política de privacidade.
- Domínio real e variável `NEXT_PUBLIC_SITE_URL`.
- Funcionamento dos links e carregamento em celular.
- Conteúdo jurídico, regras da OAB e políticas do Google Ads vigentes.

## Referências utilizadas na adaptação

- https://franklin-santiago-trabalhista.netlify.app/
- https://franklin-santiago-familia.netlify.app/

A nova versão incorpora as seções específicas observadas nas duas páginas (inclusive informações sobre rescisão contratual, temas familiares e perguntas frequentes), com redação institucional revisada. Os textos não são cópia integral; foram ajustados para comunicação mais neutra em anúncios.

### Fotografia real do advogado

Para reproduzir a apresentação visual das páginas de referência, **adicione a fotografia autorizada** no caminho `public/advogado.jpg`. Os retratos exibidos por CSS utilizarão automaticamente esse arquivo. Se ele não estiver presente, permanecerá visível o monograma institucional; nenhuma fotografia artificial foi criada.

### Observação sobre políticas

Nenhum termo isolado garante aprovação ou reprovação no Google Ads. Avalie a razão da política indicada na conta, as configurações de campanha e o destino.
