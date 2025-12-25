
import "../src/sass/app.scss";
import '../src/small.js';
import leftArrow from "../src/icons/leftarrow.png";
import rightArrow from "../src/icons/rightarrow.png";

const dematAccountBenefits = [
  {
    title: "Quick & Secure Online Account Opening",
    description: "Open your demat account in just 5 minutes with our paperless process.",
    image: require("./img/image1.png")
  },
  {
    title: "Multiple Financial Investment Options",
    description: "Access stocks, commodities, derivatives, IPOs, mutual funds, and more.",
    image: require("./img/image2.png")
  },
  {
    title: "Access to Expert Research & Analysis",
    description: "Make informed decisions with expert insights and reports.",
    image: require("./img/image3.png")
  },
  {
    title: "Low & Transparent Brokerage Charges",
    description: "Enjoy competitive rates with no hidden fees.",
    image: require("./img/image4.png")
  }, {
    title: "Access to Expert Research & Analysis",
    description: "Make informed decisions with expert insights and reports.",
    image: require("./img/image5.png")
  },
  {
    title: "Low & Transparent Brokerage Charges",
    description: "Enjoy competitive rates with no hidden fees.",
    image: require("./img/image6.png")
  }
];

const scrollCards = (direction) => {
  const container = document.getElementById("benefitsScroll");
  const cardWidth = container.firstChild.offsetWidth + 16;
  container.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
};

const DematAccountBenefits = () => {
  return (
    <section className="demat-benefits">
      <h2 className="demat-benefits__title">
        Why Open a Demat Account with Choice?
      </h2>
      <div className="demat-benefits__container">


        <div className="demat-benefits__wrapper" id="benefitsScroll" >
          {dematAccountBenefits.map((item, index) => (
            <div className="demat-benefits__card" key={index}>
              <img src={item.image} />
              <h3 className="demat-benefits__card-title">
                {item.title}
              </h3>
              <p className="demat-benefits__card-text">
                {item.description}
              </p>
            </div>
          ))}
          <div className="swiper-wrapper">
            {/* <div className="swiper-btn">
              <button className="nav-btn left" onClick={() => scrollCards(-1)}>
                ‹
              </button>
              <button className="nav-btn right" onClick={() => scrollCards(1)}>
                ›
              </button>
            </div> */}
            <div className="swiper-btn">
              <img
                src={leftArrow}
                className="nav-btn left"
                onClick={() => scrollCards(-1)}
                alt="Previous"
              />
              <img
                src={rightArrow}
                className="nav-btn right"
                onClick={() => scrollCards(1)}
                alt="Next"
              />
            </div>
          </div>

          <div className="demat-benefitscard desktopshow  ">
            <div className="demat-benefits__highlight">
              <div className="highlight-row">
                <div className="highlight-div">
                  <h4>Leading</h4>
                  <p>Full-Service Broker</p>
                </div>

                <div className="highlight-div">

                  <h4>33,600 Cr.</h4>
                  <p>Assets Under Management</p>
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-div">
                  <h4>Strong</h4>
                  <p>Research Desk</p>
                </div>

                <div className="highlight-div">
                  <h4>SEBI-Registered</h4>
                  <p>Secure & Compliant</p>
                </div>
              </div>


            </div>
            <button className="highlight-btn">
              Get Started Now →
            </button>
          </div>
        </div>
        <div className="demat-benefitscard desktopshow desktophide ">
          <div className="demat-benefits__highlight">
            <div className="highlight-row">
              <div className="highlight-div">
                <h4>Leading</h4>
                <p>Full-Service Broker</p>
              </div>

              <div className="highlight-div">
                <h4>Strong</h4>
                <p>Research Desk</p>
              </div>
            </div>

            <div className="highlight-row">
              <div className="highlight-div">
                <h4>33,600 Cr.</h4>
                <p>Assets Under Management</p>
              </div>

              <div className="highlight-div">
                <h4>SEBI-Registered</h4>
                <p>Secure & Compliant</p>
              </div>
            </div>
          </div>
          <button className="highlight-btn">
            Get Started Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DematAccountBenefits;
