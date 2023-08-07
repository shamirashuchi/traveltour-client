import { useEffect, useState } from "react";

const useCommunity = () => {
    const [community, setcommunity] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:2000/community')
            .then(res => res.json())
            .then(data => {
                setcommunity(data);
                setLoading(false);
            });
    }, [])
    return [community,loading]
}
export default useCommunity;