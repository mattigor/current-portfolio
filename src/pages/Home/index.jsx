import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Presentation from '../../components/Presentation/Presentation';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

export default function App() {
  return (
    <div className="App">
      <Navbar
        item1="Sobre mim"
        item2="Formação e Habilidades"
        item3="Meus projetos"
        item4="Entre em contato"
      />
      <Presentation
        greeting="Olá! Meu nome é "
        name="Igor"
        about="Tenho 25 anos e estou iniciando
        na área de desenvolvimento de software. Busco sempre criar soluções que garantam uma boa experiência ao usuário."
      />
      <Education />
      <Projects
        header="Projetos"
        description="Aqui estão os principais que desenvolvi ao longo do meu aprendizado."
      />
      <Contact />
    </div>
  )
}
