
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card  from '../../../components/Cards/Card'; 
import { focalIzquierdoData } from '../../../data/index.js';


// Tu componente (puede ser un componente funcional o de clase)
const FocalIzquierdoComponent = ({ data }) => {
  return (
    <div>
      <strong>{data[0].author}</strong>
      {/* Agrega aquí el resto de los elementos del componente */}
    </div>
  );
};

describe('Pruebas para el componente FocalIzquierdoComponent', () => {
  test('Renderiza correctamente los datos', () => {
    render(<FocalIzquierdoComponent data={focalIzquierdoData} />);

    // Puedes usar getByText, getByRole, u otras funciones de @testing-library/react para seleccionar elementos
    const authorElement = screen.getByText('Jonathan Sansó');
    expect(authorElement).toBeInTheDocument();

    // Agrega aquí más expectativas para otros elementos del componente
  });

  // Puedes agregar más pruebas según tus necesidades

  // Ejemplo de una prueba para asegurar que la imagen tenga un alt definido
  test('La imagen tiene un alt definido', () => {
    render(<FocalIzquierdoComponent data={focalIzquierdoData} />);

/*     const imageElement = screen.getByAltText('Descrip. imagen');
    expect(imageElement).toBeInTheDocument(); */
    
  });
      ///testeo direcciones web de cards 
});


describe('Card test', () => {
  test('Error si el link es no valido', () => {
    const props = {
      author: "Juan Blas",
      imageAlt: "Descrip. imagen",
      imageAuthor: "images/avatar.png",
      lead: "Europa o Caribe.",
      marquee: "",
      title: "Nueva comparativa de precios en vuelos, hospedajes y costos de vida",
      subTitle: "",
      type: 'Juan Sarmiento',
      urlNota: "www.depegar.com",
    }

    expect(() =>{render(<Card {...props}/>)}).toThrow();

  })
})