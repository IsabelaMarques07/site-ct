const images = [
    'images/carrossel-pratica/img-1.png',
    'images/carrossel-pratica/img-2.png',
    'images/carrossel-pratica/img-3.png',
    'images/carrossel-pratica/img-4.png',
    'images/carrossel-pratica/img-5.png',
    'images/carrossel-pratica/img-6.png',
    'images/carrossel-pratica/img-7.png',
    'images/carrossel-pratica/img-8.png',
    'images/carrossel-pratica/img-9.png',
    'images/carrossel-pratica/img-10.png',
    'images/carrossel-pratica/img-11.png',
    'images/carrossel-pratica/img-12.png',
    'images/carrossel-pratica/img-13.png',
    'images/carrossel-pratica/img-14.png',
    'images/carrossel-pratica/img-15.png',
    'images/carrossel-pratica/img-16.png',
    'images/carrossel-pratica/img-17.png',
    'images/carrossel-pratica/img-18.png',
    'images/carrossel-pratica/img-19.png',
    'images/carrossel-pratica/img-20.png',
    'images/carrossel-pratica/img-21.png',
    'images/carrossel-pratica/img-22.png',
    'images/carrossel-pratica/img-23.png'
];
  
  const carouselInner = document.querySelector('.carousel-inner-pratica');
  const carouselIndicators = document.querySelector('.carousel-indicators-pratica');
  
  images.forEach((image, index) => {
    // Cria os itens do carrossel (slides)
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }
  
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('d-block', 'w-100'); // Classes do Bootstrap para tornar a imagem responsiva
    imgElement.alt = `Imagem ${index + 1}`;
  
    carouselItem.appendChild(imgElement);
    carouselInner.appendChild(carouselItem);
  
    // Cria os indicadores (miniaturas)
    const indicatorButton = document.createElement('button');
    indicatorButton.type = 'button';
    indicatorButton.dataset.bsTarget = '#myCarousel';
    indicatorButton.dataset.bsSlideTo = index;
    indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
    
    if (index === 0) {
      indicatorButton.classList.add('active');
      indicatorButton.setAttribute('aria-current', 'true');
    }
  
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.classList.add('d-block', 'w-100'); // Classes do Bootstrap para as miniaturas
    thumbnail.style.width = '80px';
    thumbnail.style.height = '60px';
    thumbnail.style.objectFit = 'cover';
  
    indicatorButton.appendChild(thumbnail);
    carouselIndicators.appendChild(indicatorButton);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion .btn-link');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var icon = this.querySelector('i');
            var isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        var carouselElement = document.getElementById('carouselExample');
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000, // Tempo em milissegundos entre slides
            wrap: true, // Permite que o carousel volte ao primeiro slide após o último
            pause: 'hover', // Pausa o carousel quando o mouse está sobre ele
            ride: 'carousel' // Inicia o carousel automaticamente
        });

        // Adiciona eventos de controle manual
        document.querySelector('.carousel-control-prev-reviews').addEventListener('click', function () {
            carousel.prev();
        });

        document.querySelector('.carousel-control-next-reviews').addEventListener('click', function () {
            carousel.next();
        });
    });


    const newImages = [
        'images/carrossel-inicial/img-1.png',
        'images/carrossel-inicial/img-2.png',
        'images/carrossel-inicial/img-3.png',
        'images/carrossel-inicial/img-4.png',
        'images/carrossel-inicial/img-5.png',
        'images/carrossel-inicial/img-6.png',
        'images/carrossel-inicial/img-7.png',
        'images/carrossel-inicial/img-8.png',
        'images/carrossel-inicial/img-9.png',
        'images/carrossel-inicial/img-10.png',
        'images/carrossel-inicial/img-11.png',
        'images/carrossel-inicial/img-12.png'
    ];
    
    const newCarouselInner = document.querySelector('.carousel-inner-cert');


    newImages.forEach((image, index) => {
        const newCarouselItem = document.createElement('div');
        newCarouselItem.classList.add('carousel-item');
        if (index === 0) {
            newCarouselItem.classList.add('active');
        }
    
        const newImgElement = document.createElement('img');
        newImgElement.src = image;
        newImgElement.classList.add('d-block', 'w-100');
        newImgElement.alt = `Nova Imagem ${index + 1}`;
    
        newCarouselItem.appendChild(newImgElement);
        newCarouselInner.appendChild(newCarouselItem);
    });

    document.getElementById('scrollToCursosBasicos').addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Ajuste a quantidade de deslocamento conforme necessário
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });

    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        const testimonials = [
            {
                text: '"Você que está a procura de um curso e está cansado de fazer outros e não aprender nada e só tomarem seu dinheiro,  aqui realmente vão te entregar um ótimo conteúdo.A Central do Técnico é o lugar pra você. Faça como eu que Já fiz 3 cursos aqui, software, solda e notebook e vim do interior(390km) e achei o lugar certo"',
                author: '- Guilherme'
            },
            {
                text: '"Amei...Extraordinário além das expectativas, o curso além de prático é muito didático, fornecendo informações importantes e detalhes que fazem a diferença, além de todo o suporte e apoio, tem a disponibilização dos seu laboratório por 30 dias para que possamos começar a trabalhar e juntar uma grana isso é magnífico. Parabéns, estou ansioso para começar outro curso aqui mesmo de especialização em outras áreas."',
                author: '- Alipio'
            },
            {
                text: '"Fiz o curso de montagem e manutenção de computadores e PC Gamer na Central do Técnico, não poderia ter escolhido melhor instituição para promover a edificação do meu ensino técnico. A infraestrutura da escola é completa, dispõe de todos os materiais necessários ao aprendizado do aluno, os professores são fantásticos, atuantes no mercado, com experiência acadêmica e prática, detentores dos conhecimentos mais atualizados. Enfim, o curso mescla a aprendizagem teórica com muita prática, não tem como o aluno sair de lá sem aprender o que é proposto no conteúdo programático do curso. A equipe de atendimento, é um destaque a parte, desde o primeiro contato, passando pelo esclarecimento de dúvidas, fechamento, acompanhamento durante a realização e após a finalização do curso, sempre muito gentis e eficientes na prestação de serviços. Essa foi a minha experiência, recomendo fortemente a Central do Técnico e seus cursos profissionalizantes. "',
                author: '-Gabriel Melo'
            }
        ];


        const container = document.querySelector('#depoimentos .row.justify-content-center');

        testimonials.forEach(testimonial => {
            const col = document.createElement('div');
            col.className = 'col-12 mb-3'; // Full width column
            col.innerHTML = `
                <div class="card half-out" style="width: 100%;">
                    <div class="card-body position-relative">
                        <div class="star-rating" style="top: 10px; left: 10px;">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">${testimonial.text}</p>
                        <p class="card-text fw-bold">${testimonial.author}</p>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    
        // Apply the effect to the bordered-container and half-out elements
        document.querySelector('.bordered-container').classList.add('apply-effect');
        document.querySelectorAll('.half-out').forEach(element => {
            element.classList.add('apply-effect');
        });
    
        // Optionally, hide the button after loading more testimonials
        this.style.display = 'none';
    });