import React from 'react';

const BlogSection = () => {
  return (
    <section className="blog-section">
    <div className="blog">
      <img src="/images2/b1.jpeg" alt="Setup Gamer" />
      <h3>Cómo elegir tu setup gamer ideal</h3>
      <p>Descubre cómo montar el setup perfecto para tus sesiones de juego...</p>
    </div>
    <div className="blog">
      <img src="/images2/b2.jpeg" alt="Gadgets Tecnológicos" />
      <h3>Los mejores gadgets tecnológicos del año</h3>
      <p>Explora las últimas tendencias en gadgets tecnológicos...</p>
    </div>
    <div className="blog">
      <img src="/images2/b3.webp" alt="Teclados Mecánicos" />
      <h3>Teclados mecánicos: ¿Cuál es el mejor para ti?</h3>
      <p>Conoce las diferencias entre switches mecánicos y teclados ergonómicos...</p>
    </div>
  </section>
  
  );
};

export default BlogSection;
