import React, {useState} from 'react';
import styles from './Previews.module.scss';
import previousBtn from '../../images/icon-previous.svg';
import nextBtn from '../../images/icon-next.svg';
import data from './data';
import Btn from "../UI/Btn";

const Previews = () => {

    const [currentSlider, setCurrentSlider] = useState(1);

    const moveToSlide = function (index) {
        setCurrentSlider(index);
    }

    const nextPictureHandler = function () {
        if (currentSlider < data.length) {
            setCurrentSlider(prevState => prevState + 1);
        } else {
            setCurrentSlider(1);
        }
    };

    const previousPictureHandler = function () {
        if (currentSlider === 1) {
            setCurrentSlider(data.length);
        } else {
            setCurrentSlider(prevState => prevState - 1);
        }
    };

    return (
        <div className={styles.previews}>
            <div className={styles['previews__main']}>
                {data.map(img => {
                    return <img className={img.id === currentSlider ? styles['active-img'] : ''} key={img.id}
                                src={`${process.env.PUBLIC_URL}/images/${img.img}`} alt={`Pic_${img.id}`}/>;
                })}

                <div className={`${styles['previews__main-btn-container']} ${styles['previews__main-btn-previous']} `} onClick={previousPictureHandler}>
                    <Btn icon={previousBtn} className={`${styles['previews__main-btn']}`}/>
                </div>
                <div className={`${styles['previews__main-btn-container']} ${styles['previews__main-btn-next']}`}
                     onClick={nextPictureHandler}>
                    <Btn icon={nextBtn} className={styles['previews__main-btn']}/>
                </div>
            </div>
            <div className={styles['previews__thumbnails']}>
                {
                    data.map(img => {
                        return <img onClick={() => {
                            moveToSlide(img.id)
                        }}
                                    key={img.id}
                                    className={img.id === currentSlider ? styles.active : ''}
                                    src={`${process.env.PUBLIC_URL}/images/${img.thumbnail}`} alt={`Pic_${img.id}`}/>;
                    })
                }

            </div>

        </div>
    );
};

export default Previews;