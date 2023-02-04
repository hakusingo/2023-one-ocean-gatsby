import React from 'react'
import { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay } from "swiper";
// import 'swiper/css';
// import "swiper/css/effect-fade";


const Hero = () => {

  let now = new Date()
  let month = new Intl.DateTimeFormat('en', { month: 'short'}).format(new Date);
  let week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date().getDay()];
  let today = now.getDate()
  let year = now.getFullYear()

  useEffect(() => {

    let heroTextTop = document.getElementById("hero-text-top")
    let heroTextMiddle = document.getElementById("hero-text-middle")
    let heroTextBottom = document.getElementById("hero-text-bottom")
    let heroSubtitle = document.querySelectorAll(".hero-subtitle")
    setTimeout(function() {
      heroTextTop.classList.remove("opacity-0", "translate-x-4")
      heroTextTop.classList.add("opacity-100", "translate-x-0")
      setTimeout(function() {
        heroTextMiddle.classList.remove("opacity-0", "-translate-x-4")
        heroTextMiddle.classList.add("opacity-100", "translate-x-0")
        setTimeout(function() {
          heroTextBottom.classList.remove("opacity-0", "translate-x-4")
          heroTextBottom.classList.add("opacity-100", "translate-x-0")
          setTimeout(function() {
            heroSubtitle.forEach(function(value) {
              value.classList.remove("opacity-0")
              value.classList.add("opacity-100")
            },300)
          },500)
        },500)
      },500)
    },1000)

    let temp

    fetch(`https://api.openweathermap.org/data/2.5/weather/?q=Okinawa&APPID=250f298a0a84d6c21b9d810c9631b248`)
    .then(res => res.json())
    .then(result => {
      temp = (result.main.temp - 273.15)
      temp = Math.round(temp)
      document.getElementById("temp").textContent  = `${temp}℃`
      if(result.weather[0].main === "Clear") {
        document.getElementById("Clear").classList.remove("hidden")
      } else if(result.weather[0].main === "Clouds") {
        document.getElementById("Clouds").classList.remove("hidden")
      } else {
        document.getElementById("Rain").classList.remove("hidden")
      }
    });
  },[])

  return (
    <section id="front-hero" className="h-[calc(100vh-60px)] md:h-[calc(100vh-80px)] w-full mx-auto relative -z-10">
      {/* <div id="front-hero-cover" className="absolute z-20"></div> */}
      {/* <StaticImage
        imgClassName="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
        className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
        src="../../images/hero/hero-pic1.jpg"
        alt="ター滝ツアーの写真"
        objectPosition="30% 50%"
        placeholder="blurred"
        loading="eager" 
      /> */}
      <Swiper
        className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
        speed={4000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <StaticImage
            className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
            src="../../images/hero/hero-pic1.jpg"
            quality={90}
            alt="ター滝ツアーの写真"
            objectPosition="30% 50%"
            placeholder="white"
            loading="eager" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
            alt="親子でター滝ツアーの写真"
            src="../../images/hero/hero-pic2.jpg"
            objectPosition="50% 80%"
            quality={90}
            loading="eager" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
            alt="マングローブカヤック"
            src="../../images/hero/hero-pic3.jpg"
            objectPosition="50% 90%"
            quality={90}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="hero-image absolute top-0 left-0 bottom-0 right-0 -z-10"
            alt="マングローブカヤック"
            src="../../images/hero/hero-pic4.jpg"
            objectPosition="20% 50%"
            quality={90}
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute w-[92%] sm:w-[88%] h-[94%] border-white border-2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="will-change-transform absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[60%] md:-translate-y-[50%]">
        <svg 
          id="hero-text-top"
          className="duration-1000 opacity-0 translate-x-4 w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288 100">
          alt="オキナワ"
          <g transform="translate(-71.596 -250.724)"><g transform="translate(68.402 247.492)"><text transform="translate(147.194 80.232)" fill="#fff684" fontSize={72} fontFamily="mplus-1c-medium, 'M\+ \u31 c'" fontWeight={500} opacity="0.473"><tspan x={-144} y={0}>オキナワ</tspan></text><path d="M-101.656-58.456h9.416v11.232h15.48V-38.6H-92.24V-8.784c0,5-.656,7.975-2.064,9.354s-4.382,2.014-9.376,2.014a121.721,121.721,0,0,1-12.2-.725l-.957-.1.56-8.772,1.041.114a102.846,102.846,0,0,0,10.835.714c2,0,2.374-.341,2.389-.355s.355-.407.355-2.461V-29.577a165.641,165.641,0,0,1-14.283,12.423A146.3,146.3,0,0,1-132.922-5.827l-.875.5-4.363-7.8.87-.489a140.123,140.123,0,0,0,17.657-11.814A156.747,156.747,0,0,0-104.9-38.6h-32.9v-8.624h36.144Zm7.416,2h-5.416v11.232H-135.8V-40.6h35.619l-1.626,1.693A159.89,159.89,0,0,1-118.4-23.855a142.445,142.445,0,0,1-17.043,11.49l2.405,4.3a144.732,144.732,0,0,0,15.876-10.672,164.971,164.971,0,0,0,15.8-13.937l1.707-1.707V-9c0,2.029-.29,3.224-.941,3.875s-1.824.941-3.8.941A100.052,100.052,0,0,1-114.413-4.8l-.3,4.764c4.2.411,7.914.619,11.037.619,5.659,0,7.426-.9,7.976-1.442s1.464-2.277,1.464-7.926V-40.6h15.48v-4.624H-94.24Zm60.594-1.493,1.011,12.132,24.088-.865.372,8.841-23.72.791,1.207,14.923,25.022-.865.372,8.838-24.656.863,1.509,18.681-9.913.721-1.587-19.119-26.392.865-.372-8.838,26.024-.863-1.206-14.849-21.566.793-.372-8.838,21.2-.791-.933-11.7Zm-.824,14.2-1.005-12.06-5.929.431.939,11.772-21.278.793.2,4.842,21.49-.791,1.53,18.847-26.1.865.2,4.842,26.312-.863,1.581,19.041L-30.6,3.54l-1.515-18.759,24.736-.865-.2-4.842-24.946.863L-34.057-38.98l23.8-.793-.2-4.839ZM33.56-57.52h9.92v14.04H67.24v9.2H43.48v.8a59.862,59.862,0,0,1-1.634,14.757A29.7,29.7,0,0,1,36.865-7.959,27.181,27.181,0,0,1,27.994-.648a48.784,48.784,0,0,1-13.1,4.508l-.841.174L10.755-4.844l1.136-.239a41.725,41.725,0,0,0,10.475-3.51,19.018,19.018,0,0,0,6.5-5.191c3.112-4.074,4.691-10.7,4.691-19.7v-.8H4.76v-9.2h28.8Zm7.92,2H35.56v14.04H6.76v5.2h28.8v2.8a53.038,53.038,0,0,1-1.252,12.258,23.066,23.066,0,0,1-3.85,8.653,20.987,20.987,0,0,1-7.176,5.753,42.2,42.2,0,0,1-9.849,3.441l1.891,5.1A45.861,45.861,0,0,0,27.05-2.412a25.2,25.2,0,0,0,8.229-6.765A27.73,27.73,0,0,0,39.91-19.221,57.888,57.888,0,0,0,41.48-33.48v-2.8H65.24v-5.2H41.48ZM80-52.84h56.36V-37.8a49.356,49.356,0,0,1-2.739,17.068,32.8,32.8,0,0,1-8.285,12.676A38.435,38.435,0,0,1,111.594.025,69.642,69.642,0,0,1,92.577,3.518l-.907.052L90.285-5.391l1.091-.071a63.808,63.808,0,0,0,16.1-2.884A29.371,29.371,0,0,0,118.3-14.482a24.218,24.218,0,0,0,6.2-9.651A40.736,40.736,0,0,0,126.584-37.8v-5.84H89.56v18.36H80Zm54.36,2H82v23.56h5.56V-45.64h41.024v7.84a42.71,42.71,0,0,1-2.209,14.341,26.2,26.2,0,0,1-6.711,10.437A31.341,31.341,0,0,1,108.113-6.45,64.332,64.332,0,0,1,92.594-3.543l.774,5.008a66.653,66.653,0,0,0,17.562-3.327,36.456,36.456,0,0,0,13.034-7.651,30.813,30.813,0,0,0,7.78-11.912A47.378,47.378,0,0,0,134.36-37.8Z" transform="translate(144 77)" fill="#fff" /></g></g>
        </svg>
        <p className="duration-1000 opacity-0 hero-subtitle font-zenmaru text-[24px] md:text-[32px] leading-[1.4rem] lg:leading-[1rem] font-bold text-white text-center">
          LET'S ENJOY<br/>
        </p>
        <svg
          id="hero-text-middle"
          className="duration-1000 opacity-0 -translate-x-4 w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288.899 100">
          alt="ボウケン"
          <g transform="translate(-70.698 -386.956)"><g transform="translate(68.402 383.724)"><text transform="translate(147.194 80.232)" fill="#fff684" fontSize={72} fontFamily="mplus-1c-medium, 'M\+ \u31 c'" fontWeight={500} opacity="0.473"><tspan x={-144} y={0}>ボウケン</tspan></text><path d="M-78.231-62.515l.472.813c2.256,3.888,4.252,7.564,5.934,10.927l.452.9-7.212,3.511h.386v8.84h-24.84v31.4c0,4.6-.6,7.367-1.9,8.72s-4,2-8.462,2a84.456,84.456,0,0,1-11.733-.946l-.965-.138,1.025-8.755,1.015.145a66.42,66.42,0,0,0,9,.782,6.812,6.812,0,0,0,1.912-.174,11.535,11.535,0,0,0,.184-2.642V-37.52h-26.28v-8.84h26.28V-57.88h9.92v11.52h13.582c-1.711-3.326-3.639-6.868-5.73-10.528l-.519-.908,7.1-3.647.478.819c2.017,3.458,3.966,7.063,5.791,10.713l.447.894L-87.2-46.36h8.568l-.441-.838c-1.429-2.716-3.412-6.342-5.892-10.778l-.511-.914Zm4.161,11.731c-1.443-2.839-3.1-5.893-4.949-9.1l-3.694,1.847c2.007,3.6,3.668,6.634,4.952,9.051Zm-10.507.873c-1.53-3.019-3.142-6-4.8-8.886l-3.554,1.825c1.73,3.051,3.344,6.015,4.81,8.836Zm-20.464-5.97h-5.92v11.52h-26.28v4.84h26.28V-7.128c0,2.618-.244,3.464-.61,3.93-.495.629-1.5.886-3.486.886a64.516,64.516,0,0,1-8.269-.661l-.56,4.781A80.025,80.025,0,0,0-113.4,2.6c4.953,0,6.523-.867,7.018-1.384s1.342-2.173,1.342-7.336v-33.4H-80.2v-4.84h-24.84Zm63.72-3.08h9.56V-47.8H-7.64v13.6a41.736,41.736,0,0,1-2.708,15.481A31.077,31.077,0,0,1-18.52-7,38.539,38.539,0,0,1-31.85.595,67.859,67.859,0,0,1-49.983,3.878l-.922.052L-52.113-4.9l1.079-.063a59.361,59.361,0,0,0,14.96-2.6A30.305,30.305,0,0,0-25.55-13.283,22.821,22.821,0,0,0-19.3-22.1a32.483,32.483,0,0,0,2.1-12.1v-4.976H-55.016V-22.4H-64.36V-47.8h23.04Zm7.56,2h-5.56V-45.8H-62.36v21.4h5.344V-41.176H-15.2V-34.2a34.46,34.46,0,0,1-2.245,12.846,24.8,24.8,0,0,1-6.792,9.58A32.282,32.282,0,0,1-35.449-5.656,60.039,60.039,0,0,1-49.84-3.031l.664,4.856A64.869,64.869,0,0,0-32.5-1.3,36.558,36.558,0,0,0-19.856-8.484a29.094,29.094,0,0,0,7.65-10.975A39.756,39.756,0,0,0-9.64-34.2V-45.8H-33.76Zm49.8-1.055,9.326.64-.1,1.028a76.435,76.435,0,0,1-1.387,8.907H67.6v8.84H50.311a73.225,73.225,0,0,1-1.829,16.147A37,37,0,0,1,43.046-9.828,29.331,29.331,0,0,1,33.63-1.321,43.5,43.5,0,0,1,20.061,3.5l-.866.167L16.41-4.872l1.114-.214A33.926,33.926,0,0,0,28.145-8.839a21.1,21.1,0,0,0,6.991-6.41,29.078,29.078,0,0,0,4-9.954,66.529,66.529,0,0,0,1.4-13.4H21.21A57.34,57.34,0,0,1,10.761-21.59l-.571.653L2.541-25.913l.725-.865A54.131,54.131,0,0,0,11.731-40.67a60.667,60.667,0,0,0,4.2-16.4Zm7.123,2.494L17.8-55.89A62.291,62.291,0,0,1,13.577-39.9,56.088,56.088,0,0,1,5.514-26.365l4.307,2.8a54.842,54.842,0,0,0,9.761-16.386l.242-.651H42.548l0,1a70.178,70.178,0,0,1-1.455,14.83,31.042,31.042,0,0,1-4.3,10.638,23.082,23.082,0,0,1-7.643,7.018A34.971,34.971,0,0,1,19.01-3.349l1.537,4.713A40.811,40.811,0,0,0,32.629-3.053,27.345,27.345,0,0,0,41.41-10.98a35.023,35.023,0,0,0,5.129-11.945A72.616,72.616,0,0,0,48.32-39.6l0-1H65.6v-4.84H21.327l.311-1.243A68.18,68.18,0,0,0,23.16-55.521Zm61.871.991.87.422c8.1,3.93,15.587,7.941,22.252,11.921l.841.5-4.8,8.427-.873-.513c-7.957-4.669-15.3-8.654-21.821-11.844l-.926-.453Zm21.255,13.56c-6.161-3.643-13.011-7.311-20.388-10.915l-2.6,4.929c6.091,3.013,12.862,6.691,20.156,10.949Zm24.331-6.738L139.75-45.7l-.165.944a63.919,63.919,0,0,1-6.23,18.885,47.918,47.918,0,0,1-11.278,14.158A53.3,53.3,0,0,1,105.816-2.4,82.258,82.258,0,0,1,84.688,2.076l-.94.083-1.37-9.318,1.047-.1a75.415,75.415,0,0,0,18.376-3.9,44.719,44.719,0,0,0,13.656-7.673,39.906,39.906,0,0,0,9.4-11.715,57.568,57.568,0,0,0,5.56-16.153Zm6.827,3.55-5.267-1.159A58.79,58.79,0,0,1,126.62-29.6a41.9,41.9,0,0,1-9.875,12.3,46.707,46.707,0,0,1-14.262,8.023,76.315,76.315,0,0,1-17.82,3.909L85.451,0a79.4,79.4,0,0,0,19.674-4.27,51.308,51.308,0,0,0,15.654-8.962,45.927,45.927,0,0,0,10.808-13.571A61.286,61.286,0,0,0,137.444-44.158ZM-88.515-33.106l.417.835c4.309,8.618,8.315,17.286,11.906,25.761l.4.933L-84.7-1.941l-.384-.91C-88.856-11.767-92.8-20.4-96.8-28.5l-.472-.956ZM-78.429-6.662c-3.356-7.866-7.065-15.889-11.041-23.879l-5.066,2.111c3.723,7.583,7.387,15.611,10.9,23.892Zm-50.793-26.051,9.015,3.1-.4.981c-3.547,8.629-7.558,17.208-11.92,25.5l-.437.831L-141.7-6.217l.49-.941c4.24-8.146,8.152-16.455,11.63-24.7Zm6.356,4.3-5.241-1.8c-3.271,7.69-6.915,15.431-10.846,23.04l5.087,2.279C-129.865-12.561-126.169-20.464-122.866-28.415Z" transform="translate(144 77)" fill="#fff" /></g></g>
        </svg>
        <p className="duration-1000 opacity-0 hero-subtitle font-zenmaru text-[24px] md:text-[32px] lg-[32px] leading-[1.4rem] lg:leading-[1rem] font-bold text-white text-center ">
          OKINAWA<br/>
        </p>
        <svg
          id="hero-text-bottom"
          xmlns="http://www.w3.org/2000/svg" 
          className="duration-1000 opacity-0 translate-x-4 w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px]"
          viewBox="0 0 288 100">
          alt="タノシム"
          <g transform="translate(-71.596 -523.188)"><g transform="translate(68.402 519.956)"><text transform="translate(147.194 80.232)" fill="#fff684" fontSize={72} fontFamily="mplus-1c-medium, 'M\+ \u31 c'" fontWeight={500} opacity="0.473"><tspan x={-144} y={0}>タノシム</tspan></text><path d="M-122.924-58.016l9.182.643-.1,1.025c-.161,1.613-.425,3.394-.787,5.308H-81.44v3.88a73.109,73.109,0,0,1-2.9,21.683,38.645,38.645,0,0,1-8.792,15.442A41.192,41.192,0,0,1-108.317-.362a80.42,80.42,0,0,1-21.92,4.6l-.926.077-1.39-8.806,1.057-.1c8.262-.8,15.142-2.329,20.449-4.536A33.3,33.3,0,0,0-103.97-13.1a27.574,27.574,0,0,0,4.641-4.351c-7.763-3.908-14.783-7.248-20.881-9.933l-.978-.431,4.384-8.4.858.38c7.618,3.376,14.81,6.775,21.4,10.112A53.9,53.9,0,0,0-91.477-42.2h-25.538a54.175,54.175,0,0,1-5.575,11.158A56.982,56.982,0,0,1-131.218-20.8l-.676.637-6.586-6.03.775-.739a47.124,47.124,0,0,0,9.87-13.644,51.12,51.12,0,0,0,4.8-16.49Zm6.975,2.493-5.215-.365A53.144,53.144,0,0,1-126.036-39.7a49.286,49.286,0,0,1-9.524,13.473l3.641,3.334a54.723,54.723,0,0,0,7.656-9.24,52.225,52.225,0,0,0,5.6-11.392l.234-.671h29.037l-.039,1.038c-.291,7.67-1.529,14.135-3.678,19.216l-.419.99-.957-.489c-6.571-3.354-13.77-6.777-21.413-10.18l-2.528,4.846c6.191,2.752,13.285,6.148,21.1,10.1l1.076.544-.734.957a31.8,31.8,0,0,1-13.3,9.89,72.794,72.794,0,0,1-19.967,4.573l.77,4.874A77.335,77.335,0,0,0-109.033-2.23a39.218,39.218,0,0,0,14.459-9.191,36.671,36.671,0,0,0,8.326-14.654A71.135,71.135,0,0,0-83.44-47.16v-1.88h-33.633l.245-1.2C-116.441-52.138-116.146-53.91-115.949-55.523ZM98.245-55.95l9.664,1.806-.23,1.013A354.351,354.351,0,0,1,94.511-8.539c10.944-.894,21.191-2.04,30.5-3.41-3.222-6.7-5.9-12.19-7.974-16.332l-.459-.917,8.717-4.086.439.863c5.406,10.621,10.452,21.149,15,31.293l.417.931-8.984,3.812-.392-.916c-.285-.664-.779-1.786-1.47-3.334-.527-1.181-.981-2.168-1.355-2.946a466.777,466.777,0,0,1-51.66,4.942l-1,.036-.279-8.843,1-.031C78.43-7.524,80.7-7.632,83.75-7.8A383.562,383.562,0,0,0,98.026-55.021Zm7.253,3.39-5.744-1.074A384.544,384.544,0,0,1,85.391-6.486l-.23.608-.649.037c-2.743.155-4.9.263-6.441.325l.153,4.84A468.145,468.145,0,0,0,129.38-5.669l.718-.108.325.649c.436.873,1.012,2.11,1.711,3.676.442.991.805,1.81,1.085,2.448l5.275-2.238c-4.3-9.551-9.037-19.435-14.1-29.41l-5.107,2.394c2.137,4.292,4.864,9.892,8.117,16.665l.586,1.22-1.338.2C116.5-8.639,105.214-7.376,93.1-6.419L91.534-6.3l.554-1.473A350.579,350.579,0,0,0,105.5-52.56Zm-93.117-3.3.955.155c6.8,1.1,15.046,2.629,24.518,4.543l.974.2-1.752,8.947-.986-.2c-9.447-1.909-17.67-3.432-24.442-4.529l-1.02-.165Zm24.1,6.462c-8.6-1.729-16.166-3.132-22.512-4.177l-.983,5.02C19.342-47.51,26.9-46.106,35.5-44.379ZM-22.15-55.083l10.273.893-.086,1a93.942,93.942,0,0,1-4.361,22.134,50.5,50.5,0,0,1-8.792,16.185A48.462,48.462,0,0,1-39.22-3.613,82.839,82.839,0,0,1-59.381,3.852l-.873.211L-63.67-5.465l1.085-.26c9.052-2.169,16.436-5.207,21.947-9.029a37.138,37.138,0,0,0,7.283-6.625,39.083,39.083,0,0,0,5.379-8.46c2.959-6.271,4.89-14.429,5.74-24.247Zm8.1,2.712-6.288-.547a94.485,94.485,0,0,1-2.039,12.783,57.133,57.133,0,0,1-3.795,11.149,41.086,41.086,0,0,1-5.655,8.892A39.136,39.136,0,0,1-39.5-13.11a52.937,52.937,0,0,1-9.99,5.332A84.335,84.335,0,0,1-61.036-4.045l2.057,5.739a79.892,79.892,0,0,0,18.8-7.063A46.477,46.477,0,0,0-26.651-16.158a48.515,48.515,0,0,0,8.434-15.549A90.707,90.707,0,0,0-14.047-52.371Zm72.635,6.146,9.172,1.559-.176.992A74.68,74.68,0,0,1,61.34-23.659,43.894,43.894,0,0,1,50.69-9.608,48.707,48.707,0,0,1,34.741-.836,92.987,92.987,0,0,1,12.686,3.516L11.75,3.6,10.373-5.586l1.062-.09A87.547,87.547,0,0,0,31.009-9.347a40.019,40.019,0,0,0,13.419-7.077,34.814,34.814,0,0,0,8.691-11.544,65.8,65.8,0,0,0,5.3-17.277Zm6.846,3.193-5.228-.889a66.676,66.676,0,0,1-5.29,16.827,36.793,36.793,0,0,1-9.2,12.2A41.989,41.989,0,0,1,31.631-7.447,87.961,87.961,0,0,1,12.666-3.779l.783,5.218A89.808,89.808,0,0,0,34.09-2.728a46.729,46.729,0,0,0,15.3-8.4A41.911,41.911,0,0,0,59.548-24.545,71.668,71.668,0,0,0,65.435-43.032Zm-56.291,4.8.967.172c6.457,1.148,14.411,2.676,23.639,4.54l.974.2-1.753,8.948-.987-.2C23.3-26.346,15.36-27.871,8.393-29.111l-1-.178ZM32.38-31.76c-8.348-1.682-15.621-3.08-21.651-4.162L9.745-30.9c6.471,1.162,13.744,2.56,21.651,4.161Z" transform="translate(144 77)" fill="#fff" /></g></g>
        </svg>
      </div>
      {/* <StaticImage
        className="absolute bottom-[4%] right-[7%]"
        src="../../images/hero/hero-weather.svg"
        alt="okinawa weathernews"
      /> */}
      <div className="z-30 absolute bottom-[4%] right-[7%] bg-main-blue w-[124px] h-[124px] rounded-[50%] flex justify-center items-center">
        <div className="w-[110px] h-[110px] border-2 border-dashed rounded-[50%]">
          <div className="text-white w-full h-full flex flex-col justify-center items-center">
            <div className="flex justify-center font-semibold pb-2">
              <time dateTime={now} className="text-[12px] block">
                {`${week}.${month}.${today}.${year}`}
              </time>
            </div>
            <div className="flex justify-center">
              <div className="">
                {/* <img src={`https://api.openweathermap.org/data/2.5/${data.weather[0].icon}.png`} 
                  alt={data.weather[0].description}
                /> */}
                <svg
                  id="Clear"
                  className='hidden'
                  xmlns="http://www.w3.org/2000/svg" 
                  width="38.639" height="38.675" viewBox="0 0 38.639 38.675"><path d="M5.244,24.119A1.537,1.537,0,0,1,5.7,22.992a1.572,1.572,0,0,1,1.091-.437H10.5a1.379,1.379,0,0,1,1.055.455,1.709,1.709,0,0,1,.018,2.219,1.352,1.352,0,0,1-1.055.455H6.808a1.485,1.485,0,0,1-1.091-.455A1.513,1.513,0,0,1,5.244,24.119Zm5.2,12.607a1.685,1.685,0,0,1,.418-1.11l2.674-2.6a1.4,1.4,0,0,1,1.073-.418,1.541,1.541,0,0,1,1.091.418,1.36,1.36,0,0,1,.437,1.037,1.716,1.716,0,0,1-.437,1.164L13.121,37.8a1.652,1.652,0,0,1-2.238,0A1.469,1.469,0,0,1,10.447,36.726Zm0-25.177a1.685,1.685,0,0,1,.418-1.11,1.747,1.747,0,0,1,1.164-.455,1.529,1.529,0,0,1,1.073.437L15.7,13.1a1.412,1.412,0,0,1,.437,1.073A1.492,1.492,0,0,1,14.613,15.7a1.412,1.412,0,0,1-1.073-.437l-2.656-2.6A1.523,1.523,0,0,1,10.447,11.549Zm4.639,12.57a9.182,9.182,0,0,1,1.273-4.73,9.5,9.5,0,0,1,3.475-3.475,9.333,9.333,0,0,1,8.4-.509,9.5,9.5,0,0,1,3.02,2.037,9.546,9.546,0,0,1,2.765,6.694,9.2,9.2,0,0,1-1.273,4.748,9.54,9.54,0,0,1-3.456,3.456,9.488,9.488,0,0,1-9.5,0,9.54,9.54,0,0,1-3.456-3.456A9.665,9.665,0,0,1,15.086,24.119Zm3.093,0a6.428,6.428,0,0,0,6.4,6.44,6.46,6.46,0,0,0,6.44-6.44,6.132,6.132,0,0,0-1.892-4.493,6.233,6.233,0,0,0-4.548-1.856,6.151,6.151,0,0,0-4.512,1.856A6.063,6.063,0,0,0,18.178,24.119Zm4.839,14.153a1.429,1.429,0,0,1,.455-1.091,1.54,1.54,0,0,1,1.091-.437,1.523,1.523,0,0,1,1.11.437,1.481,1.481,0,0,1,.437,1.091v3.62a1.537,1.537,0,0,1-.455,1.128,1.485,1.485,0,0,1-1.091.455,1.456,1.456,0,0,1-1.091-.455,1.537,1.537,0,0,1-.455-1.128Zm0-28.2V6.364a1.485,1.485,0,0,1,.455-1.091,1.513,1.513,0,0,1,1.11-.473,1.456,1.456,0,0,1,1.091.455,1.485,1.485,0,0,1,.455,1.091v3.729a1.379,1.379,0,0,1-.455,1.055,1.524,1.524,0,0,1-1.091.418,1.572,1.572,0,0,1-1.091-.418A1.432,1.432,0,0,1,23.017,10.076ZM33.059,34.052A1.429,1.429,0,0,1,34.5,32.615a1.541,1.541,0,0,1,1.091.418l2.656,2.6a1.583,1.583,0,0,1,.437,1.11,1.469,1.469,0,0,1-.437,1.073,1.62,1.62,0,0,1-2.183,0l-2.583-2.583A1.771,1.771,0,0,1,33.059,34.052Zm0-19.865a1.41,1.41,0,0,1,.418-1.073l2.583-2.674A1.529,1.529,0,0,1,37.134,10a1.429,1.429,0,0,1,1.091.455,1.485,1.485,0,0,1,.455,1.091,1.536,1.536,0,0,1-.437,1.128l-2.656,2.6a1.6,1.6,0,0,1-1.091.437,1.321,1.321,0,0,1-1.019-.437A1.541,1.541,0,0,1,33.059,14.187Zm4.111,9.933a1.627,1.627,0,0,1,.437-1.128,1.417,1.417,0,0,1,1.037-.437h3.675a1.544,1.544,0,0,1,1.091,2.656,1.485,1.485,0,0,1-1.091.455H38.644a1.352,1.352,0,0,1-1.055-.455A1.572,1.572,0,0,1,37.17,24.119Z" transform="translate(-5.244 -4.8)" fill="#fff" />
                </svg>
                <svg
                  id="Clouds"
                  className='hidden'
                  xmlns="http://www.w3.org/2000/svg" 
                  width="38.639" height="38.675" viewBox="0 0 64 64"><title>くもり</title><path fill="#fff" d="M42.08105,31.9375c-4.87631-12.112-22.42279-10.675-25.40574,1.97576a11.28553,11.28553,0,1,0-1.38967,22.48518h28.8003A12.31273,12.31273,0,1,0,42.08105,31.9375Zm2.00489,22.46094H15.28564a9.285,9.285,0,1,1,1.9757-18.35731A1.00644,1.00644,0,0,0,18.46581,35.21,11.34464,11.34464,0,0,1,40.48,33.39551a1.00308,1.00308,0,0,0,1.18555.666,10.31607,10.31607,0,0,1,11.02,4.334C57.24829,45.067,52.18463,54.50734,44.08594,54.39844Z" /><path fill="#fff" d="M47.68994,15.83008a12.07762,12.07762,0,0,0-2.00793.18652,13.337,13.337,0,0,0-25.40143,1.9682A11.26478,11.26478,0,0,0,7.6001,29.16992a11.55439,11.55439,0,0,0,.51367,3.38281.99993.99993,0,1,0,1.9121-.58594,9.54763,9.54763,0,0,1-.42577-2.79687,9.3247,9.3247,0,0,1,11.2915-9.072.99172.99172,0,0,0,1.10968-.639C23.85892,7.57255,40.19937,5.98256,44.08013,17.45522a1.00618,1.00618,0,0,0,.97445.67588C54.627,15.77559,61.89,26.77612,55.7582,34.55579a1.00047,1.00047,0,0,0,1.56361,1.24786C63.75592,27.9662,57.84125,15.696,47.68994,15.83008Z" />
                </svg>
                <svg 
                  id="Rain"
                  className='hidden'
                  width="38.639" height="38.675" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                  <g id="Stroke_Cut_copy_3">
                    <g>
                      <path fill="#fff" d="M10,36c0.6,0,1-0.4,1-1s-0.4-1-1-1c-3.3,0-6-2.7-6-6s2.7-6,6-6c0.2,0,0.3,0,0.5,0c0.5,0,0.9-0.2,1-0.7
                        c1.1-3.3,4-5.6,7.4-6.2c0.4-0.1,0.7-0.3,0.8-0.7C21.7,8.2,27.4,4,34,4c4.6,0,8.9,2.1,11.8,5.7c0.2,0.3,0.6,0.4,0.9,0.4
                        C47.1,10,47.6,10,48,10c6.6,0,12,5.4,12,12s-5.4,12-12,12c-1.5,0-3.1-0.3-4.5-0.9c0.9-0.6,1.7-1.3,2.5-2.1c0.4-0.4,0.4-1,0-1.4
                        s-1-0.4-1.4,0C41.8,32.4,38,34,34,34c-2.5,0-4.8-0.6-7-1.7c0,0,0,0,0,0c-1.3-0.7-2.5-1.6-3.6-2.7c-0.4-0.4-1-0.4-1.4,0
                        s-0.4,1,0,1.4c0.8,0.8,1.6,1.5,2.5,2.1c-3,1.4-6.6,1.1-9.3-0.7c-0.5-0.3-1.1-0.2-1.4,0.3c-0.3,0.5-0.2,1.1,0.3,1.4
                        c1.9,1.3,4.1,1.9,6.4,1.9c2.2,0,4.2-0.6,6-1.7c2.3,1.1,4.8,1.7,7.5,1.7c2.6,0,5.1-0.6,7.4-1.7c2,1.1,4.3,1.7,6.6,1.7
                        c7.7,0,14-6.3,14-14S55.7,8,48,8c-0.3,0-0.7,0-1,0C43.7,4.2,39,2,34,2c-7.2,0-13.6,4.5-16,11.3c-3.6,0.8-6.6,3.3-8.1,6.7
                        C5.5,20,2,23.6,2,28C2,32.4,5.6,36,10,36z" />
                      <path fill="#fff" d="M25.2,51.4C24.6,52.2,22,56.1,22,58c0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.9-2.6-5.8-3.2-6.6C26.4,50.9,25.6,50.9,25.2,51.4z
                        M26,60c-1.1,0-2-0.9-2-2c0-0.7,0.9-2.5,2-4.2c1.1,1.7,2,3.5,2,4.2C28,59.1,27.1,60,26,60z" />
                      <path fill="#fff" d="M44.2,45.4C43.6,46.2,41,50.1,41,52c0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.9-2.6-5.8-3.2-6.6C45.4,44.9,44.6,44.9,44.2,45.4z
                        M45,54c-1.1,0-2-0.9-2-2c0-0.7,0.9-2.5,2-4.2c1.1,1.7,2,3.5,2,4.2C47,53.1,46.1,54,45,54z" />
                      <path fill="#fff" d="M16.2,38.4C15.6,39.2,13,43.1,13,45c0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.9-2.6-5.8-3.2-6.6C17.4,37.9,16.6,37.9,16.2,38.4z
                        M17,47c-1.1,0-2-0.9-2-2c0-0.7,0.9-2.5,2-4.2c1.1,1.7,2,3.5,2,4.2C19,46.1,18.1,47,17,47z" />
                      <path fill="#fff" d="M11,52c-0.6,0-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.8,1.5-3.5,2.8-5.4c0.3-0.5,0.2-1.1-0.3-1.4
                        c-0.5-0.3-1.1-0.2-1.4,0.3C6.6,47.2,4,51.1,4,53c0,2.2,1.8,4,4,4s4-1.8,4-4C12,52.4,11.6,52,11,52z" />
                      <path fill="#fff" d="M54.2,37.4C53.6,38.2,51,42.1,51,44c0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.9-2.6-5.8-3.2-6.6C55.4,36.9,54.6,36.9,54.2,37.4z
                        M55,46c-1.1,0-2-0.9-2-2c0-0.7,0.9-2.5,2-4.2c1.1,1.7,2,3.5,2,4.2C57,45.1,56.1,46,55,46z" />
                      <path fill="#fff" d="M37,44c-0.6,0-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.8,1.5-3.5,2.8-5.4c0.3-0.5,0.2-1.1-0.3-1.4
                        c-0.5-0.3-1.1-0.2-1.4,0.3C32.6,39.2,30,43.1,30,45c0,2.2,1.8,4,4,4s4-1.8,4-4C38,44.4,37.6,44,37,44z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-center">
                <p id="temp" className="text-[20px] font-bold mb-[-10px]">
                </p>
                <span className="text-[10px] inline-block mt-[-4px] ">
                  OKINAWA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
