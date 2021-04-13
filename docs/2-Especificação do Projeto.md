# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nos quadros a seguir, destacando que, em cada quadro, temos dois dados de persona, isso porque os usuários são os pais/tutores e suas crianças, porém, como o foco do projeto são as crianças da educação básica, que não possuem entendimento para responder ainda um questionário de persona, os tutores são responsáveis por fornecer dados das crianças (fazem isso quando preenchem o próprio perfil de persona).

<table>
<thead>
  <tr>
    <th colspan="2">Kele da Silva</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Idade: 39 anos</td>
    <td>Quantidade de Filhos/Tutelados: 1</td>
  </tr>
  <tr>
    <td>Idade da criança :2 anos e 5 meses</td>
    <td>Ano escolar da criança: Maternal 2</td>
  </tr>
  <tr>
    <td colspan="2">Idiomas desejados para plataforma: Português, Inglês e Espanhol</td>
  </tr>
  <tr>
    <td colspan="2">Relação com o EaD: Sua criança tem dificuldade nas aulas EaD</td>
  </tr>
</tbody>
</table>

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`        | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Kele da Silva      | Conteúdo rápido (max. 20 min); Estimular criatividade; Plataforma em inglês e espanhol.           | Orientação educacional; Facilidade de compreensão Flexibilidade de horário. |
|Sandra Córdova  |      Clareza; acessibilidade; dinamismo; Plataforma em inglês e espanhol.  | Acompanhar de perto a evolução da criança. |
|Ana Carolina |        Facilidade; cores; interação; jogos; atividades para aguçar a inteligência e causar curiosidade e vídeos.     | Acesso rápido e fácil, estimular a criança a estudar, interação com outros alunos, habituar a criança a tecnologia. |
|Silva Souza  |Interação; dinâmica; plataforma em inglês e espanhol.      |Plataforma atrativa para prender a atenção da criança. |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Permitir atividades em grupo | BAIXA |
|RF-003| Permitir cadastro e desenvolvimento de plano de estudos inteligentes | MÉDIA |
|RF-004| Permitir integração com o banco de dados biblioteca, para leitura de livros | MÉDIA | 
|RF-005| Permitir interação por mensagens entre aluno, tutores e professores | MÉDIA |
|RF-006| Emitir correções on-line dos exercícios pelos tutores e professores | ALTA |
|RF-007| Permitir que o usuário cadastre premiações | ALTA |
|RF-008| Emitir relatório de tarefas por períodos pré-selecionados | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA | 
|RNF-003| O ambiente deve ser desenvolvido com a utilização de cores, sons e movimento | MÉDIA| 
|RNF-004| Deve processar requisições do usuário em no máximo 3s | BAIXA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
