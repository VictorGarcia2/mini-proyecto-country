import { useState } from 'react'

export default function CounterGuests() {
    const [countGuests, setCountGuests] = useState(0);
    const incrementGuests = () => setCountGuests(countGuests + 1);
    const decrementGuests = () => setCountGuests(countGuests - 1);
    if (countGuests < 0) {
        setCountGuests(0);
    }
    return {
        countGuests, incrementGuests, decrementGuests
    }

}
