import React, { useState, useReducer } from 'react';
import styles from './index.module.scss';

const VibeBooking = () => {
    const [showBookingPanel, setBookingPanel] = useState(false);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const screen = () => {
        switch (currentScreenIndex) {
            case 0:
                return <div>Screen 0</div>
            case 1:
                return <div>Screen 1</div>
            case 2:
                return <div>Screen 2</div>
            case 3:
                return <div>Screen 3</div>
            default:
                return <div>Screen 4</div>
        }
    }
    return (
        <div className={styles.root}>
            <main className={showBookingPanel ? styles.open : ''}>
                {screen()}
            </main>
            <button
                className={showBookingPanel ? styles.close : ''}
                onClick={() => setBookingPanel(!showBookingPanel)}
            >
                Book Now
            </button>
        </div>
    )
}

export default VibeBooking;