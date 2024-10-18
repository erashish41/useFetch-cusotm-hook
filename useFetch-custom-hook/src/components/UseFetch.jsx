import { useEffect, useState } from "react";

export default function useFetch( url, option = {} ){

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setPending(true);
            const res = await fetch(url, {...option})
            if(!Response.ok) throw new Error(res.statusText)
            const result = res.json()
            setData(result)
            setError(null)
            setPending(false)
            console.log(result);
            
        } catch (error) {
            setError(error)
            setPending(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])


    return {data, error, pending}
}