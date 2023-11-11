import { focalIzquierdoData, notas4ej1, card3 } from "./data";
import Card from "./components/Cards/Card.jsx";
import Divider from "./components/Divider.jsx";
import Layout from "../src/components/Layout/index.jsx";
import GridContainer from "./components/Containers/Grid.jsx";
import TitleContainer from "./components/Containers/TitleContainer.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <Divider fullScreen={true} />
          <GridContainer styleGrid="articulos4Ej1">
            <TitleContainer title="4 Artículos" />
            {notas4ej1.map((nota, i) => {
              return (
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  title={nota.title}
                  subTitle={nota.subTitle}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
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
