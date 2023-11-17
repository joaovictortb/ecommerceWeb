import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/wallpaper2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>
                  Soluções inteligentes <br /> para o plantio
                </h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/wallpaper3.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>
                  Tecnologias para
                  <br />
                  plantio sustentável
                </h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Calcule o frete</h4>
                <p>Desconto em compras acima de $199</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% de clientes satisfeitos</h4>
                <p>As opiniões dos nossos clientes falam por si</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originalidade garantida</h4>
                <p>30 dias de garantia para cada produto de nossa loja</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
