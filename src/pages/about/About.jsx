import { Container } from "react-bootstrap";
import {
  BsPersonFill,
  BsBriefcaseFill,
  BsAwardFill,
  BsBookHalf,
} from "react-icons/bs";
import "./About.css";
import MyNavbar from "../../comonents/navbar/Navbar";
import Footer from "../../comonents/footer/Footer";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import TopButton from "../../comonents/backToTopButton/TopButton";
import PageHeader from "../../comonents/pageHeader/PageHeader";

const AboutUs = () => {
  const primaryColor = "#0f1258";

  return (
    <>
      <MyNavbar />
      <Container className="my-5 about-page">
        <PageHeader title="درباره ما" type="about" primaryColor="#0f1258" />
        <div
          className="about-content p-4 rounded-3 shadow-sm"
          style={{ backgroundColor: `${primaryColor}08` }}
        >
          <div className="d-flex align-items-start mb-4">
            <div className="about-icon me-3" style={{ color: primaryColor }}>
              <BsPersonFill size={28} />
            </div>
            <div>
              <h3 style={{ color: primaryColor }}>معرفی</h3>
              <p className="about-text">
                <b style={{ color: primaryColor }}>علیرضا اخوان صفائی</b> متولد
                1349هجری‌شمسی (1970میلادی)، در اصفهان می‌باشد و دانش‌آموخته رشته
                مدیریت صنعتی است.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-4">
            <div className="about-icon me-3" style={{ color: primaryColor }}>
              <BsBriefcaseFill size={28} />
            </div>
            <div>
              <h3 style={{ color: primaryColor }}>سوابق حرفه‌ای</h3>
              <p className="about-text">
                مروری بر فعالیت‌های شغلی و فرهنگی وی حکایت از این دارد که دارای
                تجربه‌های فنی و مدیریتی و آموزشی و تولیدی در حوزه‌های مختلف
                می‌باشد:
              </p>

              <ul className="about-list ps-4">
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  متخصص‌ارشد فنی ماشین‌آلات دوخت
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  نماینده فروش برترین ماشین‌آلات دوخت
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  محقق روش تدریس زبان‌های خارجی
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  محقق خط تولید کارخانه‌های داروسازی
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  موسس کانون علمی فرهنگی در دانشگاه
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  موسس تولیدی صنایع‌دستی ترمه و ملیله‌دوزی
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  موسس آموزشگاه چند رشته‌ای صنایع دستی
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  رئیس هیئت‌مدیره مجتمع نقش‌جهان اصفهان
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  فروش و تولید بهترین کالاهای خواب
                </li>
                <li>
                  <span
                    className="list-bullet"
                    style={{ backgroundColor: primaryColor }}
                  ></span>
                  نویسنده کتاب دیسیپلین‌کار
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className="about-icon me-3" style={{ color: primaryColor }}>
              <BsAwardFill size={28} />
            </div>
            <div>
              <h3 style={{ color: primaryColor }}>دستاوردها</h3>
              <p className="about-text">
                تیم ما با توکل به خداوند متعال و تلاش مستمر توانسته‌ است همواره
                محصولات و خدمات باکیفیت ارائه کند که رضایت و همراهی مشتریان
                گران‌قدر را درپی داشته است و برند شناخته شده صفائی که بیش از 75
                سال سابقه دارد و برند صفاهوم و سایت{" "}
                <a
                  href="https://safahome.com/"
                  className="about-link"
                  style={{ color: primaryColor }}
                >
                  safahome.com
                </a>{" "}
                را به خود اختصاص داده ‌است.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <Scrollbar />
      <TopButton />
    </>
  );
};

export default AboutUs;
