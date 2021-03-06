import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import BannerMain from './components/BannerMain'

function App() {
  return (
    <div style={{ background: "#141430" }}>
      <Menu />
    
    <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Um guia para os melhores conteúdos católicos da internet"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />   

      <Carousel
        category={dadosIniciais.categorias[6]}
      /> 

      <Carousel
        category={dadosIniciais.categorias[7]}
      />   

      <Carousel
        category={dadosIniciais.categorias[8]}
      />  

      <Carousel
        category={dadosIniciais.categorias[9]}
      /> 

      <Footer />
    </div>
  );
}

export default App;
