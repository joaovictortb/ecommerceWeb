import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />
            </h6>
            <p>
              A FertiSystem, fundada em 2002 como Agromac, busca inovar na
              plantabilidade e criar produtos sustentáveis de alta tecnologia.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li>
                <a href="#">Status do pedido</a>
              </li>
              <li>
                <a href="#">Envio e entrega</a>
              </li>
              <li>
                <a href="#">Devoluções</a>
              </li>
              <li>
                <a href="#">Opções de pagamento</a>
              </li>
              <li>
                <a href="#">Contate-nos</a>
              </li>
            </ul>
            <ul>
              <li>Informação</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Cartões de presente</a>
              </li>
              <li>
                <a href="#">Boletim de Notícias</a>
              </li>
              <li>
                <a href="#">Torne-se um membro</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contato</li>
              <li>
                <a href="#">sac@agromac.com.br</a>
              </li>
              <li>
                <a href="#">WhatsApp: +55 54 99929-1250</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            Younner Sistemas de Informatica LTDA - © 2023. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
