<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Infraestructura tecnológica


    .row
      .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img1.svg' width='190px' height='104px').imagen-deco
      .col-lg-10.mt-4
          p Según Ohia (2019) la infraestructura tecnológica, también llamada infraestructura de la Tecnología de la Información (TI), se refiere a los elementos requeridos para manejar y administrar ambientes tecnológicos en las empresas. Se puede implementar en un sistema de 
            i cloud computing 
            | (servicios en la nube) o en las subestructuras de la compañía. Dentro de los elementos usados para brindar soluciones y servicios en este campo se encuentran almacenamiento de datos, sistema operativo (SO), elementos de red, 
            i software y hardware. 
            | Sus productos pueden ser descargados como aplicaciones que luego se pueden ejecutar en los recursos de TI existentes (almacenamiento definido por 
            i software
            | ), o también, como soluciones 
            i online 
            | ofrecidas por proveedores de servicios (la infraestructura como servicio - IaaS, entre otros).
    
          .row.justify-content-center.align-items-center
            .col-lg-8
              h1.mt-4 INFRAESTRUCTURA TECNOLÓGICA
      
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mt-2.text-center Tener una estructura TI coherente con el tamaño y requerimientos de la empresa resulta beneficioso para ella. Se puede hacer de una manera simple, segura y escalable para que afronte el futuro utilizando la tecnología de su lado. Las principales ventajas son :
        .col-lg-10.mt-3
          figure
            img(src='@/assets/curso/temas/tema1/img2.png' )

        
        .col-lg-6.mt-5
          .cajon.color-acento-contenido.p-3            
            p.text-center ¿Qué características tiene la infraestructura tecnológica?

    h3.my-5 Características de la Infraestructura tecnológica


    .row.justify-content-center.align-items-center
      .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img3.svg' width='295px' height='173px')
      .col-lg-8
          p La tecnología mueve e inspira a las empresas de hoy en muchos aspectos, desde el trabajo individual de un empleado, hasta el que se hace en equipo, en las distintas operaciones o en la fabricación de sus bienes y servicios. Cuando se usa de la manera correcta puede optimizar el mejoramiento en las comunicaciones, e incluso, incrementar su eficiencia y productividad.

      .row.justify-content-center.align-items-center.mt-3
        .col-lg-10.mt-4
          figure
            img(src='@/assets/curso/temas/tema1/img4.svg' )

      .col-lg-4.mt-5
          .cajon.color-acento-contenido.p-3            
            p.text-center ¿Cuáles son sus elementos?
        
    h3.my-5 Elementos de la Infraestructura Tecnológica

    .row
      .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img5.svg' width='290px' height='104px')
      .col-lg-10
        p Existen tres elementos básicos de la infraestructura tecnológica que deben, mínimamente, brindar a las empresas una generación de valor que será percibida de forma positiva por los clientes, tanto internos como externos. Por ejemplo, consultorías, capacitaciones a empleados, desarrollo empresarial y posibilidad de tercerización 
          i outsourcing
          |  en TI. A continuación, se recalcan los más usuales en toda infraestructura de TI:
    
    
    .row
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
              

          .tarjeta.bg21.p-3(x="15%" y="80%" numero="")            
            h4.mb-3.text-center #[i Hardware]
            p Tiene que ver con servidores, computadores, centros de datos, conmutadores, enrutadores y demás equipos. También con las instalaciones que albergan y enfrían los centros de datos o las que se encargan de proporcionar energía.
          
          .tarjeta.bg21.p-3(x="50%" y="80%" numero="")
            h4.mb-3.text-center #[i Software ]
            p Tiene que ver con las aplicaciones que usa el negocio, como, por ejemplo, sistemas de gestión de contenido, los servidores web y el sistema operativo 
              i (Windows Linux). 
              | El sistema operativo está encargado de administrar los recursos del sistema de 
              i hardware, 
              | además de establecer las conexiones entre los recursos físicos y el 
              i software 
                      | que desarrollan las labores.



          .tarjeta.bg21.p-3(x="85%" y="80%" numero="")
            h4.mb-3.text-center Redes
            p Consiste de una conexión a la web, cortafuegos, seguridad, habilitación de la Red y también los elementos 
              i hardware, 
              | como, por ejemplo, cables, conmutadores y enrutadores. Éstos elementos de red cuando se interconectan admiten la comunicación, administración y operaciones de red entre los sistemas externos e internos.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mt-5
          .cajon.color-acento-contenido.p-3            
            p.text-center Sus tipos digitales, ¿cuáles son?  
      
    h3.my-5 Tipos de Infraestructura tecnológica

    p A continuación, se enuncian los tipos digitales más normales y usados en la infraestructura de TI:

    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta.color
            span 
          b Tipos digitales

    TabsA.color-acento-contenido.mb-5.mt-5
      .tarjeta.imgpestanas.p-4(titulo="Infraestructura tradicional")
        .row
          .col-xl-1.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img7.svg' width='110px' height='110px').img3

          .col-xl-10
            h4 Infraestructura tradicional
            p Es cuando los negocios son los propietarios de todos los elementos (sistemas de almacenamiento de datos, centros de datos, etc.). Su funcionamiento se suele considerar costoso y necesita una gran cantidad de sistemas (conmutadores, enrutadores, servidores). Además de energía eléctrica y espacio físico.

      .tarjeta.imgpestanas.p-4(titulo="Infraestructura de nube ")
        .row
          .col-xl-1.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img8.svg' width='110px' height='110px').img3

          .col-xl-10
            h4 Infraestructura de nube 
            p Se refiere a los elementos y los recursos que se requieren para los servicios en la nube. Cada individuo puede crear una nube personalizada usando los recursos que le fueron destinados de manera exclusiva. Así como también, puede utilizar una nube pública por medio del alquiler de la infraestructura de nube de un proveedor de almacenamiento en la nube, como, por ejemplo, AT & T, 
              i Amazon Web Services, Google Cloud Storage, IBM, Internap o Microsoft O,
              |  finalmente, puede crear una nube híbrida a través de la inclusión de un cierto nivel de administración, ordenación, portabilidad de la cantidad de trabajo en distintas nubes.
    
      .tarjeta.imgpestanas.p-4(titulo="Infraestructura hiper convergente ")
        .row
          .col-xl-1.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img9.svg' width='82px' height='82px').img3

          .col-xl-10
            h4 Infraestructura hiper convergente 
            p Admite la gestión de los recursos informáticos, de Red y de acumulación de información desde una interfaz. De esta forma puede permitir cargas de trabajo más actuales con arquitectura escalable en el 
              i hardware
              |  modelo del sector por medio de la mezcla de acumulación de datos (almacenamiento de información) Y la informática, determinadas por 
              i software.

    .row.justify-content-center.align-items-center
      .col-lg-4.mt-2
            .cajon.color-acento-contenido.p-3            
              p ¿Qué es la gestión de la infraestructura digital?

    h3.my-5 Gestión de la Infraestructura tecnológica

    .row.justify-content-center.align-items-center  
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img10.svg' width='295px' height='193px').imagen-deco
      .col-lg-7.mt-3
          p Tiene que ver con la dirección de todos los recursos, plataformas, sistemas, personas y entornos de TI. Los entornos dinámicos y actuales requieren de un enfoque nuevo de administración que mejore la velocidad, expanda y proporcione estabilidad en todos los ambientes de TI de la empresa. Un aspecto vital y estratégico de la renovación y la evolución digital es la automatización, la cual tiene que ver con una gran cantidad de tecnologías que disminuyen la intervención del ser humano en el desarrollo de los procesos. 
          p.mt-2 Los siguientes son los tipos más habituales de gestión de la infraestructura de TI:

    .row.mt-5.justify-content-center.imgslider
      .col-lg-12
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="01")
                b.ps-4.text-left Gestión del sistema operativo
                p.ps-4.mb-0.mt-3 Vigila los ambientes que ejecutan el sistema operativo con el fin de proporcionar una administración en las suscripciones, ejecuciones, parches y contenidos.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider1.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="02")
                b.ps-4 Gestión de la nube
                p.ps-4.mb-0.mt-2 Otorga a los directores de nubes el control de todo lo realizado en ellas (usuarios, datos, aplicaciones y servicios), administrando la recuperación ante calamidades, al igual que el uso, la integración y la ejecución de recursos.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider2.png')


          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="03")
                b.ps-4 Gestión de la virtualización
                p.ps-4.mb-0.mt-2 Interacciona con los ambientes virtuales y el 
                  i hardware 
                  | físico subyacente para sintetizar la gestión de recursos, la mejoría en el análisis de datos y la optimización de las operaciones.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider3.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="04")
                b.ps-4 Gestión de las operaciones de TI
                p.ps-4.mb-0.mt-2 También conocida como gestión de procesos empresariales, se refiere a la práctica con la que se forman, examinan y mejoran los procesos de este tipo que son permanentes o previsibles, o incluso, los que se suelen repetir.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider4.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="05")
                b.ps-4 Automatización de la TI
                p.ps-4.mb-0.mt-2 También conocida como automatización de la infraestructura, se refiere a la generación de instrucciones y procesos que se repiten para sustituir o disminuir la interacción humana con los sistemas de TI.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider5.png')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="06")
                b.ps-4 Organización de contenedores
                p.ps-4.mb-0.mt-2 Automatiza la implementación, escalabilidad, administración y conexión en red de los contenedores.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider6.png')


          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="07")
                b.ps-4 Gestión de la configuración
                p.ps-4.mb-0.mt-2 Protege los sistemas de información, 
                  i software 
                  | y servidores en buen estado y de forma uniforme.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider7.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="08")
                b.ps-4 Gestión de las API
                p.ps-4.mb-0.mt-2 Distribuye, vigila y examina las Interfaces de Programación de Aplicaciones (API) que enlazan las aplicaciones, los datos empresariales y las nubes.
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider8.png')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-6
              .number(data-number="09")
                b.ps-4 Gestión de riesgos
                p.ps-4.mb-0.mt-2 Identifica y evalúa los riesgos y crea planes para disminuirlos o controlarlos, así como para reducir sus posibles efectos. (Ohia, 2019, p. 82).
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/slider9.png')

    .row.justify-content-center.align-items-center
      .col-lg-9.mt-5
            .cajon.color-acento-contenido.p-3            
              p Ya conoce acerca de la infraestructura tecnológica, es hora de acercarse a información sobre las plataformas digitales.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
