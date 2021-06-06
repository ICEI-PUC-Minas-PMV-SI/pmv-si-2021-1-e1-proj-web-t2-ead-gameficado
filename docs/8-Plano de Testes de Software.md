# Plano de Testes de Software

Plano de Testes


1.	Requisitos a Testar- Detalhamento da abordagem de teste

A lista abaixo identifica os itens (casos de uso, requisitos funcionais e não funcionais) que foram identificados como alvos de teste. Essa lista representa o que será testado. 

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de cadastro de pessoas responsáveis quanto a
criação de dados. Testar a funcionalidade de alteração de informações de pessoas responsáveis quanto a troca de dados.
Requisitos que motivaram
esse teste: 	RF001 – Cadastrar e gerenciar responsáveis.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de cadastro criança/aluno quanto a criação de dados. Testar a funcionalidade de alteração de informações da criança/aluno quanto a troca de dados.
Requisitos que motivaram
esse teste:	RF002 – Cadastrar e gerenciar crianças.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de cadastro de tutores quanto a criação de dados. Testar a funcionalidade de alteração de informações de tutores quanto a troca de dados.
Requisitos que motivaram
esse teste: 	RF003 – Cadastrar e gerenciar tutores.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de cadastrar e gerenciar tarefas, quanto a inclusão, alteração e a exclusão de atividades. 
Requisitos que motivaram
esse teste:	RF004 – Cadastrar e gerenciar tarefas.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade cadastrar e gerenciar premiações, quanto a inclusão, alteração e exclusão de premiações.  
Requisitos que motivaram
esse teste:	RF005 – Cadastrar e gerenciar premiações.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de cadastrar e gerenciar cronograma de estudo, quanto   a inclusão, alteração e exclusão do cronograma. 
Requisitos que motivaram
esse teste:	RF006 – Cadastrar e gerenciar cronograma de estudo.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar as funcionalidades de cadastrar e gerenciar grupos de estudos dos alunos, quanto a inclusão, alteração e exclusão dos grupos. Testar a funcionalidade de cadastrar e gerenciar rankings de alunos, quanto a inclusão, alteração e exclusão de rankings. 
Requisitos que motivaram
esse teste:	RF007 – Cadastrar e gerenciar grupos e rankings.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de avaliação, quanto a inclusão de uma avaliação, alteração e exclusão. Testar a funcionalidade de pontuações, quanto a geração de pontuação, inclusão, alteração, exclusão e envio de pontuação.

Requisitos que motivaram
esse teste: 	RF008 – Efetuar avaliações e pontuações.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de visualização de resultado. Testar a visualização na área do aluno para visualização do resultado individual. Testar a visualização na área do Tutor, para visualização individual por aluno e da visualização geral por grupos de alunos.
Requisitos que motivaram
esse teste:	RF009 – Visualizar resultado individual e total.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de chat incluída nas páginas correspondentes. Testar o redirecionamento do chat para o WhatsApp com tutor/ aluno em tempo real, quando selecionado o botão inserido nas páginas. 
Requisitos que motivaram
esse teste:	RF010 – Conversar via chat ao vivo	.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de pesquisar os tutores cadastrados no sistema quanto a busca de dados.
Requisitos que motivaram
esse teste:	RF011 – Pesquisar tutores.

Tipo do Teste: 	Funcional
Subtipo de Teste: 	Requisitos
Objetivo do Teste: 	Testar a funcionalidade de logar no sistema, utilizando usuário e senha cadastrados. Testar redirecionamento de páginas de acesso para o usuário logado. Testar se existe diferenciação de redirecionamento para 
usuários comuns (crianças/alunos) de usuários administrativos (responsáveis/ tutores)
Requisitos que motivaram
esse teste:	RF012 – Registrar e Logar no Sistema Web com usuário e senha.


Tipo do Teste: 	Não Funcional
Subtipo de Teste: 	Implementação
Objetivo do Teste: 	Verificar se o site está sendo responsivo e codificado na linguagem correta. Testar se as páginas não ficam distorcidas quando acessado por um ambiente mobile.
Requisitos que motivaram
esse teste:	RNF001 – O site deve ser responsivo e mobile friendly.

Tipo do Teste: 	Não Funcional
Subtipo de Teste: 	Usabilidade
Objetivo do Teste: 	Verificar e testar se o site está sendo apresentado de forma clara, objetiva e de fácil navegação para os usuários. 
Requisitos que motivaram
esse teste: 	RNF002 – O site deve ser claro, objetivo e de fácil navegação.

Tipo do Teste: 	Não Funcional
Subtipo de Teste: 	Usabilidade
Objetivo do Teste: 	Verificar e testar a apresentação do site para os usuários, se o conteúdo está organizado e com os menus principais de fácil acesso. 
Requisitos que motivaram
esse teste:	RNF003 – O site deve ter o conteúdo organizado em menus de fácil acesso.

Tipo do Teste: 	Não Funcional
Subtipo de Teste: 	Performace
Objetivo do Teste: 	Verificar se o tempo de carregamento das páginas e o processamento de requisições dos usuários está abaixo dos 3 segundos.
Requisitos que motivaram
esse teste: 	RNF-004 – O site deve ter carregamento rápido e processar requisições do usuário em no máximo 3s

2.	Estratégia de Teste
2.1	Tipos de Teste


2.2 Ferramentas de Teste



3.Ambiente de Teste- Definições do Ambiente de Teste

• Teremos testes unitários desenvolvidos individualmente por desenvolvedores de cada pagina, com um volume pequeno de dados, faremos testes de integração baseados em manuais de testes.
• Teremos testes em toda a aplicação com os desenvolvedores de cada pagina com um volume grande de dados pequenos, serão utilizados dados reais ou criados na hora, também teremos testes de aceitação com toda a aplicação ,de testadores e diferentes perfis usuários com um volume pequeno de dados reais ou fictícios. 
• O sistema deverá ser desenvolvido em linguagem java, com html, css, javascript.



4.Programação dos Tesstes- Objetivos e Prioridades

As prioridades no sistema são:
• O sistema deve possibilitar ao usuário administrador a realização de cadastros e gerenciamentos de cadastros.
• O sistema deve possibilitar ao usuário comum a realização de cadastro.
• O sistema deve possibilitar ao usuário administrador o gerenciamento das funcionalidades como gerenciar os cadastros, tarefas, premiações, cronogramas de estudos, grupos, rankings, avaliações e pontuações. 
• O sistema deve possuir níveis de acesso.
• O sistema deve possibilitar a visualização de resultados individuais e totais, de acordo com o nível de acesso do usuário.
• O sistema deve possuir um Design para mobile responsivo.

