import { Col, Container, Row } from "react-bootstrap";
import { useRef } from "react";
import "./Books.css";
import Footer from "../../comonents/footer/Footer";
import MyNavbar from "../../comonents/navbar/Navbar";
import TopButton from "../../comonents/backToTopButton/TopButton";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import PageHeader from "../../comonents/pageHeader/PageHeader";
import bookImage from "../../assets/picture/books/Book-Picture.jpg";

function Books() {
  const specsRef = useRef(null);
  const tocRef = useRef(null);
  const introRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="books-page">
      <MyNavbar />

      <Container className="py-5 main-content-container">
        <PageHeader title="کتاب‌ها" type="books" primaryColor="#0f1258" />
        <Row>
          <Col lg={9} className="order-2 order-lg-2">
            <Row className="mb-5">
              <div className="product-container">
                <div className="product-content">
                  <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                      <div className="product-image">
                        <img
                          className="img-fluid rounded"
                          src={bookImage}
                          alt="دیسیپلین کار - اصول اولیه برای رسیدن به اهداف شغلی"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="product-details">
                        <h1 className="product-title">
                          دیسیپلین کار (اصول اولیه برای رسیدن به اهداف شغلی)
                        </h1>
                        <p className="product-subtitle">
                          (انضباط حاکم بر محیط کار)
                        </p>

                        <div className="product-info">
                          <div className="product-meta-item">
                            <span className="meta-label">نویسنده:</span>
                            <span className="meta-value">
                              علیرضا اخوان صفائی
                            </span>
                          </div>
                          <div className="product-meta-item">
                            <span className="meta-label">دسته‌بندی:</span>
                            <span className="meta-value">
                              موفقیت و توسعه فردی، کار و تجارت، انضباط حاکم بر
                              محیط کار
                            </span>
                          </div>
                          <div className="product-meta-item">
                            <span className="meta-label">ناشر:</span>
                            <span className="meta-value">کلید آموزش</span>
                          </div>
                        </div>

                        <div className="contact-box">
                          <p className="contact-text">
                            جهت خرید کتاب با شماره‌ی زیر تماس حاصل فرمایید:
                          </p>
                          <div className="phone-number">
                            <a href="tel:09108083995" dir="ltr">
                              <i className="bi bi-telephone-fill me-2"></i>
                              0910 808 3995
                            </a>
                          </div>
                        </div>

                        <div className="price-box">
                          <span className="price">260,000 تومان</span>
                        </div>

                        <div className="delivery-info">
                          <div className="delivery-item">
                            <i className="bi bi-truck me-2"></i>
                            <span>
                              تحویل سریع در تهران و اصفهان: 1-2 روز کاری
                            </span>
                          </div>
                          <div className="delivery-item">
                            <i className="bi bi-geo-alt me-2"></i>
                            <span>سایر شهرها: 3-5 روز کاری</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>

            {/* بخش مشخصات فنی */}
            <div ref={specsRef} className="mb-5">
              <div className="product-container">
                <div className="specifications-section">
                  <h2 className="section-title">مشخصات فنی</h2>
                  <Row className="g-3">
                    <Col lg={4} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">انتشارات</span>
                        <span className="spec-value">کلید آموزش</span>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">قطع</span>
                        <span className="spec-value">رقعی</span>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">نوع جلد</span>
                        <span className="spec-value">شومیز</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">تعداد صفحات</span>
                        <span className="spec-value">206 صفحه</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">شابک</span>
                        <span className="spec-value">9786002746788</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">نوبت چاپ</span>
                        <span className="spec-value">اول</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">وزن</span>
                        <span className="spec-value">234 گرم</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">کد کالا</span>
                        <span className="spec-value">137874</span>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="spec-item">
                        <span className="spec-label">تاریخ ورود</span>
                        <span className="spec-value">1403/07/26</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

            <div ref={tocRef} className="mb-5">
              <div className="product-container">
                <div className="content-section">
                  <h2 className="section-title">فهرست مطالب</h2>
                  <div className="content-text">
                    <ul className="chapter-list">
                      <li className="chapter-item">
                        <span className="chapter-title">پیش گفتار</span>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">مقدمه</span>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">
                          سخن آغازین با پرسنل
                        </span>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">
                          رکن اول: وضعیت ظاهری
                        </span>
                        <ul className="sub-chapter-list">
                          <li>وضعیت ظاهری عوامل انسانی</li>
                          <li>وضعیت ظاهری عوامل غیرانسانی و محیطی</li>
                        </ul>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">
                          رکن دوم: رفتار و گفتار
                        </span>
                        <ul className="sub-chapter-list">
                          <li>انسجام در کار</li>
                          <li>انگیزه بالا</li>
                          <li>روابط فردی</li>
                          <li>تعهدات</li>
                          <li>اخلاق مداری</li>
                        </ul>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">
                          رکن سوم: امور معمول در محل کار
                        </span>
                        <ul className="sub-chapter-list">
                          <li>آماده سازی محل کار-3c</li>
                          <li>حفاظت و ایمنی</li>
                          <li>الزامات تکمیلی</li>
                          <li>اصل رفاه</li>
                          <li>گزارش ها و جلسه ها</li>
                        </ul>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">
                          رکن چهارم: کار تخصصی
                        </span>
                        <ul className="sub-chapter-list">
                          <li>کیفیت</li>
                          <li>استفاده از تجربه ها و سیستم سازی</li>
                          <li>کار گروهی و تیمی</li>
                          <li>برنامه ریزی و چک لیست</li>
                          <li>بهبود مراحل اداری و قراردادها</li>
                          <li>پروژه ها و بهره وری</li>
                          <li>سرویس کاری و خانه داری</li>
                        </ul>
                      </li>
                      <li className="chapter-item">
                        <span className="chapter-title">بخش مثال</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div ref={introRef} className="mb-5">
              <div className="product-container">
                <div className="content-section">
                  <h2 className="section-title">معرفی کتاب</h2>
                  <div className="content-text">
                    <p>
                      کتاب "دیسیپلین کار" نوشته علیرضا اخوان صفائی، راهنمای
                      جامعی برای ایجاد انضباط کاری و رسیدن به اهداف شغلی است.
                      این کتاب با ارائه اصول اولیه و کاربردی، به شما کمک می‌کند
                      تا در محیط کار خود عملکرد بهتری داشته باشید.
                    </p>

                    <p>
                      با دیسیپلین‌کار پیشرفت جمعی و فردی توأمان به وجود می‌آید و
                      می‌توان هر روز از کارکردن لذت برد. با مطالعه‌ی این کتاب و
                      فراگیری دیسیپلین‌کار یاد می‌گیریم در محل کار طوری رفتار
                      کنیم که باعث رنجش یکدیگر نشویم، به پوشش و اخلاقمان اهمیت
                      بدهیم و تخصصمان را آن‌قدر بالا ببریم تا کار مردم را به
                      بهترین وجه انجام دهیم.
                    </p>

                    <h5 className="highlight-title">ویژگی‌های کلیدی کتاب:</h5>
                    <ul className="feature-list">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        اصول پایه‌ای دیسیپلین کاری
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        روش‌های غلبه بر تنبلی و اهمال‌کاری
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        مدیریت زمان و اولویت‌بندی کارها
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        ایجاد عادات کاری مؤثر
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        روش‌های حفظ انگیزه در طولانی مدت
                      </li>
                    </ul>

                    <p className="mt-3">
                      این کتاب برای تمامی افرادی که می‌خواهند در محیط کار خود
                      عملکرد بهتری داشته باشند و به اهداف شغلی خود برسند، مفید
                      خواهد بود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} className="order-1 order-lg-1">
            <div className="sidebar-sticky">
              <div className="toc-sidebar">
                <h5 className="toc-title">فهرست مطالب</h5>
                <ul className="toc-list">
                  <li className="toc-item">
                    <button
                      className="toc-link"
                      onClick={() => scrollToSection(specsRef)}
                    >
                      مشخصات کتاب
                    </button>
                  </li>
                  <li className="toc-item">
                    <button
                      className="toc-link"
                      onClick={() => scrollToSection(tocRef)}
                    >
                      فهرست کتاب
                    </button>
                  </li>
                  <li className="toc-item">
                    <button
                      className="toc-link"
                      onClick={() => scrollToSection(introRef)}
                    >
                      معرفی کتاب
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
      <TopButton />
      <Scrollbar />
    </div>
  );
}

export default Books;
