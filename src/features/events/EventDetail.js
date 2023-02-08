import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const EventDetail = ( {event} )=> {
    const { image, name, date } = event;

    return (
        <Col>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{name}{date}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default EventDetail;
