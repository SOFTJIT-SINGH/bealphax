// import Productimg from '../components/Productimg'

const Singlepage = () => {
  return (
    <div className='mt-2 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* img  */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        {/* <Productimg /> */}
      </div>
      {/* text   */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'> <p>app/[slug]/page</p></div>
    </div>
  )
}
export default Singlepage
