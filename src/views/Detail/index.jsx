import { format } from "date-fns";
import { es } from "date-fns/locale";

import {Link} from "react-router-dom";
import eventFetcher from "../../utils/fetchEvents";
import styles from "./Detail.module.css";

const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () => {
    //const { data } = useEventResults();
    //const {eventId} = useParams();
    //const [eventData, setEventData] = useState({});
    const eventData = resource.eventDetail.read();

    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <Link to="/" className={styles.homeLink}>Inicio</Link>
                <img src={eventData.images?.[0].url} className={styles.eventImage} alt={eventData.name} />
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.infoParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ?  <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm', { locale: es })}hrs</p> : null}

            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
                <img src={eventData.seatmap?.staticUrl} className={styles.seatImage} alt="Seatmap event" />
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Rango de precios: {eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url}>
                Ir por tus boletos
            </a>
        </div>
    );
}

export default Detail;