import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/page1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Fert Sensor Adubo</h3>
              <a href="#" className="btn btn--rounded">
                Mais Detalhes{" "}
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/page2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Auto-Lub AP NG PH</h3>
              <a href="#" className="btn btn--rounded">
                Mais Detalhes
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/page3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>ITS 5000</h3>
              <a href="#" className="btn btn--rounded">
                Ver todos
              </a>
            </div>
          </article>
        </div>
      </section>

      <ProductsFeatured />

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Por que você deve escolher-nos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Desconto no Frete</h4>
                <p>
                  Todas as compras acima de $ 199 são elegíveis para frete
                  grátis via Correios.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagamentos fáceis</h4>
                <p>
                  Todos os pagamentos são processados ​​instantaneamente através
                  de um pagamento seguro protocolo.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia de devolução</h4>
                <p>
                  Se um item chegou danificado ou você mudou de ideia, você pode
                  enviá-lo de volta para um reembolso total.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Melhor qualidade</h4>
                <p>
                  Projetado para durar, cada um dos nossos produtos foi
                  elaborado com os melhores materiais.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
