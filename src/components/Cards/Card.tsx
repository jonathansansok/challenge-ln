import "./Card.scss";
import { ObjectCss } from "../../Interfaces/Notas";
interface CardContainerProps  {
  author: string ;
  classCard: string ;
  imageAlt: string ;
  imageAuthor?: string ;
  imageAuthorAlt?: string ;
  imageNote?: string ;
  lead: string ;
  subTitle: string ;
  title: string ;
  type: ObjectCss ;
  urlNota: string ;
  }



export default function Card( props: CardContainerProps ) {
  if (props.urlNota.includes('https://')){
    //throw new Error('Link no valido');


  } 
  return (
    <div className={props.classCard}>
      <article className={props.type && props.type.article}>
        {props.imageNote && (
          <section className={props.type && props.type.mediaContainer}>
            <img className={props.type && props.type.img} src={props.imageNote} alt={props.imageAlt} />
          </section>
        )}

        <section className={props.type && props.type.body}>
          {props.urlNota ? (
            <a href={props.urlNota}>
              <h2>
                {props.lead && <em>{props.lead}</em>}
                {props.title && props.title}
              </h2>
            </a>
          ) : (
            <h2>
              {props.lead && <em>{props.lead}</em>}
              {props.title && props.title}
            </h2>
          )}

          {props.subTitle && <p>{props.subTitle}</p>}

        </section>

        {props.imageAuthor && (
          <div className="avatar-container">
            <section className={props.type && props.type.mediaContainer}>
              <img
                className={props.type && props.type.img}
                src={props.imageAuthor}
                alt={props.imageAuthorAlt}
              />
            </section>
          </div>
        )}
        {props.author && (
          <strong className={props.type && props.type.author}>{`Por ${props.author}`}</strong>
        )}
      </article>
    </div>
  );
}
