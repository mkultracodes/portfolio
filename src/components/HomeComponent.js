import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
 
const RenderCard = ({item}) => {
  return(
    <Card>
      <CardImg src = {item.image} alt = {item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

function Home(props) {
    return(
      <div className="container">
        <div className="col-12">
            <br />
            <h4>Projects</h4>
            <hr />
        </div>
        <div className="row">
        <a href="http://eyrienetworks.com" rel="noreferrer" target="_blank" className='projects'>
          <div className="col-12">
            <RenderCard item={props.dish} />
          </div>
        </a>
        <a href="http://eyrienetworks.com/RFA/indexrfa.html" target="_blank" className='projects' rel="noreferrer">
          <div className="col-12">
            <RenderCard item={props.promotion} />
          </div>
          </a>
{/*           <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div> */}
        </div>
      </div>
    );
}

export default Home; 