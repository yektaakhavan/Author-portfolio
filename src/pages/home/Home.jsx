import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import CardItem from "../../comonents/card/Card";
import cardData from "../../cardData";
import MyNavbar from "../../comonents/navbar/Navbar";
import Footer from "../../comonents/footer/Footer";
import TopButton from "../../comonents/backToTopButton/TopButton";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import GradientButton from "../../comonents/button/GradientBtn";
import Carousel from "react-bootstrap/Carousel";
import ArticleCardData from "../../ArticleCardData";
import ArticleCard from "../../comonents/ArticleCard/ArticleCard";

import akhlaghmadariImage from "../../assets/picture/banner/Akhlaghmadari.webp";
import barnamehriziImage from "../../assets/picture/banner/Barnamerizi.webp";
import adabsalamImage from "../../assets/picture/banner/Salam.webp";

import akhlaghmadariImageMobile from "../../assets/picture/banner/Akhlaghmadari-mobile.webp";
import barnamehriziImageMobile from "../../assets/picture/banner/Barnamerizi-mobile.webp";
import adabsalamImageMobile from "../../assets/picture/banner/Salam-mobile.webp";

function Home() {
  const [cards, setCards] = useState(cardData);
  return (
    <div>
      <Helmet>
        <title>akhavan safaei | Home</title>
        <meta
          name="description"
          content="سایت فروش کتاب دیسیپلین کار اثر علیرضا اخوان صفائی"
        />
      </Helmet>

      <MyNavbar />

      <div className="slider">
        <Carousel fade>
          <Carousel.Item>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={akhlaghmadariImageMobile}
              />
              <img
                className="img-fluid w-100 carousel-img"
                src={akhlaghmadariImage}
                // loading="lazy"
                alt="تصویر اخلاث مداری"
              />
            </picture>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={barnamehriziImageMobile}
              />
              <img
                className="img-fluid w-100 carousel-img"
                src={barnamehriziImage}
                // loading="lazy"
                alt="تصویر برنامه ریزی"
              />
            </picture>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={adabsalamImageMobile}
              />
              <img
                className="img-fluid w-100 carousel-img"
                src={adabsalamImage}
                // loading="lazy"
                alt="تصویر آداب سلام"
              />
            </picture>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <h1 className="text-center mt-5">وبسایت علیرضا اخوان صفائی نویسنده کتاب دیسیپلین کار</h1>
        <section className="pb-5">
          <Row className="info ">
            <Col className="about-desc">
              {cards.map((card) => (
                <Col key={card.id}>
                  <CardItem {...card} />
                </Col>
              ))}
            </Col>
          </Row>
        </section>

        <section className="writings">
          <div className="title mb-5">
            <h2 className="p-title">نوشته‌هایی از دل کتاب</h2>
          </div>
          <Row className="justify-content-center ">
            {ArticleCardData.map((card) => (
              <Col
                key={card.id}
                lg={4}
                md={6}
                sm={12}
                className="d-flex justify-content-center mb-4 "
              >
                <ArticleCard
                  img1={card.img1}
                  loading="lazy"
                  title={card.title}
                  summary={card.summary}
                  publishedAt={card.publishedAt}
                  showButton={false}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center pb-5">
            <GradientButton to="/article" text="مطالعه کامل نوشته ها" />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us">
          <div className="contact-us py-5">
            <div className="title pb-5">
              <h2 className="p-title" id="contact">
                ارتباط با ما
              </h2>
            </div>
            <div className="contact-desc">
              <p>
                جهت ارتباط با موسسه ما و درخواست همکاری می‌توانید از طریق شماره
                های زیر یا ارسال ایمیل ارتباط برقرار کنید.
              </p>
              <p className="h3">تلفن تماس:</p>
              <p className="indent">09108083995</p>
              <p className="h3">آدرس ایمیل:</p>
              <p className="indent">alireza.akhavan.safaei.00@gmail.com</p>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
      <TopButton />
      <Scrollbar />
    </div>
  );
}
export default Home;
