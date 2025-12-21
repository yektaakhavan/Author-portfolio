import { useParams } from "react-router-dom";
import ArticleCardData from "../../ArticleCardData";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../comonents/footer/Footer";
import MyNavbar from "../../comonents/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TopButton from "../../comonents/backToTopButton/TopButton";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import PageHeader from "../../comonents/pageHeader/PageHeader";
import "./ArticleDetail.css";

function ArticleDetail() {
  const [today, setToday] = useState("");
  const { id } = useParams();
  const article = ArticleCardData.find((item) => item.id.toString() === id);

  useEffect(() => {
    // تنظیم تاریخ امروز به شمسی
    const date = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setToday(date.toLocaleDateString("fa-IR", options));
  }, []);

  if (!article) {
    return (
      <div className="not-found-container">
        <h2>مقاله پیدا نشد</h2>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <MyNavbar />

      <Container className="py-5 main-content-container">
        <PageHeader
          title={article.title}
          type="articles"
          primaryColor="#0f1258"
        />

        <Row>
          <Col lg={8} className="mb-4 mb-lg-0">
            <div className="article-content">
              <div className="article-photo1">
                <img
                  src={article.img1}
                  loading="lazy"
                  alt={article.title}
                  className="img-fluid"
                />
              </div>

              <div className="article-text-content">
                <div dangerouslySetInnerHTML={{ __html: article.content1 }} />
              </div>
              {article.img2 && (
                <div className="article-photo2">
                  <img
                    src={article.img2}
                    loading="lazy"
                    alt={article.title}
                    className="img-fluid"
                  />
                </div>
              )}

              {article.content2 && (
                <div className="article-text-content">
                  <div dangerouslySetInnerHTML={{ __html: article.content2 }} />
                </div>
              )}
            </div>
          </Col>

          <Col lg={4}>
            <div className="article-sidebar">
              <div className="sidebar-section today-date">
                <p>امروز:</p>
                <div>{today}</div>
              </div>

              <div className="sidebar-section latest-articles">
                {/* <h4>آخرین نوشته‌ها</h4> */}
                <div className="latest-articles-list">
                  {ArticleCardData.slice(0, 5).map((item) => (
                    <div className="latest-article-item" key={item.id}>
                      <div className="entry">
                        <img src={item.img1} alt={item.title} />
                        <div className="entry-desc">
                          <div className="entry-title">
                            <Link to={`/article/${item.id}`}>{item.title}</Link>
                          </div>
                          <div className="publishdate">
                            {new Date(item.publishedAt).toLocaleDateString(
                              "fa-IR",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">{/* <CommentForm /> */}</Row>
      </Container>

      <Footer />
      <TopButton />
      <Scrollbar />
    </div>
  );
}

export default ArticleDetail;
