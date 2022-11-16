export default {
  global: {
    componenteFormativo: 'Gestión de plataformas digitales',
    descripcionCurso:
      'La gestión de una plataforma digital es importante para el futuro de una empresa, porque de ella depende el reconocimiento, el posicionamiento, la creación de valor empresarial, la fidelización de los clientes y la conversión en las ventas. La infraestructura y la comunicación visual son relevantes para que la plataforma digital presente soluciones y experiencias positivas a los clientes. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Infraestructura tecnológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos  ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gestión ',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plataformas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Objetivos ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ventajas ',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Gestión de plataformas digitales ',
            hash: 't_2_5',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación visual para medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El mensaje comunicacional ',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Semiótica',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Infraestructura tecnológica',
      referencia:
        'Acosta, R., Miquilena, E. y Riveros, V. (2014). La infraestructura de las tecnologías de la información y comunicación como mediadoras y el aprendizaje de la biología. <em>Telos.<em> 16(1) p. 11-30 ',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/993/99330402008.pdf ',
    },
    {
      tema: 'Plataformas digitales',
      referencia:
        'Negocios en tu mundo (2022) <em>¿Cuál es la importancia de las plataformas digitales para el turismo? <em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qrrkfeRyt84 ',
    },
    {
      tema: 'Comunicación visual',
      referencia:
        'Montes Vozmediano, M. & Vizcaíno-Laorga, R. (2015). 3. Componentes básicos de la comunicación visual. En Diseño gráfico publicitario. <em>Principios fundamentales para el análisis y elaboración de mensajes visuales. <em> (p. 42- 59) Publisher: OMM Press',
      tipo: 'Capítulo de libro',
      link:
        'https://www.researchgate.net/publication/335960976_Componentes_basicos_de_la_comunicacion_visual ',
    },
    {
      tema: 'Semiótica',
      referencia:
        'Negocios en tu mundo (2020) <em>¿Qué es la Semiótica de la Imagen? <em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qrrkfeRyt84 ',
    },
  ],
  glosario: [
    {
      termino: 'Cross <em>selling<em>',
      significado:
        'la ‘venta cruzada’ (término en español) es una táctica del mercadeo a través de la cual una marca incentiva la venta de productos (bienes o servicios) complementarios a los que busca el cliente habitual, con el fin de incrementar los ingresos de la empresa.',
    },
    {
      termino: '<em>Deep learning</em>',
      significado:
        'es una tecnología del aprendizaje automático muy importante en la actualidad, que tiene que ver con el uso de algoritmos que pueden remedar las operaciones del cerebro del ser humano a través de redes neuronales artificiales. ',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'es el soporte físico o equipamiento informático que tiene que ver con los elementos físicos y tangibles de un sistema informático, como, por ejemplo, los componentes electrónicos, eléctricos, mecánicos y electromecánicos. ',
    },
    {
      termino: 'Infraestructura tecnológica',
      significado:
        'se encarga de agrupar y organizar el grupo de aparatos tecnológicos que conforman cualquier proyecto, aguantan las operaciones empresariales o las respaldan. ',
    },
    {
      termino: 'Lenguaje bimedia',
      significado:
        'lenguaje que hace parte de la comunicación visual y que tiene importancia gráfica sobre las imágenes y el texto, presentando una gran cantidad de alternativas y composiciones.',
    },
    {
      termino: 'Plataforma digital',
      significado:
        'es un lugar en la <em>web<em>, portal o ciberespacio, que se usa para el almacenamiento de distintos tipos de información a nivel empresarial o personal.',
    },
    {
      termino: '<em>Retargeting<em>',
      significado:
        'es una técnica del mercadeo digital que tiene como finalidad el impacto a los clientes que han tenido una interacción con la marca de manera previa, para luego poderles recordar que está a su alcance a través de una promoción interesante que los puede inducir a una acción de compra.',
    },

    {
      termino: 'Semiótica',
      significado:
        'es el estudio de los signos o símbolos y la manera en que el ser humano los puede crear. Se entiende como ‘signo’ cualquier elemento que pueda comunicar un mensaje que sea interpretado por el receptor.',
    },
    {
      termino: '<em>Software<em>',
      significado:
        'grupo de programas instalados en un computador que permiten la realización de tareas específicas.',
    },
    {
      termino: 'Tecnología de la información',
      significado:
        'es la aplicación de computadores y dispositivos de telecomunicaciones que sirven para el almacenamiento, recuperación, transmisión y manipulación de datos de manera permanente, usado en el contexto empresarial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro Álvarez de Sotomayor, S. F. (2020). <em>Plataformas digitales en los alquileres vacacionales.<em> Madrid: Reus Editorial.',
      link: '',
    },
    {
      referencia:
        'Libro De Castro Torrecilla, J. (2020). Plataformas digitales en el turismo y su implicación en la transformación del <em>marketing<em> del sector. Segovia: <em>Facultad de Ciencias Sociales, Jurídicas y de la Comunicación.<em> Universidad de Valladolid.',
      link: '',
    },
    {
      referencia:
        'Libro Jarne Muñoz, P. (2019). <em>Economía colaborativa y plataformas digitales.<em> Madrid: Editorial Reus.',
      link: '',
    },
    {
      referencia:
        'Libro Ohia, N. (2019). <em>Auditando Tus Sistemas de Información E Infraestructura de Ti.<em> Amazon Digital Services.',
      link: '',
    },
    {
      referencia:
        'Libro París, J. A. (2019). Comunicación esencial. El paradigma del <em>marketing<em> esencial <em>aplicado al diseño y comunicación visual.<em> Bogotá: Editorial Nobuko',
      link: '',
    },
    {
      referencia:
        'Libro Yalán Dongo, E. (2019). <em>Semiótica Del Consumo: Una Aproximación a La Publicidad Desde Sus Signos.<em> Bogotá: Ediciones De La U',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
