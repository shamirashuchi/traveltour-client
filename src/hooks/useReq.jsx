import { useEffect, useState } from "react";

const useReq = () => {
    const [reserve,setreserve] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:2000/req')
            .then(res => res.json())
            .then(data => {
                setreserve(data);
                setLoading(false);
            });
    }, [])
    return [reserve,loading]
}
export default useReq;