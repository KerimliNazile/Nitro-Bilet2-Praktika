import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const OurServices = () => {
    
    const [products, setProducts] = useState([])
    async function getProducts() {
        const data = await fetch("http://localhost:5000/trees")
        const res = await data.json()
        console.log(res)
        setProducts(res)
    }


    useEffect(() => {
        getProducts()
    }, [])

    console.log(products);

    return (
        <>
            <section id='OurServices'>

                <div className="ServicesArea">
                    <div className="ServicesText">
                        <h1>Our Services</h1>
                    </div> 
                    <div className="CardAreaMain">
                    {products && products.map((item) => (
                       

                        
                        <div className="CardArea">
                            <Card key={item._id} id={item._id} image={item.image} title={item.title} category={item.category} product={item} />
                        </div>
                       
                    ))}
                     </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
