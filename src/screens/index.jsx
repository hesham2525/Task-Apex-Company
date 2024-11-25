import "./mainIndex.css";

import { FaLongArrowAltLeft } from "react-icons/fa";

import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { useState } from "react";
import Offers from "../components/offers";
import Footer from "../components/footer/footer";
import Header from "../components/Header/Header";
import { PiPushPinLight } from "react-icons/pi";

// import { IoArrowForwardOutline } from "react-icons/io5";
// import { IoArrowBackOutline } from "react-icons/io5";

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const cities = [
    [
      { id: 5, name: " محافظة الظفار", img: "/2.jpeg" },
      { id: 4, name: "ولايةالعامرات", img: "/4.jpg" },
      { id: 3, name: "ولاية مسقط", img: "/3.jpg" },
      { id: 2, name: "ولاية صلالة", img: "/2.jpeg" },
      { id: 1, name: "ولاية بوشر", img: "/1.jpg" },
    ],
    [
      { id: 6, name: "ولاية عدن", img: "/6.webp" },
      { id: 4, name: "ولايةالعامرات", img: "/4.jpg" },
      { id: 5, name: " محافظة الظفار", img: "/2.jpeg" },
    ],
    [
      { id: 7, name: "سلطنة عمان ", img: "/7.jpg" },
      { id: 3, name: "ولاية مسقط", img: "/3.jpg" },
      { id: 1, name: "ولاية بوشر", img: "/1.jpg" },
    ],
    [
      { id: 8, name: "ولاية بوشر", img: "/image1.jpeg" },
      { id: 2, name: "ولاية صلالة", img: "/2.jpeg" },
    ],
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <div className="container1">
        <Header />

        <div className="cities">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/clouds/100/umbrella.png"
            alt="umbrella"
          />
          <div className="citiesText">
            <h2 className="cityText1">استكشف الوجهات</h2>
            <h5 className="cityText2">استمتع باستكشاف الرحلات الممتعة معنا </h5>
          </div>
        </div>
        <br />

        <div className="citiesImages">
          {cities[activeSlide].map((city) => (
            <div className="cityImage" key={city.id}>
              <img className="imgCity" src={city.img} alt={city.name} />
              <br />
              <h5>{city.name}</h5>
            </div>
          ))}
        </div>
        <div className="dots">
          {cities.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeSlide === index ? "activeDot" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              {activeSlide === index ? (
                <GoDotFill style={{ color: "#3a8ae0", fontSize: "20px" }} />
              ) : (
                <GoDot style={{ fontSize: "20px" }} />
              )}
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="service">
          <div className="serviceText">
            <div className="MainText">
              <h3 id="services" className="cityText1">
                الخدمات{" "}
              </h3>
              <br />
              <p className="cityText2">
                توفر شركة{" "}
                <span style={{ fontWeight: "bold" }}>Round in Oman</span> العديد
                من الخدمات{" "}
              </p>
              <p className="cityText2">
                المتنوعة و المتميزة استكشفها و استمتع معنا{" "}
              </p>
            </div>
            <br />
            <div className="offerText">
              <Offers
                MainclassName="offer1"
                className="offerImage1"
                imgSrc="https://img.icons8.com/fluency/48/coco-tree.png"
                title="خدمات الرحلات"
                title2="فرصه رائعة لاكتشاف اماكن جديدة و تجربة مغامرات متميزة"
              />
              <br />
              <Offers
                MainclassName="offer2"
                className="offerImage2"
                imgSrc="https://img.icons8.com/fluency/48/car--v1.png"
                title="خدمات التنقل"
                title2="يمكنك حجز تاكسي او تأجير سيارة حسب طلبك لاكمال رحلتك معنا"
              />
              <br />
              <Offers
                MainclassName="offer3"
                className="offerImage3"
                imgSrc="https://img.icons8.com/emoji/50/tent-emoji.png"
                title="الخدمات الترفيهية"
                title2="وسيلة رائعة لاضافه المتعة على رحلتك . اختارالانشطة التي تناسب اهتماماتك "
              />
              <br />
              <Offers
                MainclassName="offer4"
                className="offerImage4"
                imgSrc="https://img.icons8.com/fluency/48/building.png"
                title="خدمة حجز الفنادق "
                title2="خدمة حجز الفندق هي وسيلة مريحة و سهلة لضمان مكان اقامة مناسب   "
              />
            </div>
          </div>

          <div className="serviceImage">
            <img src="/image1.jpeg" alt="image1" className="image1" />
            <img src="/image2.jpeg" alt="image2" className="image2" />
          </div>
          <img
            className="sun"
            style={{}}
            width="64"
            height="64"
            src="https://img.icons8.com/dusk/64/sun--v1.png"
            alt="sun--v1"
          />
        </div>
        <img
          className="waveLines"
          style={{ right: "0px" }}
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/wave-lines.png"
          alt="wave-lines"
        />
        <div className="travel">
          <img className="backgroundImage" src="/background.png" alt="" />
          <div className="travelText1">
            <button className="btn4">
              <FaLongArrowAltLeft /> استكشف
            </button>
          </div>
          <div className="travelText2">
            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  marginRight: "50px",
                }}
                className="cityText1"
              >
                الرحلات السياحية{" "}
              </h3>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginRight: "50px",
                }}
                className="cityText2"
              >
                استمتع باستكشاف رحلتك{" "}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginRight: "50px",
                }}
                className="cityText2"
              >
                السياحية المميزة{" "}
              </p>
              <div className="arrowButtons">
                <button className="arrowButton solid">
                  <span className="arrow">→</span>
                </button>
                <button className="arrowButton transparent">
                  <span className="arrow">←</span>
                </button>
              </div>
            </div>
            <div className="omanCity">
              <div className="imageContainerTravel">
                <img className="imgTravel1" src="/11.jpg" alt="Travel" />
                <div className="verticalText ">الرحلة الاقتصادية </div>
              </div>

              <div className="imageContainerTravel2">
                <img className="imgTravel2" src="/22.jpeg" alt="Travel" />
                <div className="rating">
                  4.5 <span className="star">⭐</span>
                </div>
                <div className="infoOverlay">
                  <h3 className="tripTitle">الرحلة العائلية 3</h3>
                  <div className="priceContainer">
                    <span className="price">
                      {" "}
                      <PiPushPinLight /> ر.ع 50{" "}
                    </span>

                    <button className="btn5">
                      المزيد <span>←</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="imageContainerTravel">
                <img className="imgTravel1" src="/33.jpg" alt="Travel" />
                <div className="verticalText ">الرحلة العائلية2 </div>
              </div>

              <div className="imageContainerTravel">
                <img className="imgTravel1" src="/11.jpg" alt="Travel" />
                <div className="verticalText ">الرحلة العائلية2 </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
