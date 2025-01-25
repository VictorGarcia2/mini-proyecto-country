import { useState } from 'react'

export default function CounterAdults() {
    const [countAdults, setCountAdults] = useState(0);
    const incrementAdults = () => setCountAdults(countAdults + 1);
    const decrementAdults = () => setCountAdults(countAdults - 1);
    if (countAdults < 0) {
        setCountAdults(0);
    }
    return {
        countAdults, incrementAdults, decrementAdults
    }

}
