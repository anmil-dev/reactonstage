import { Col, Row } from 'reactstrap';
import EventCard from "./EventCard";
import { selectAllEvents } from './eventsSlice';

const EventsList = () => {
    const events = selectAllEvents();

    return (
        <Row className='ms-auto'>
            {events.map((event) => {
                return (
                    <Col md='5' className='m-4' key={event.id} >
                        <EventCard event={event} />
                    </Col>
                );
            })}
        </Row>
    );

};

export default EventsList;