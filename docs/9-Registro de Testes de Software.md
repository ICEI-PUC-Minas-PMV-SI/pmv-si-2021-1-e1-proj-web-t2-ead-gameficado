# Registro de Testes de Software

Relatório contendo as evidências dos testes de software, realizados no sistema. O registro de testes foi baseado no Plano de Testes de Software, Seção 8. Plano de Testes de Software deste documento.

## 1.Avaliação dos Requisitos a Testar

Os resultados alcançados estavam, em sua maioria, dentro do esperado para os Requisitos, porém, para a implementação completa da solução, seria necessária a aplicação de banco de dados (que não é o foco deste projeto) e, para atender completamente os requisitos, a implementação de maior responsividade em todo o sistema.


### Resultados dos Requisitos a Testar
Tipo     | Subtipo | Teste                                        | Resultado | Data | Responsável|Descrição|
|---------|----------|----------------------------------------------|-----------|------|------------|---------|
|Funcional|Requisitos| Cadastro Responsável - RF001|Ok|27.06.2021|Letícia| Foi possível cadastrar Responsável.|
|Funcional|Requisitos| Gerenciar Responsável - RF001|Ok|27.06.2021|Letícia|Foi possível editar e excluir dados do perfil do Responsável. |
|Funcional|Requisitos| Cadastrar Criança - RF002|Ok|27.06.2021|Letícia| Foi possível cadastrar Criança. |
|Funcional|Requisitos| Gerenciador Dados de Criança - RF002|ok|27.06.2021|Letícia| Foi possível editar e excluir dados do perfil da criança. |
|Funcional|Requisitos| Gerenciar Criança - RF002|Ok|27.06.2021|Letícia|Foi possível Editar ou excluir perfil de criança, Foi possível acessar página para gerenciar notas, cadastrar atividades, recompensas, acessar página de ranking de desempenho e local para acesso ao chat do WhatsApp.|
|Funcional|Requisitos| Cadastrar e Gerenciar tutores - RF003|Ok|27.06.2021|Letícia| Foi possível cadastrar e Gerenciar os tutores quanto a troca de dados e pontos relacionados a perfil. |
|Funcional|Requisitos| Cadastrar e Gerenciar tarefas - RF004|Ok|27.06.2021|Letícia| Foi possível acessar a página para cadastrar e gerenciar tarefas com botões voltados para edição (os botões não permitem gerenciamento real). |
|Funcional|Requisitos| Cadastrar e Gerenciar tarefas - RF004|Ok|27.06.2021|Letícia| Foi possível acessar página para cadastrar e gerenciar tarefas com botões voltados para edição (os botões não permitem gerenciamento real). |
|Funcional|Requisitos| Cadastrar e Gerenciar Premiações - RF005|Ok|27.06.2021|Letícia| Foi possível acessar página para cadastrar e gerenciar premiações com botões voltados para edição (os botões não permitem gerenciamento real). |
|Funcional|Requisitos| Cadastrar e Gerenciar Cronograma de Estudos - RF006|Ok|27.06.2021|Letícia| Foi possível cadastrar e gerenciar cronograma de estudos, com opção de incluir, deletar e editar pontos em calendário. |
|Funcional|Requisitos| Cadastrar e Gerenciar Ranking - RF007|Ok|27.06.2021|Letícia| Foi possível checar cadastramento de alunos, porém, página de grupo de rankings não é funcional, ela é estática. |
|Funcional|Requisitos| Efetuar Avaliação e Pontuação - RF008|Ok|27.06.2021|Letícia| Foi possível checar as atividades e ir em seletor para selecionar se estava correta ou incorreta, também, durante o cadastramento da atividade, foi possível ver pontos de inserção de pontos que serão atribuídos ao aluno se ele ficar corretamente a atividade. |
|Funcional|Requisitos| Visualizar o Resultado Individual e Total - RF009|Ok|27.06.2021|Letícia| Na tela de tutor há dois tipos de gráficos, um contendo o resultado geral e, individualmente, um gráfico tipo barra para se visualizar o desempenho individual de cada aluno. |
|Funcional|Requisitos| Conversar via Chat ao Vivo - RF010|Ok|27.06.2021|Letícia| Foi possível, tanto na tela de tutor quanto na tela do aluno, entrar em chat via WhatsApp para conversação ao Vivo. |
|Funcional|Requisitos| Pesquisar Tutores - RF011|Falha|27.06.2021|Letícia|Não foi possível pesquisar tutores cadastrados no sistema. |
|Funcional|Requisitos| Registrar e Logar no Sistema Web com Usuário e Senha - RF012|Ok|27.06.2021|Letícia|Só foi viável o acesso à área do Tutor e adjacentes e a Área do Aluno e suas páginas vinculadas após efetuar o cadastramento do tutor e do aluno, respectivamente. |
|Não Funcional|Implementação| Site Responsivo e Mobile Friendly - RNF001|Erro|27.06.2021|Letícia|O site é responsivo, porém, em um celular de tela padrão, as páginas não ficaram com todos os seus conteúdos alinhados, sendo assim, há um erro na implementação de responsividade geral e na de responsividade para equivalência a todos os dispositivos Mobile comuns. |
|Não Funcional|Usabilidade| O site deve ser claro, objetivo e de fácil navegação - RNF002|Ok|27.06.2021|Letícia| O possui navegação fácil, é claro e objetivo, tendo pontos instintivos na hora do acesso. |
|Não Funcional|Usabilidade| Conteúdo Organizado e com Menus de fácil Acesso - RNF003|Ok|27.06.2021|Letícia| O site se encontrava com um bom grau de organização e com menus de fácil acesso, todos levando a algum tipo de solução implementada. |
|Não Funcional|Performace| O site deve ter carregamento rápido e deve processar requisições do usuário em menos de 3 segundos - RNF004|Ok|27.06.2021|Letícia| O site processou a maioria das requisições em menos de 1 segundo e, nas mais demoradas, em 1 segundo. |

## 2.Avaliação dos Resultados dos Casos de Teste

Os resultados alcançados estavam, em sua maioria, dentro do esperado para os Casos de Teste, porém, seria interessante a implementação de mensagens de erro menos genéricas, em linguagem nativa da região a qual o sistema se destina (Brasil, portanto, português brasileiro) e avisos de sucesso ao fim de cadastros e envios.

### Resultados dos Casos de Teste
|Caso  de Uso| ID| Teste                                        | Resultado | Data | Responsável|Descrição|
|---------|----------|----------------------------------------------|-----------|------|------------|---------|
|UC001 - HOME  | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
|UC001 - HOME  | 2| Passar o mouse por cima do menu principal de categorias                                     | Ok | 27.06.2021 | Letícia |Ao passar o mouse, sem clicar, os textos dos links mudaram de cor, as categorias não possuíam subcategorias.|
|UC001 - HOME  | 3| Clicar em uma das categorias                                     | Ok | 27.06.2021 | Letícia |Ao clicar na categoria na página, fui redirecionada para a página de equivalência da categoria.|
|FA01 –  Fazer Login | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
| FA01 –  Fazer Login | 2| Clicar no link superior direito “Login”                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página para se realizar Login. |
| FA01 –  Fazer Login | 3| Informar Usuário e Senha                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de usuário tanto de tutor, com login de tutor previamente cadastrado. como de aluno, com login de aluno previamente cadastrado. |
|FE01 – Cadastro não Encontrado | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
|FE01 – Cadastro não Encontrado | 2| Clicar no link superior direito “Login”                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página para se realizar Login. |
|FE01 – Cadastro não Encontrado | 3| Informar Usuário e senha                                     | Ok | 27.06.2021 | Letícia |Foi possível digitar usuário e senha. |
|FE01 – Cadastro não Encontrado | 4| Cadastro não encontrado                                     | Erro| 27.06.2021 | Letícia |Ao informar um login não pertencente a um usuário já cadastrado o sistema me informou que o usuário era inválido, pediu para que eu checasse os dados informados, porém, não me direcionou para página de cadastramento. |
|FA02 – Fazer Cadastro | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
| FA02 – Fazer Cadastro | 2| Selecionar opção “Criar minha conta”                                    | Ok | 27.06.2021 | Letícia |Quando cliquei na opção, fui redirecionada para a página referente a criação de conta contendo campos para cadastramento de informações. |
| FA02 – Fazer Cadastro | 3| Preencher os campos obrigatórios | Ok | 27.06.2021 | Letícia |Foi possível preencher campos na tela de criação de conta. |
| FA02 – Fazer Cadastro | 4| Clicar em enviar cadastro| Ok | 27.06.2021 | Letícia |Foi possível preencher campos na tela de criação de conta e enviar os dados, o cadastro foi realizado com sucesso, porém, não foi informado na tela que o cadastro foi concluído com sucesso. |
| FE02 – Dados incompletos para cadastro | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
| FE02 – Dados incompletos para cadastro | 2| Selecionar opção “Criar minha conta”                                   | Ok | 27.06.2021 | Letícia |Quando cliquei na opção, fui redirecionada para a página referente a criação de conta contendo campos para cadastramento de informações. |
| FE02 – Dados incompletos para cadastro | 3| Campo Obrigatório não Preenchido | Ok | 27.06.2021 | Letícia |A página não permitiu a conclusão do cadastro e enviou mensagem de erro “Please fill out this field” para campos obrigatórios. |
|FA03 – Fazer Aluno | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
| FA03 – Fazer Aluno | 2| Clicar no link superior direito “Login”                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página para se realizar Login. |
| FA03 – Fazer Aluno | 3| Informar Usuário e Senha                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de usuário tutor, com login de tutor previamente cadastrado|
| FA03 – Fazer Aluno | 4| Clicar na Sub categoria “Cadastrar Aluno”                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de cadastramento de aluno ao clicar na sub categoria. |
| FA03 – Fazer Aluno | 5| Preencher os campos obrigatórios | Ok | 27.06.2021 | Letícia |Foi possível preencher campos na tela de criação de conta. |
| FA03 – Fazer Aluno | 6| Clique em enviar cadastro | Ok | 27.06.2021 | Letícia | Foi possível preencher campos na tela de criação de conta e enviar os dados, o cadastro foi realizado com sucesso, porém, não foi informado na tela que o cadastro foi concluído com sucesso. |
| FA04 – Adicionar Atividades e Premiações. Avaliar Atividades, adicionar Premiação, cronograma | 1| Acessar página Home do site                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página de Home e ver seu conteúdo. |
| FA04 – Adicionar Atividades e Premiações. Avaliar Atividades, adicionar Premiação, cronograma | 2| Clicar no link superior direito “Login”                                     | Ok | 27.06.2021 | Letícia |Foi possível acessar a página para se realizar Login. |
| FA04 – Adicionar Atividades e Premiações. Avaliar Atividades, adicionar Premiação, cronograma | 3| Informar Usuário e senha                                     | Ok | 27.06.2021 | Letícia |Foi possível digitar usuário e senha. |
| FA04 – Adicionar Atividades e Premiações. Avaliar Atividades, adicionar Premiação, cronograma | 4| Clicar em uma das categorias                                     | Ok | 27.06.2021 | Letícia |Ao clicar na categoria na página, fui redirecionada para a página de equivalência da categoria. |
