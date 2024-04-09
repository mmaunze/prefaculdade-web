<script setup>
// example components
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "@/components/cards/blogCards/BackgroundBlogCard.vue";

//Vue Prefaculdade components
import engenharia from "@/assets/img/pages/cursos/engenharia.jpg";
import saude from "@/assets/img/pages/cursos/saude.jpg";
import agropecuaria from "@/assets/img/pages/cursos/agropecuaria.jpg";
import ciencias from "@/assets/img/pages/cursos/ciencias.jpg";
import letras from "@/assets/img/pages/cursos/letras.jpg";
import educacao from "@/assets/img/pages/cursos/educacao.jpg";
import business from "@/assets/img/pages/cursos/business.jpg";
import artes from "@/assets/img/pages/cursos/artes.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Areas de Formacao</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver cursos de Engenharia',
            }"
            :image="engenharia"
            title="  Engenharia"
            description="Engenharia é a aplicação do conhecimento científico, econômico, social e prático, com o intuito de inventar, desenhar, construir, manter e melhorar estruturas, máquinas, aparelhos, sistemas, materiais e processos. É também profissão em que se adquire e se aplicam os conhecimentos matemáticos e técnicos na criação, aperfeiçoamento e implementação de utilidades que realizem uma função ou objetivo."
          />
        </div>
        <div class="col-lg-4 col-sm-6 ml-10">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Saude',
          }"
            :image="saude"
            title="  Ciencias de Saude"
            description="Trata-se de uma área que apresenta um grande pot onencial tendo em vista, sobretudo, o aumento na expectativa de vida em diversos países. Os profissionais de saúde têm sido cada vez mais requisitados, principalmente em um cenário de escassez de médicos, que ocorre principalmente em locais mais distantes das áreas urbanas."
          />
        </div>
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Ciencias',
          }"
            :image="ciencias"
            title="  Ciencias Exactas"
            description="As ciências exatas são aquelas especializadas em lidar com problemas e situações, porém, por meio da matemática. Para fazer isso, seus profissionais têm como base recursos precisos e lógicos, que cheguem a um resultado exato – o que motiva também o próprio nome dessa ciência.
            "
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Business',
          }"
            :image="business"
            title="Negocios e Financas"
            description="O mercado financeiro é um dos setores que paga os maiores salários do país, mas para ingressar nessa fatia do mercado é preciso possuir uma formação específica que capacite o profissional a compreender e resolver os problemas da área.
            Muito mais do que números, quem trabalha com finanças lida com gestão de pessoas e projetos, leis, logística, além, é claro, de cálculo, estatística e probabilidade, a perspectiva para os profissionais de finanças e contabilidade é otimista e a expectativa é de um aumento no número de contratações."
          />
        </div>
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Artes',
          }"
            :image="artes"
            title="  Comunicacao Artes e Cultura"
            description="Comunicação e arte são campos que se interligam profundamente e numerosos são os exemplos possíveis, a começar pela imagem. 

            Imagem é comunicação e é arte: cinema e fotografia são meios de comunicação que exploram a imagem e suas potencialidades. 
            
            Performance, dança contemporânea, teatro-dança são elementos das artes cênicas que levantam questões sobre o sentido, o signo, o significado e … a imagem. 
            
            Em diferentes níveis, com distintas visões e intenções, vários autores caros aos estudos da comunicação fizeram reflexões sobre a arte, a obra de arte, o artista e a imagem, os meios de comunicação de massa, a comunicação. "
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 ml-10">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Agro-Pecuaria',
          }"
            :image="agropecuaria"
            title="  Ceincias Agrarias"
            description="A área de Ciências Agrárias trata dos aspectos de exploração da terra, de criação de animais e de cultivo de vegetais. Suas atividades possuem o objetivo de aumentar a produção, aprimorar as tecnologias de manejo e preservação dos recursos naturais."
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Letras',
          }"
            :image="letras"
            title="  Ciencias Sociais"
            description="As Ciências Humanas, assim como a condição humana em si, têm um caráter múltiplo: ao mesmo tempo em que englobam características teóricas em ramos como Linguística, Gramática e Filosofia, apresentam características práticas através do Jornalismo, Comunicação Social e Direito. Envolvem também características subjetivas, como acontece no campo da Arte.

            Geralmente definidas como ciências “não exatas” e de grande margem subjetiva, as Ciências Humanas são também muito profundas, complexas e de grande importância na sociedade."
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Ver cursos de Educacao',
          }"
            :image="educacao"
            title="  Educacao"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          />
        </div>
      </div>
    </div>
  </section>
</template>
