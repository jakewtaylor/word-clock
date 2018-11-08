import React from 'react';

import { useTime } from './hooks/time';
import { useTitleChanger } from './hooks/titleChanger';
import { randomString } from './helpers/randomString';

import Cell from './Cell';

import './App.css';

const randoms = [1, 6, 2, 2, 1, 1, 1, 2, 1, 1].map(n => randomString(n));

const App = () => {
    const time = useTime();
    useTitleChanger(time);

    const minute = Math.round(time.minute() / 5) * 5;
    const hour = time.hour();

    return (
        <div className="wall-clock-container">
            <div className="wall-clock">
                <Cell content="it" lit />
                <Cell content={randoms[0]} />
                <Cell content="is" lit />
                <Cell content={randoms[1]} />

                <Cell content={randoms[2]} />
                <Cell content="quarter" lit={minute === 15 || minute === 45} />
                <Cell content={randoms[3]} />

                <Cell content="twenty" lit={minute === 20 || minute === 40 || minute === 25 || minute === 35} />
                <Cell content={randoms[4]} />
                <Cell content="five" lit={minute === 25 || minute === 35 || minute === 5 || minute === 55} />

                <Cell content="half" lit={minute === 30} />
                <Cell content={randoms[5]} />
                <Cell content="ten" lit={minute === 10 || minute === 50} />
                <Cell content={randoms[6]} />
                <Cell content="to" lit={minute > 30} />

                <Cell content={randoms[7]} />
                <Cell content="past" lit={minute <= 30 && minute !== 0} />
                <Cell content={randoms[8]} />
                <Cell content="nine" lit={hour === 9 || hour === 21} />

                <Cell content="one" lit={hour === 1 || hour === 13} />
                <Cell content="six" lit={hour === 6 || hour === 18} />
                <Cell content="three" lit={hour === 3 || hour === 15} />

                <Cell content="four" lit={hour === 4 || hour === 16} />
                <Cell content="five" lit={hour === 5 || hour === 17} />
                <Cell content="two" lit={hour === 2 || hour === 14} />

                <Cell content="eight" lit={hour === 8 || hour === 20} />
                <Cell content="eleven" lit={hour === 11 || hour === 23} />

                <Cell content="seven" lit={hour === 7 || hour === 19} />
                <Cell content="twelve" lit={hour === 12 || hour === 0} />

                <Cell content="ten" lit={hour === 10 || hour === 22} />
                <Cell content={randoms[9]} />
                <Cell content="o'clock" lit={minute === 0} />
            </div>
        </div>
    );
}

export default App;
