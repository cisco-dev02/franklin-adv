export const firm = {
  name: 'Franklin Santiago Advocacia',
  attorney: 'Franklin Bezerra Santiago',
  bar: 'OAB/RN 24.550',
  city: 'Natal/RN',
  whatsapp: '5584992243872',
  phone: '(84) 99224-3872',
  email: 'franklinbezerra575@gmail.com',
};

export type Area = 'trabalhista' | 'familia';
export type Service = { title: string; description: string; icon: string; topic: string };
export type Landing = {
  area: Area; label: string; eyebrow: string; title: string; subheading: string;
  sectionTitle: string; sectionDescription: string; services: Service[];
  highlightTitle: string; highlightDescription: string; highlights: string[];
  faq: { question: string; answer: string }[];
  finalTitle: string; metaTitle: string; metaDescription: string;
};

export const landings: Record<Area, Landing> = {
  trabalhista: {
    area: 'trabalhista', label: 'Direito Trabalhista', eyebrow: 'ATUAÇÃO TRABALHISTA · NATAL/RN',
    title: 'Seus direitos trabalhistas merecem atenção e orientação jurídica.',
    subheading: 'Atuação em verbas rescisórias, contratos de trabalho, jornada, rescisão indireta e demais questões trabalhistas. Atendimento individualizado em Natal/RN e online.',
    sectionTitle: 'Áreas de atuação trabalhista',
    sectionDescription: 'Informações e acompanhamento jurídico sobre temas relacionados às relações de emprego.',
    services: [
      {title:'Verbas rescisórias',description:'Orientação sobre direitos e obrigações no encerramento do contrato de trabalho.',icon:'file',topic:'verbas rescisórias'},
      {title:'Rescisão indireta',description:'Análise das hipóteses previstas na legislação trabalhista.',icon:'scale',topic:'rescisão indireta'},
      {title:'Horas extras e jornada',description:'Questões sobre jornada, compensação e horas extraordinárias.',icon:'clock',topic:'horas extras e jornada'},
      {title:'Vínculo de emprego',description:'Orientação sobre registro profissional e reconhecimento de vínculo.',icon:'briefcase',topic:'vínculo de emprego'},
      {title:'Assédio moral',description:'Informações jurídicas sobre condutas no ambiente de trabalho.',icon:'shield',topic:'assédio moral no trabalho'},
      {title:'Insalubridade e periculosidade',description:'Análise dos requisitos legais dos adicionais trabalhistas.',icon:'hardhat',topic:'insalubridade ou periculosidade'},
      {title:'Acidente de trabalho',description:'Orientação sobre consequências jurídicas e direitos aplicáveis.',icon:'heart',topic:'acidente de trabalho'},
      {title:'FGTS e obrigações contratuais',description:'Informações sobre depósitos e deveres do contrato de trabalho.',icon:'wallet',topic:'FGTS'},
    ],
    highlightTitle: 'Informação jurídica em cada etapa da relação de trabalho.',
    highlightDescription: 'A legislação estabelece direitos e deveres relativos à contratação, execução e encerramento dos contratos. A orientação considera as particularidades de cada situação.',
    highlights: ['Contratação e registro profissional','Jornada e remuneração','Alterações no contrato','Encerramento do vínculo'],
    faq: [
      {question:'O que são verbas rescisórias?',answer:'São parcelas que podem ser devidas no encerramento do contrato de trabalho. A composição depende da modalidade de desligamento, do contrato e de outras circunstâncias.'},
      {question:'Como funciona a rescisão indireta?',answer:'A CLT prevê hipóteses em que determinadas faltas graves do empregador podem fundamentar o pedido de rescisão indireta. O enquadramento exige análise dos fatos e das provas.'},
      {question:'Como são avaliadas as horas extras?',answer:'A análise considera jornada efetivamente cumprida, controles de ponto, acordo de compensação e normas legais ou coletivas aplicáveis.'},
      {question:'Qual é o prazo para ajuizar uma ação trabalhista?',answer:'Em regra, a pretensão relativa a créditos trabalhistas está sujeita à prescrição de cinco anos, observado o limite de dois anos após o término do contrato, com possíveis particularidades.'},
      {question:'Quanto tempo existe para o pagamento da rescisão?',answer:'Em regra, o art. 477, § 6º, da CLT prevê o prazo de dez dias contados do término do contrato para pagamento das verbas rescisórias e entrega dos documentos pertinentes.'},
      {question:'Quando pode haver reconhecimento de vínculo de emprego?',answer:'O vínculo depende da presença dos requisitos previstos nos arts. 2º e 3º da CLT, considerados os fatos e as provas da prestação de serviços.'},
      {question:'Como funciona o adicional de insalubridade?',answer:'O adicional depende do enquadramento nos requisitos legais e regulamentares e, normalmente, da avaliação técnica das condições de trabalho.'},
      {question:'O atendimento pode ser realizado online?',answer:'Sim. O escritório oferece atendimento online e presencial em Natal/RN, conforme disponibilidade e necessidades do atendimento.'},
    ],
    finalTitle:'Orientação trabalhista com atendimento individualizado.',
    metaTitle:'Advogado Trabalhista em Natal/RN | Franklin Santiago Advocacia',
    metaDescription:'Orientação jurídica trabalhista em Natal/RN: verbas rescisórias, rescisão indireta, horas extras, vínculo e FGTS. Atendimento presencial e online.',
  },
  familia: {
    area:'familia',label:'Direito de Família',eyebrow:'DIREITO DE FAMÍLIA · NATAL/RN',
    title:'Questões de família exigem cuidado, orientação e segurança jurídica.',
    subheading:'Atendimento jurídico em divórcio, pensão alimentícia, guarda, convivência familiar, união estável e inventário, com discrição e análise individualizada.',
    sectionTitle:'Orientação jurídica para diferentes situações familiares',
    sectionDescription:'Informações e acompanhamento jurídico em questões familiares, com atenção às particularidades de cada situação.',
    services: [
      {title:'Divórcio',description:'Orientação sobre dissolução do casamento e suas consequências jurídicas.',icon:'file',topic:'divórcio'},
      {title:'Pensão alimentícia',description:'Informações sobre fixação, revisão, cobrança e exoneração de alimentos.',icon:'heart',topic:'pensão alimentícia'},
      {title:'Guarda dos filhos',description:'Análise jurídica das modalidades de guarda e do melhor interesse de crianças e adolescentes.',icon:'users',topic:'guarda dos filhos'},
      {title:'Convivência familiar',description:'Orientação sobre regulamentação e revisão do regime de convivência.',icon:'calendar',topic:'convivência familiar'},
      {title:'União estável',description:'Atuação em reconhecimento e dissolução de união estável.',icon:'scale',topic:'união estável'},
      {title:'Partilha de bens',description:'Orientação sobre regimes patrimoniais e divisão de bens quando cabível.',icon:'home',topic:'partilha de bens'},
      {title:'Inventário',description:'Informações sobre inventário judicial e extrajudicial.',icon:'file',topic:'inventário'},
      {title:'Acordos familiares',description:'Acompanhamento jurídico na formalização de acordos e ajustes familiares.',icon:'shield',topic:'acordos familiares'},
    ],
    highlightTitle:'Questões familiares merecem atenção jurídica cuidadosa.',
    highlightDescription:'Cada relação familiar possui particularidades. A orientação jurídica busca esclarecer possibilidades previstas em lei, sem antecipar conclusões sobre situações individuais.',
    highlights:['Relações familiares','Direitos e responsabilidades','Organização patrimonial','Soluções juridicamente adequadas'],
    faq:[
      {question:'O divórcio depende da concordância de ambos?',answer:'A dissolução do casamento não depende da concordância de ambos os cônjuges, mas o procedimento e as questões acessórias variam de acordo com a situação.'},
      {question:'Como é estabelecida a pensão alimentícia?',answer:'A fixação considera as necessidades de quem recebe, a possibilidade de quem presta e as demais circunstâncias legalmente relevantes.'},
      {question:'Como funciona a guarda compartilhada?',answer:'A guarda compartilhada envolve a responsabilização conjunta pelas decisões relativas aos filhos, de acordo com os requisitos legais e o melhor interesse da criança ou adolescente.'},
      {question:'Quando o inventário pode ser extrajudicial?',answer:'O inventário em cartório depende do preenchimento dos requisitos legais e normativos aplicáveis. A viabilidade deve ser verificada conforme o caso concreto.'},
      {question:'É possível revisar o valor da pensão alimentícia?',answer:'A revisão pode ser discutida diante de alterações relevantes das necessidades de quem recebe ou das possibilidades de quem presta, conforme o art. 1.699 do Código Civil.'},
      {question:'Como se organiza a convivência familiar?',answer:'A organização da convivência considera o melhor interesse da criança ou do adolescente e as particularidades do núcleo familiar.'},
      {question:'A saída da residência implica perda automática do direito aos bens?',answer:'Não. Os direitos patrimoniais dependem do regime de bens, das circunstâncias e das normas aplicáveis, não da saída da residência por si só.'},
      {question:'É possível realizar atendimento online?',answer:'Sim. O atendimento pode ocorrer online ou presencialmente em Natal/RN, conforme a necessidade e disponibilidade.'},
    ],
    finalTitle:'Atendimento jurídico com discrição e clareza.',
    metaTitle:'Advogado de Família em Natal/RN | Franklin Santiago Advocacia',
    metaDescription:'Orientação jurídica em Direito de Família em Natal/RN: divórcio, pensão alimentícia, guarda, união estável e inventário. Atendimento online.',
  }
};

export function whatsappUrl(topic?: string) {
  const message = topic
    ? `Olá, gostaria de informações sobre atendimento jurídico em ${topic}.`
    : 'Olá, gostaria de informações sobre atendimento jurídico.';
  return `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(message)}`;
}
