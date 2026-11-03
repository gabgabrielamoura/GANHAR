# Site GANHAR

Site estático (HTML, CSS e JavaScript puro, sem dependências) com três páginas:
**Início**, **Implementação NR-1** e **Método GANHAR**, além de um chat de contato interativo.

## Estrutura

```
index.html      → todo o conteúdo das três páginas
css/style.css   → estilos (cores e tipografia do design system GANHAR)
js/app.js       → navegação, abas das fases, seletor empresa/pessoa, perguntas frequentes e chat
assets/         → fotos, logos e telas do app
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `ganhar-site`).
2. Envie todos os arquivos desta pasta para a raiz do repositório
   (no site do GitHub: **Add file → Upload files**, arraste tudo e clique em **Commit changes**).
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Source: Deploy from a branch**, branch **main** e pasta **/ (root)**. Clique em **Save**.
5. Em um ou dois minutos o site fica no ar em `https://SEU-USUARIO.github.io/ganhar-site/`.

Para usar um domínio próprio, preencha **Custom domain** na mesma tela e siga as instruções de DNS do GitHub.

## Links diretos

Cada página e seção tem um endereço próprio, que dá para compartilhar:

- `#inicio`, `#nr1`, `#metodo`
- `#contato` (chat), `#mapa` (mapa de temas), `#fases` (fases da NR-1), `#entregaveis` (entregáveis da NR-1), `#publico` (empresa ou pessoa, no Método)

## Onde editar

- **Textos fixos:** direto no `index.html`.
- **Fases da NR-1, pilares, jornada e perguntas frequentes:** no topo do `js/app.js`.
- **E-mail e opções do chat:** constantes `CONTATO_EMAIL`, `SERVICOS`, `TAMANHOS` e `CANAIS` no `js/app.js`.

## Sobre o chat de contato

No fim da conversa, o botão **Enviar para a equipe** abre o e-mail da pessoa já preenchido
com o serviço, o tamanho da empresa e o contato. Para receber os contatos automaticamente,
sem depender do e-mail da pessoa, dá para ligar o chat a um serviço de formulários
(como Formspree ou Google Forms) no método `send()` do `js/app.js`.

## Regras de navegação

- Qualquer botão de contato leva ao chat da Início. Se a pessoa estava na aba **Implementação NR-1**,
  o chat já começa com "Implementação NR-1" respondido; se estava na aba **Método GANHAR**, com "GANHAR".
  Na Início, o chat começa do zero. (Constante `SERVICO_DA_ABA` no `js/app.js`.)
- "Ver as fases" e o card Serviço 01 sempre abrem as fases na Fase 1, Diagnóstico.
- Os cartõezinhos "Para a empresa" e "Para cada pessoa" do banner da Início abrem o Método
  com o público certo selecionado.
