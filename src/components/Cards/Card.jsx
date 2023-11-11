import "./Card.scss";

export default function Card({
  author,
  classCard,
  imageAlt,
  imageAuthor,
  imageAuthorAlt,
  imageNote,
  lead,
  subTitle,
  title,
  type,
  urlNota,
}) {
  return (
    <div className={classCard}>
      <article className={type && type.article}>
        {imageNote && (
          <section className={type && type.mediaContainer}>
            <img className={type && type.img} src={imageNote} alt={imageAlt} />
          </section>
        )}

        <section className={type && type.body}>
          {urlNota ? (
            <a href={urlNota}>
              <h2>
                {lead && <em>{lead}</em>}
                {title && title}
              </h2>
            </a>
          ) : (
            <h2>
              {lead && <em>{lead}</em>}
              {title && title}
            </h2>
          )}

          {subTitle && <p>{subTitle}</p>}

        </section>

        {imageAuthor && (
          <div className="avatar-container">
            <section className={type && type.mediaContainer}>
              <img
                className={type && type.img}
                src={imageAuthor}
                alt={imageAuthorAlt}
              />
            </section>
          </div>
        )}
        {author && (
          <strong className={type && type.author}>{`Por ${author}`}</strong>
        )}
      </article>
    </div>
  );
}
