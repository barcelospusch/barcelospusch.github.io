# Portfólio de Dimitri Barcelos Pusch

## Rodar localmente

Use Node.js 20.9 ou superior. A partir desta pasta, execute:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra [localhost:3000](http://localhost:3000). Use `npm.cmd run build` para gerar o site estático na pasta `out`.

## Atualizar o conteúdo

Edite [data/portfolio.json](data/portfolio.json). Cada lista corresponde a uma seção do site.

| Lista | Conteúdo |
| --- | --- |
| `projetos` | Pesquisa, ciência cidadã e divulgação |
| `publicacoes` | Artigos, resumos e outras publicações |
| `formacao` | Formação escolar ou acadêmica |
| `formacaoComplementar` | Cursos, oficinas e outras atividades |

Cada registro precisa de `titulo`. Use `instituicao`, `descricao` e `url` para completar a ficha. Em projetos, use também `categoria`. Nas outras listas, `periodo` pode indicar uma data ou intervalo. Use um `id` único quando houver títulos repetidos. Os campos de texto aceitam strings e o arquivo deve manter a sintaxe JSON.

O GitHub Actions publica a pasta `out` no GitHub Pages após alterações em `portfolio-next` na branch `main`. O fluxo está em [pages.yml](../.github/workflows/pages.yml) e pode ser executado manualmente na aba Actions.
