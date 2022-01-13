import { server } from '../../config'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {  Button, Card, CardBody, CardTitle,  CardText, Row, Col,  ListGroupItem,
  ListGroup, } from "reactstrap";
  


library.add(fas);

export default function ListPage(lista) {
  console.log(lista)
  return (
    <div className="container">
    
     <Link href='/'> 
              <Button className="mb-3 mt-3" color="primary" type="button" mt-1>
              <FontAwesomeIcon icon="arrow-left"/>
              </Button>
              </Link>
      <Row className="mb-4" >
        <Col md="6">
          <Card className="card-stats mb-4 ml-1">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                    Nome:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {lista.nome}
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
                    {lista.dataCompra}
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
                {lista.repetir ? <FontAwesomeIcon icon="check" color='green'/>: <FontAwesomeIcon icon="times" color='red'/>}
                  </CardText>
                </Col>
              </Row>
              {lista.repetir?  <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Período: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {lista.periodo}
                  </CardText>
                </Col>
              </Row> :''}
            </CardBody>    
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card>
            <ListGroup flush>
            {lista.itens.map(item => (
              <ListGroupItem>    
                 <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                  <div className='list-header'> Item {item.id}</div>   
                  </CardTitle>
                </div>
              </Row>               
              <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                    Nome:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                 {item.nome}
                  </CardText>
                </Col>
              </Row>
              {parseInt(item.quantidade) > 0 ? <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Quantidade:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                    {item.quantidade}
                  </CardText>
                </Col>
              </Row> :''}
              {parseInt(item.precoUnitario) > 0 ? <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                    Preço Unitário:
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
               R$&nbsp; {parseFloat(item.precoUnitario).toFixed(2).replace('.',',')}
                  </CardText>
                </Col>
              </Row> :''}
              </ListGroupItem>
             ))}        
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export async function getStaticPaths(){
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch(`${server}/lists`)
  const lists = await results.json()
  const paths = lists.map(list => ({params: {id: list.id.toString()}}))
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return {paths, 
    fallback: true 
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/lists/${params.id.toString()}`)
  const url = `${server}/lists/${params.id}`
  console.log(url)
  const lista = await res.json()
 console.log(lista)
  return {
    props: lista
  }
}