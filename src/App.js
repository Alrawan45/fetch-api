import React,{ useState, useEffect } from 'react';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div > Error: {
            error.message
        } </div>;
    } else if (!isLoaded) {
        return <div > Loading... </div>;
    } else {
        return ( <section> {
                items.map(item =>( <div key = {item.id} > 
                < h1 > {item.name} </h1> 
                <img src={item.Image} alt={item.name} width="200px"/>
                    </div>
                ))
            } </section>
        );
    }
}
export default App;