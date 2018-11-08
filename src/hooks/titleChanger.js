import { useEffect } from 'react';

export const useTitleChanger = (time) => {
    useEffect(() => {
        document.title = time.format('h:mma');
    });
};
