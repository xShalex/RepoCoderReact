import React, { useEffect, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

function ItemDetail({ id, image, name, description, price, stock }) {

    const [added, setAdded] = useState()
    const { addItem } = useContext(CartContext)
 

    const onAdd = (counter) => {
        setAdded(true)
        addItem({ id, name, description, stock, price, image }, counter)
    }

    useEffect(() => {
        console.log('agregado', added)
    }, [added])



    return (
        <div>
            <div className='card mb-3 my-3  ' style={{ maxWidth: "540px" }}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={image} className='img-fluid rounded-start' alt="..." />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{description} id:{id}</p>
                            <p className='card-text'>Stock: {stock}</p>
                            <p className='card-text'>$ {price}</p>
                        </div>
                        {!added &&
                            < ItemCount onAdd={onAdd} amount={stock} />
                        }
                        {added > 0 &&
                            <Link to={'/Cart'}><Button variant="succes">terminar Compra</Button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
