import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PublishDate from "../publishDate/PublishDate";

function ArticleCard({
  img1,
  title,
  summary,
  id,
  showButton = true,
  showDate = true,
  publishedAt,
}) {
  return (
    <Row>
      <Col>
        <Card className="h-100 img-wrapper">
          <Card.Img
            variant="top"
            src={img1}
            className="zoom-on-hover"
            data-aos="zoom-in"
            style={{ height: "400px" }}
          />
          <Card.Body className="py-4 px-3 d-flex flex-column">
            {showDate && (
              <div className="text-secondary mb-3">
                <PublishDate publishDate={publishedAt} />
              </div>
            )}
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>{summary}</Card.Text>
            {showButton && (
              <div className="mt-auto">
                <Link to={`/article/${id}`} className="btn btn-primary">
                  ادامه مطلب ...
                </Link>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ArticleCard;
