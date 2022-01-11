import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {  Button, Card, CardBody, CardTitle,  CardText, Row, Col,  ListGroupItem,
  ListGroup, } from "reactstrap";




library.add(fas);

export default function PostPage({
  frontmatter: { nome, dataCompra, repetir, periodo, itens, date },
  slug,
}) {
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
                {nome}
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
                    {dataCompra}
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
                {repetir ? <FontAwesomeIcon icon="check" color='green'/>: <FontAwesomeIcon icon="times" color='red'/>}
                  </CardText>
                </Col>
              </Row>
              {repetir?  <Row>
                <div className="col">
                  <CardTitle className="list-title text-uppercase mb-0">
                  Período: 
                  </CardTitle>
                </div>
                <Col className="col-auto">
                <CardText className="list-text text-uppercase mb-0">
                {periodo}
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
            {itens.map(( item) => (
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

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('lists'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('lists', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
    },
  }
}