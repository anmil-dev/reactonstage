import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
    const { id, image, name, date } = event;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                /> 
                <CardImgOverlay>
                    <CardTitle>{name}{date}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

export default EventCard;