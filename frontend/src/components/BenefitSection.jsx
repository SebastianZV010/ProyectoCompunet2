import React from 'react';

const BenefitSection = () => {
  return (
<section className="benefits-section">
  <div className="benefit">
    <img src="/images2/i1.png" alt="Envío Rápido" />
    <h3>Envío Rápido</h3>
    <p>Recibe tus productos a tiempo con nuestro servicio de envío eficiente.</p>
  </div>
  <div className="benefit">
    <img src="/images2/i2.png" alt="Soporte 24/7" />
    <h3>Soporte 24/7</h3>
    <p>Estamos disponibles siempre que nos necesites, día y noche.</p>
  </div>
  <div className="benefit">
    <img src="/images2/i3.png" alt="Garantía Total" />
    <h3>Garantía Total</h3>
    <p>Compra con confianza, todos nuestros productos están garantizados.</p>
  </div>
</section>
  );
};

export default BenefitSection;
