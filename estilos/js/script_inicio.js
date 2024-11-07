ader h1 {
    font-size: 3.5rem;
    animation: fadeIn 2s ease-in-out;
  }

  /* Efecto de aparición suave */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Botón de acción con transición */
  .btn-primary {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    transition: background-color 0.3s, transform 0.3s;
  }
  .btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  /* Sección de introducción con animación */
  .intro-section {
    padding: 4rem 2rem;
    opacity: 0;
    animation: slideUp 1s ease-in-out forwards;
    animation-delay: 1s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Sección de servicios */
  .services-section {
    background-color: #f9f9f9;
    padding: 4rem 2rem;
  }
  .service-card {
    transition: transform 0.3s ease;
    animation: fadeInUp 0.6s ease-in-out;

  }
  .service-card:hover {
    transform: translateY(-10px);
  }

  /* Sección de testimonios */
  .testimonials-section {
    padding: 4rem 2rem;
    background-color: #f1f1f1;
  }
  .testimonial-card {
    transition: transform 0.3s ease;
  }
  .testimonial-card:hover {
    transform: translateX(10px);
  }
  .service-card, .testimonial-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Formulario de contacto */
  .contact-form {
    padding: 4rem 2rem;
    background-color: #e9ecef;
    transition: background-color 0.3s, transform 0.3s;
  }
  .contact-form button:active {
    background-color: #004085;
    transform: scale(0.95);
  }

  /* Pie de página */
  .footer {
    background-color: #343a40;
    color: white;
    padding: 2rem;
  }
  .footer a {
    color: #f8f9fa;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .footer a:hover {
    color: #007bff;
  }