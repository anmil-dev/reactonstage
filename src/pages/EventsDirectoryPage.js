import { Container, Row, Col, Button } from 'reactstrap';
import EventDetail from '../features/events/EventDetail';
import EventsList from '../features/events/EventsList';

const EventsDirectoryPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <EventsList />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsDirectoryPage;