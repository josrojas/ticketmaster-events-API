import styles from './EventItem.module.css';

import useLikeEvents from '../../../../hooks/useLikeEvents';
import HeartUnFilled from '../../../../assets/heart-unfilled.png';
import HeartFilled from '../../../../assets/heart-filled.png';

const EventItem = ({ info, id, name, image, onEventClick }) => {

    const { isEventLiked, toggleLikeEvent } = useLikeEvents(id);

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    const handleHeartClick = () => {
        toggleLikeEvent();
    };

    return (
        <div onClick={() => console.log('padre clickeado')} className={`${styles.eventItemContainer} ${styles.anotherContainer}`}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HeartFilled : HeartUnFilled} alt="Heart button" className={styles.heartImage} onClick={handleHeartClick} />
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
                    {/*<Link to={`detail/${id}`}>
                        Ver más
    </Link>*/}
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default EventItem; 