# Routina

O Routina é um projeto mobile com a função de facilitar a organização da rotina pessoal do usuário, e também ajudá-lo a alcançar seus objetivos, o incentivando a criar bons hábitos.

## Sobre o app

Para ajudar o usuário a se organizar e alcançar seus objetivos, o Routina oferecerá as seguintes funcionalidades:

#### Funcionalidades principais
- [ ] Cadastro de usuário
- [ ] Cadastro de atividades da semana
- [ ] Cadastro de hábitos personalizados
- [ ] Visualização de execução dos hábitos

#### Trabalhos futuros
- [ ] Sistema de gamificação ao executar hábitos corretamente

## Protótipos de tela

- [Protótipo no figma](https://www.figma.com/proto/N9sAE0mgAghR4c2TFUJpMs/Routina?node-id=8-3&p=f&t=GEv2Kx4AknVnLgeS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A3)

## Modelagem do banco

![Routina drawio (1) (1)](https://github.com/user-attachments/assets/032c56e7-6ca8-4cb5-a2bb-d0e1b50e8f80)

## Planejamento de sprints

- [x] semana 1: Configurações gerais do projeto(layout e banco de dados)
- [ ] semana 2: Cadastro e autenticação de usuário
- [ ] semana 3: CRUD de tarefas da semana
- [ ] semana 4: CRUD de hábitos

## Atualizações desde o último checkpoint

### Composição de telas
Link para visualização das telas implementadas: [Link no Drive](https://drive.google.com/file/d/1t5vIqpOoyU9s1MWABzI5CUo3uG7a_auz/view?usp=drive_link)

### Recursos
- Utilizei a lib react-native-elements para criação das telas implementadas;

### Conceitos da aula “Boas práticas para a criação de componentes reutilizáveis”
- Utilizei o conceito de isolamento para compoenentes que se repetem na tela principal;
- Utilizei mock para visualização das telas populadas com e sem dados;
- Criei um componente que recebe um outro elemento como filho.

## Executando do projeto em desenvolvimento

Instalação de dependências:
```
npm install
```

Rodando o projeto:

```
npm start
```
ou
```
npx expo start
```
