import portfolio from "../data/portfolio.json";
import ThemeToggle from "./theme-toggle";

const lattes = "https://lattes.cnpq.br/6994744664429525";
const orcid = "https://orcid.org/0009-0002-8371-0077";
const linkedin = "https://www.linkedin.com/in/dimitri-barcelos-pusch-32335a274/";
const catalog = [
  { id: "publicacoes", title: "Publicações", entries: portfolio.publicacoes, empty: "Nenhuma publicação cadastrada.", metadata: [{ key: "dataPublicacao", label: "Publicado em" }] },
  { id: "formacao", title: "Formação", entries: portfolio.formacao, metadata: [{ key: "dataInicio", label: "Início" }, { key: "dataTermino", label: "Término" }] },
  { id: "formacao-complementar", title: "Formação complementar", entries: portfolio.formacaoComplementar, empty: "Nenhuma formação complementar cadastrada.", metadata: [{ key: "ano", label: "Ano" }, { key: "cargaHoraria", label: "Carga horária", suffix: " h" }] },
  { id: "eventos", title: "Participação em eventos", entries: portfolio.eventos.reverse(), empty: "Nenhuma participação em eventos cadastrada.", metadata: [{ key: "cargo", label: "" }, { key: "ano", label: "Ano" }] }
];

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function RecordList({ id, title, entries, empty, metadata = [] }) {
  return (
    <section className="record-section" id={id} aria-labelledby={id + "-title"}>
      <h3 id={id + "-title"}>{title}</h3>
      {entries.length ? (
        <ul className="records">
          {entries.map((entry) => {
            const details = [
              entry.instituicao,
              entry.periodo,
              ...metadata
                .filter(({ key }) => entry[key] !== undefined && entry[key] !== null && entry[key] !== "")
                .map(({ key, label, suffix = "" }) => `${label ? `${label}: ` : ""}${entry[key]}${suffix}`),
            ].filter(Boolean);

            return (
              <li key={entry.id || entry.titulo}>
                <strong>{entry.url ? <ExternalLink href={entry.url}>{entry.titulo}</ExternalLink> : entry.titulo}</strong>
                {details.length > 0 && <small>{details.join(" · ")}</small>}
                {entry.descricao && <p>{entry.descricao}</p>}
              </li>
            );
          })}
        </ul>
      ) : <p className="empty">{empty}</p>}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="shell navigation" aria-label="Navegação principal">
          <a className="brand" href="#inicio">Barcelos-Pusch</a>
          <div className="nav-links">
            <a href="#projetos">Projetos</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#contato">Contato</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <main id="inicio" className="shell">
        <section className="hero" aria-labelledby="nome">
          <h1 id="nome">Dimitri Barcelos Pusch</h1>
          <p className="location">Curitiba, Brasil</p>
          <p className="intro">Faço iniciação científica em ocultações estelares na UTFPR e organizo campanhas de busca de asteroides no NPCA.</p>
          <ExternalLink className="text-link" href={lattes}>Currículo Lattes</ExternalLink>
          <ExternalLink className="text-link" href={orcid}>Currículo ORCiD</ExternalLink>
          <ExternalLink className="text-link" href={linkedin}>LinkedIn</ExternalLink>
        </section>

        <section className="section" id="projetos" aria-labelledby="projetos-title">
          <h2 id="projetos-title">Projetos</h2>
          <div className="cards">
            {portfolio.projetos.map((project) => (
              <article className="card" key={project.id || project.titulo}>
                <p className="card-meta">{project.categoria}</p>
                <h3>{project.titulo}</h3>
                <p>{project.descricao}</p>
                <div className="card-footer">
                  <span>{project.instituicao}</span>
                  {project.url && <ExternalLink href={project.url}>Visitar</ExternalLink>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="trajetoria" aria-labelledby="trajetoria-title">
          <h2 id="trajetoria-title">Trajetória</h2>
          <div className="catalog">
            {catalog.map((category) => <RecordList key={category.id} {...category} />)}
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contato-title">
          <h2 id="contato-title">Contato</h2>
          <div className="actions">
            <a className="button" href="mailto:pusch.dimitri@gmail.com">Enviar e-mail <span aria-hidden="true">↗</span></a>
            <ExternalLink className="button" href="https://www.instagram.com/dimitri.pusch/">Instagram</ExternalLink>
          </div>
        </section>
      </main>
      <footer className="site-footer shell"><span>Dimitri Barcelos Pusch</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </>
  );
}
