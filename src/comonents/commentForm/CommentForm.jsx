import { Button, Col, Container, Row } from "react-bootstrap";
import "./CommentForm.css";

function CommentForm() {
  return (
    <Container>
      <Row>
        <div className="comment">
          <p className="co-title h3">ثبت نظر</p>
          <p className="user">
            کاربر گرامی، ایمیل شما منتشر نمی شود و بعد از دریافت پاسخ از طریق
            ایمیل به شما اطلاع رسانی می شود.
          </p>

          <Row className="specs g-4">
            <Col lg={6}>
              <input
                type="text"
                id="username"
                placeholder="نام و نام خانوادگی"
              />
            </Col>
            <Col lg={6}>
              <input type="email" id="email" placeholder="ایمیل" />
            </Col>
            <Col lg={12}>
              <textarea
                name=""
                id="your-comment"
                placeholder="نظر شما"
              ></textarea>
            </Col>
            <Col lg={12}>
              <button className="post-comment">نظر خود را ثبت کنید</button>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}
export default CommentForm;
