import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {  Button, Card, CardBody, CardTitle,CardText, Row, Col } from "reactstrap";

library.add(fas);

export default function List ({ list }) {
    return (
        <Row className="mb-4">
        <Col lg="12">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0" >
                    Nome:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {list.frontmatter.nome}
                  </CardText>
                </Col>
              </Row>
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Data agendada:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                    {list.frontmatter.dataCompra}
                  </CardText>
                </Col>
              </Row>
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                    Repetir: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {list.frontmatter.repetir ? <FontAwesomeIcon icon="check" color='green'/>: <FontAwesomeIcon icon="times" color='red'/>}
                  </CardText>
                </Col>
              </Row>
              {list.frontmatter.repetir ?  <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Período: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {list.frontmatter.periodo }
                  </CardText>
                </Col>
              </Row> :''}
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                    Valor Total: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {list.frontmatter.total}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
            <Link href={`/list/${list.slug}`}> 
              <Button className="mb-3 text-uppercase" color="primary" type="button">
                Detalhe <FontAwesomeIcon icon="arrow-right"/>
              </Button>
              </Link>
          </Card>
        </Col>
      </Row>
    )
}