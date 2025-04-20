export const metadata={
    title:"Add Product"
}

const addproductpage = () => {
  return (
    <div className="items-center max-w-xl mx-auto top-8">
        <form action="">
        <h1>Add Product</h1>
        <input required name="name" placeholder="Name" className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"/>
        <textarea required name="description" placeholder="description" id="" className="border-2 py-2 px-4 max-w-full rounded-md"/>
        <input required name="imageurl" placeholder="imageurl" type="url" className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"/>
        <input required name="price" placeholder="price" type='number' className="input-bordered input border-2 py-2 px-4 rounded-md mb-3 w-full"/>
        <button className="btn btn-primary btn-block py-2 px-4 rounded-md bg-amber-300" type="submit">Add Product</button>
        </form>
    </div>
  )
}
export default addproductpage