import { focalIzquierdoData, notas4ej1, card3 } from "./data/index.js";
import Card from "./components/Cards/Card";
import Divider from "./components/Divider";
import Layout from "./components/Layout/index";
import GridContainer from "./components/Containers/Grid";
import TitleContainer from "./components/Containers/TitleContainer";
import { Nota } from "./Interfaces/Notas.js";

function App() {
  let notas : Nota[] = notas4ej1 ;
  return (
    <div className="App">
      <Layout>
        <div>
          <Divider fullScreen={true} />
          <GridContainer styleGrid="articulos4Ej1">
            
            <TitleContainer title="4 Artículos" />
            { notas.map((nota: Nota, i: number) => {
              return (
                <div key={i}>
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.author}
                  imageNote={nota.imageNote}
                  lead={nota.lead}
                  title={nota.title}
                  subTitle={nota.subTitle}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
                </div>
              );
            })}
          
           
          </GridContainer>

          <Divider fullScreen={true} />

          <GridContainer styleGrid="cards3">
            <TitleContainer title="3 cards" />
            {card3.map((nota, i) => {
              return (
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAuthor={nota.imageAuthor}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  subTitle={nota.subTitle}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>
          <Divider fullScreen={true} />

          <GridContainer styleGrid="focal-izquierdo">
            <TitleContainer title="Focal izquierdo" />
            {focalIzquierdoData.map((nota, i) => {
              return (
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  subTitle={nota.subTitle}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>
        </div>
      </Layout>
    </div>
  );
}

export default App;
