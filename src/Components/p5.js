import React, { useState } from 'react';
import '../Styles/p5.css';

const faqData = [
  {
    question: '¿Qué es Netflix?',
    answer: [
      `Netflix es un servicio de transmisión que ofrece una amplia variedad de programas de televisión, películas, anime, documentales y más galardonados en miles de dispositivos conectados a Internet.`,
      `Puedes mirar todo lo que quieras, cuando quieras, sin un solo comercial, todo por un bajo precio mensual. ¡Siempre hay algo nuevo que descubrir y cada semana se agregan nuevos programas de televisión y películas!`
    ]
  },
  {
    question: '¿Cuánto cuesta Netflix?',
    answer: [
      `Mira Netflix en tu smartphone, tableta, Smart TV, laptop o dispositivo de transmisión, todo por una tarifa plana mensual.`,
      `Los planes van desde S/ 24,90 hasta S/ 44,90 al mes. Sin costos adicionales ni contratos.`
    ]
  },
  {
    question: '¿Dónde puedo mirar?',
    answer: [
      `Mire en cualquier lugar y en cualquier momento. Inicie sesión con su cuenta de Netflix para mirar instantáneamente en la web en netflix.com desde su computadora personal o en cualquier dispositivo conectado a Internet que ofrezca la aplicación Netflix, incluidos televisores inteligentes, teléfonos inteligentes, tabletas, reproductores multimedia de transmisión y consolas de juegos.`,
      `También puedes descargar tus programas favoritos con la aplicación para iOS o Android. Utilice las descargas para mirar mientras viaja y sin conexión a Internet. Lleva Netflix contigo a cualquier lugar.`
    ]
  },
  {
    question: '¿Cómo cancelo?',
    answer: [
      `Netflix es flexible. No hay contratos molestos ni compromisos.`,
      `Puede cancelar fácilmente su cuenta en línea con dos clics. No hay cargos por cancelación: inicie o cierre su cuenta en cualquier momento.`
    ]
  },
  {
    question: '¿Qué puedo ver en Netflix?',
    answer: [
      `Netflix tiene una extensa biblioteca de largometrajes, documentales, programas de televisión, anime, originales de Netflix galardonados y más.`,
      `Mira todo lo que quieras, cuando quieras.`
    ]
  },
  {
    question: '¿Netflix es bueno para niños?',
    answer: [
      `La experiencia Netflix Kids está incluida en tu membresía para brindarles a los padres el control mientras los niños disfrutan de programas de televisión y películas familiares en su propio espacio.`,
      `Los perfiles para niños vienen con controles parentales protegidos por PIN que le permiten restringir la clasificación de madurez del contenido que los niños pueden ver y bloquear títulos específicos que no desea que vean.`
    ]
  }
];

function P5() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (

    <div className='p5-page'>
        <div className='title-page5'>
        <h1>Preguntas frecuentes</h1>
        </div>
        <div className="faq">
            
        {faqData.map((item, index) => (
            <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleExpansion(index)}>
                <h2>{item.question}</h2>
                <span className="faq-toggle">{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
                <div className="faq-answer">
                {item.answer.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                ))}
                </div>
            )}
            </div>
        ))}
        </div>
        <div className="email-signup">
            <h3>¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.</h3>
            <div className="email-input-container">
            <input type="email" placeholder="Correo electrónico" className="email-input" />
            <button className="email-button">Empezar &gt;</button>
            </div>
        </div>

    </div>
  );
}

export default P5;
