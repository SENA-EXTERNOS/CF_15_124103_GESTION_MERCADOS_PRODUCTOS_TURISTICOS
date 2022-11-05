<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-center
      .col-lg-3
          figure
            img(src='@/assets/curso/temas/introduccion/img1.svg' width='400px' height='260px')
      .col-lg-7.mt-4
          p Estimado aprendiz, a continuación conocerá sobre la 
            b gestión de plataformas digitales. 
            | Al finalizar este recurso se espera que logre configurar el entorno de la plataforma digital de acuerdo con un procedimiento técnico y la política organizacional; así mismo, que a futuro pueda estructurar comunidades virtuales de acuerdo con técnicas de 
            i marketing digital 
            | y tipo de negocio. Con los recursos que aprenda aquí, podrá aportar a las entidades desde el reconocimiento, el posicionamiento, la creación de valor empresarial, la fidelización de los clientes y la conversión en las ventas. De igual forma, la infraestructura y la comunicación visual serán relevantes para que la plataforma digital presente soluciones y experiencias positivas a los clientes. 
    b.mt-1  En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo.
    p.mt-2 ¡Muchos éxitos en este proceso de aprendizaje!

    .row
      .col-lg-12.mt-4
        figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption   VIDEO


    p.mt-3 Para ampliar la información descrita anteriormente, se puede ver lo siguiente.
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
