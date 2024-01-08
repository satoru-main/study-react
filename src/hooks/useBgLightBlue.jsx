import { useEffect } from 'react'

export const useBgLightBlue = () => {
    useEffect(() => {
        console.log("maunt");
        document.body.style.backgroundColor = "lightblue";
        return () => {
            document.body.style.backgroundColor = "";
        }
    }, []);
};