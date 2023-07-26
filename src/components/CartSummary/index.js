// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(each => {
        totalPrice += each.price * each.quantity
      })
      return (
        <div className="summaryCard">
          <h1>
            Order Total: <span>Rs {totalPrice}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button" className="checkButton">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
