import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {  Button, Card, CardBody, CardTitle,CardText, Row, Col } from "reactstrap";

library.add(fas);

export default function List ({ list }) {
  console.log(list)
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
                {list.nome}
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
                    {list.dataCompra}
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
                {list.repetir ? <FontAwesomeIcon icon="check" color='green'/>: <FontAwesomeIcon icon="times" color='red'/>}
                  </CardText>
                </Col>
              </Row>
              {list.repetir ?  <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Período: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {list.periodo }
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
                {list.total != null || list.total == 0 ? 
                
                <CardText className="list-text text-uppercase mb-0">
                R$&nbsp;{parseFloat(list.total).toFixed(2).replace('.',',')}
                  </CardText> :
                  <CardText className="list-desativado text-uppercase mb-0">
                    Não previsto
                  </CardText>}
                </Col>
              </Row> 
            </CardBody>
            <Link href={`/list/${list.id}`}> 
              <Button className="mb-3 text-uppercase" color="primary" type="button">
                Detalhe <FontAwesomeIcon icon="arrow-right"/>
              </Button>
              </Link>
          </Card>
        </Col>
      </Row>
    )
}