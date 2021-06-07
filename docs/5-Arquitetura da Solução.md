# Arquitetura da Solução

Os detalhes técnicos da solução criada para o EaD Gameficado, conforme os componentes que fazem parte da solução e do ambiente de hospedagem, são apresentados a seguir.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na figura que se segue.

Os componentes que fazem parte da solução são apresentados na Figura 9.

![Diagrama de Componentes](img/arquiterturaDeSolucao.PNG)
<center>Figura 9 - Arquitetura da Solução</center>


A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Matéria** - seções de matéria que estiver em uso tanto em questões de edição quanto em questões de visualização por parte do usuário;
     - **Cronograma** - Cronograma com registros dos eventos;
     - **Atividades** - Atividades que estiverem sendo feitas por parte do aluno;
     - **Login** - Login de acesso do usuário. 
 - **APIs** - plataforma que permite acesso ao cadastramento de usuário, de cadastramento de localização, interação por chat e demais funcionalidade do EaD Gameficado.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 
