

const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item
  const handleAddToCart = food =>{
    console.log(food)
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-4 px-3">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100 border-orange-400">Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard