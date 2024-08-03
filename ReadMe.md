### Documentação

# Link do GitHub

https://github.com/Silvio42/ProjetoArquitetura

# Aluno

* Silvio Jorge de Oliveira     RA: 2052261

# Justificativa para Escolhas de Padrões de Projeto

## Factory Method (Padrão Criacional)

**Justificativa:** O padrão Factory Method foi escolhido para centralizar a criação de objetos de relatório (HTML e TXT). Isso facilita a manutenção e a extensão do código, permitindo adicionar novos tipos de relatórios sem modificar a lógica de criação existente. Esse padrão promove o princípio de Inversão de Dependência do SOLID, pois dependemos de abstrações em vez de implementações concretas.

## Decorator (Padrão Estrutural)

**Justificativa:** O padrão Decorator foi utilizado para adicionar funcionalidades adicionais aos relatórios sem modificar suas classes base. Esse padrão permite a extensão das funcionalidades de forma flexível e escalável, seguindo o princípio Aberto/Fechado (OCP) do SOLID. Com o Decorator, podemos adicionar novas funcionalidades decorando objetos existentes sem alterar o código original.

## Strategy (Padrão Comportamental)

**Justificativa:** O padrão Strategy foi escolhido para encapsular os algoritmos de formatação de relatórios (HTML e TXT) e torná-los intercambiáveis. Isso permite que os algoritmos sejam alterados independentemente dos clientes que os utilizam, promovendo a separação de responsabilidades e a flexibilidade no código. O Strategy também está alinhado com o princípio de Inversão de Dependência (DIP) do SOLID.

# Refatorações Utilizando Princípios SOLID

## Single Responsibility Principle (SRP)

**Descrição:** Separação da lógica de leitura, parsing e geração de relatórios em classes distintas. Isso garante que cada classe tenha uma única responsabilidade, tornando o código mais fácil de entender e manter.

## Open/Closed Principle (OCP)

**Descrição:** Implementação do padrão Decorator para adicionar funcionalidades aos relatórios sem modificar as classes existentes. Isso permite que o código seja estendido com novas funcionalidades de forma flexível, sem a necessidade de alterar o código existente.

## Dependency Inversion Principle (DIP)

**Descrição:** Uso do padrão Strategy para encapsular algoritmos de formatação de relatórios, permitindo que diferentes estratégias sejam usadas de forma intercambiável. Isso promove a dependência de abstrações em vez de implementações concretas, facilitando a manutenção e a escalabilidade do código.

# Script de Teste

Um script de teste foi criado para garantir a consistência das saídas esperadas após as alterações. O script executa a geração de relatórios nos formatos HTML, HTML detalhado e TXT, verificando se o conteúdo gerado corresponde ao esperado. O script pode ser executado utilizando o comando `node test.js` e os resultados são exibidos no console, indicando se os testes passaram ou falharam.

# Conclusão

As escolhas dos padrões de projeto e as refatorações realizadas foram justificadas e alinhadas com os princípios SOLID, promovendo um código mais flexível, extensível e de fácil manutenção. O script de teste garante que as saídas esperadas estão corretas após as alterações, proporcionando confiança na integridade do sistema.

# Comandos para executar o projeto

```sh
node index.js html
node index.js txt
node index.js html-detalhado
node test.js
