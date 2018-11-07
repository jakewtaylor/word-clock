import { useRef, useState, useEffect } from 'react';
import moment from 'moment';

export const useTime = () => {
    // Store for the interval
    const interval = useRef();

    // The time state
    const [time, setTime] = useState(moment());

    // The tick function
    const tick = () => {
        setTime(moment());
    };

    // Run the timer
    useEffect(() => {
        if (!interval.current) {
            interval.current = setInterval(tick, 1000);
        }

        return () => interval.current && clearInterval(interval.current);
    }, []);

    // Return the time to the parent component
    return time;
};
