// Mock datasets used by the mock API

export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

export type Guardian = {
  id: string;
  name: string;
  phone?: string;
  email?: string;
};

export type CallItem = {
  id: string;
  title: string;
  description?: string;
  status?: string;
  createdAt: string;
  guardianId?: string | null;
  // additional fields used by UI
  callback?: string;
  userName?: string;
  nameFun?: string;
  type?: string;
};

const now = () => new Date().toISOString();
function daysAgo(n: number) { return new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString(); }

export const mockUsers: User[] = [
  { id: "u1", name: "Usuária Mock", email: "user@mock.com", role: "user" },
  { id: "admin1", name: "Admin Mock", email: "admin@mock.com", role: "admin" },
  { id: "u2", name: "Mariana Silva", email: "mariana@mock.com", role: "user" },
  { id: "u3", name: "João Pereira", email: "joao@mock.com", role: "user" },
  { id: "u4", name: "Gabriel Costa", email: "gabriel@mock.com", role: "user" },
];

export const mockGuardians: Guardian[] = [
  { id: "g1", name: "Responsável A", phone: "(11) 99999-0001", email: "respa@mock.com" },
  { id: "g2", name: "Responsável B", phone: "(11) 99999-0002", email: "respb@mock.com" },
  { id: "g3", name: "Responsável C", phone: "(11) 99999-0003", email: "respc@mock.com" },
  { id: "g4", name: "Responsável D", phone: "(11) 99999-0004", email: "respd@mock.com" },
  { id: "g5", name: "Responsável E", phone: "(11) 99999-0005", email: "respe@mock.com" },
];

export const mockCalls: CallItem[] = [
  { id: "c1", title: "Assédio em sala", description: "Relato de assédio moral durante atividade em sala de aula. Testemunhas e professor(a) descrevem comportamento repetido que vem afetando o estudante.", status: "open", createdAt: daysAgo(1), guardianId: "g1", callback: "Aguardando atualizações", userName: "Mariana Silva", nameFun: "Serviço Psicopedagógico", type: "Psicológico" },
  { id: "c2", title: "Bullying no corredor", description: "Ocorrência de agressões verbais e isolamento social no corredor durante o intervalo. Impacto no bem-estar e rendimento escolar do aluno afetado.", status: "closed", createdAt: daysAgo(5), guardianId: "g2", callback: "Concluído", userName: "João Pereira", nameFun: "Coordenação", type: "Disciplina" },
  { id: "c3", title: "Uso indevido do celular", description: "Aluno utilizando aparelho celular repetidamente durante a aula, atrapalhando a atividade e o andamento das explicações.", status: "open", createdAt: daysAgo(2), guardianId: "g3", callback: "Aguardando atualizações", userName: "Gabriel Costa", nameFun: "Direção", type: "Disciplina" },
  { id: "c4", title: "Briga no recreio", description: "Conflito físico entre estudantes no recreio com empurrões e agressões. Professores intervieram e separaram os envolvidos; registro para medidas disciplinares e apoio.", status: "in_progress", createdAt: daysAgo(7), guardianId: "g4", callback: "Em andamento", userName: "Usuária Mock", nameFun: "Coordenação", type: "Comportamental" },
  { id: "c5", title: "Vandalismo em parede da escola", description: "Pichação encontrada no bloco B. Danos ao patrimônio, com possíveis responsáveis identificados por câmeras; encaminhado para providências de reparo.", status: "closed", createdAt: daysAgo(15), guardianId: "g5", callback: "Concluído", userName: "Mariana Silva", nameFun: "Manutenção", type: "Infra" },
  { id: "c6", title: "Agressão verbal entre alunos", description: "Discussão que evoluiu para agressões verbais repetidas entre dois alunos. Há solicitação de mediação e acompanhamento pela equipe pedagógica.", status: "open", createdAt: daysAgo(3), guardianId: "g1", callback: "Aguardando atualizações", userName: "João Pereira", nameFun: "Serviço Social", type: "Comportamental" },
  { id: "c7", title: "Sinais de violência doméstica", description: "Observação de sinais e relatos que podem indicar violência no contexto familiar. Encaminhado para assistência social e acompanhamento especializado.", status: "in_progress", createdAt: daysAgo(20), guardianId: "g2", callback: "Em andamento", userName: "Gabriel Costa", nameFun: "Assistência Social", type: "Proteção" },
  { id: "c8", title: "Suspeita de uso de substância", description: "Comportamento suspeito no pátio após o intervalo que indica possível uso de substância. Aluno isolado para avaliação e acionamento da equipe de saúde escolar.", status: "open", createdAt: daysAgo(0), guardianId: "g3", callback: "Aguardando atualizações", userName: "Usuária Mock", nameFun: "Coordenação de Segurança", type: "Saúde" },
];

export const mockData = {
  users: mockUsers,
  guardians: mockGuardians,
  calls: mockCalls,
  // current logged user in the mock environment
  currentUser: mockUsers[0],
};

let idCounter = 100;
export function createId(prefix = "id") {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}
