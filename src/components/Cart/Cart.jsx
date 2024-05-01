import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../../assets/Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img 
            src={thumbnail} 
            alt={title} 
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export const Cart = () => {
    const cartCheckBosId = useId()
    const { cart, clearCart, addToCart } = useCart()

  return (
    <>
        <label className='cart-button' htmlFor={cartCheckBosId}>
            <CartIcon />
        </label>
        <input type="checkbox" name="cart-item" id={cartCheckBosId} hidden/>

        <aside className='cart'>
            <ul>
                {cart.map(product => (
                    <CartItem 
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    {...product}
                    />
                ))

                }
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  )
}
