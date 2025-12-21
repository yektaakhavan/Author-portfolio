import { Col, Container, Row } from "react-bootstrap";
import ArticleCardData from "../../ArticleCardData";
import ArticleCard from "../../comonents/ArticleCard/ArticleCard";
import MyNavbar from "../../comonents/navbar/Navbar";
import Footer from "../../comonents/footer/Footer";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import "./Article.css";
import TopButton from "../../comonents/backToTopButton/TopButton";
import { BsBookmarksFill } from "react-icons/bs";
import PageHeader from "../../comonents/pageHeader/PageHeader";

function Article() {
  return (
    <>
      <MyNavbar />

      <Container className="main-content-container">
        <PageHeader title="نوشته هایی از دل کتاب" type="articles" />

        <div className="page-content-section">
          <p className="page-description-text">
            در این بخش، منتخبی از بخش‌های کلیدی و محتوای مهم کتاب دیسیپلین کار
            در اختیار شما قرار گرفته است. هدف از ارائه‌ی این نوشته‌ها، آشنایی
            بیشتر مخاطبان گرامی با مفاهیم اصلی، دیدگاه‌های نویسنده، و رویکرد کلی
            کتاب در زمینه‌ی مدیریت، انضباط سازمانی و تعامل کارفرما با پرسنل است.
            مطالعه‌ی این بخش می‌تواند دیدی اجمالی اما کاربردی نسبت به فضای فکری
            کتاب فراهم کند و شما را برای انتخاب آگاهانه‌تر در خرید آن یاری دهد.
          </p>

          <Row className="cards-row">
            {ArticleCardData.map((card) => (
              <Col key={card.id} lg={4} md={6} sm={12}>
                <ArticleCard
                  id={card.id}
                  img1={card.img1}
                  loading="lazy"
                  title={card.title}
                  summary={card.summary}
                  showDate={false}
                  publishedAt={card.publishedAt}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <Footer />
      <Scrollbar />
      <TopButton />
    </>
  );
}

export default Article;
