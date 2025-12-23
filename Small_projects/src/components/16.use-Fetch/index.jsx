import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    async function fetchDetails() {
        setPending(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (error) {
            setError(true);
            console.log(error);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [])

    return { data, error, pending };
}