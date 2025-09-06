'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi'

const ProductsList = ({ products = [] }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  // Sample data if no products are passed
  const sampleProducts = [
    {
      id: 1,
      name: 'Premium T-Shirt',
      price: 85,
      description: 'Comfortable cotton blend',
      images: ['/models/m2.jpg', '/models/m1.jpg']
    },
    {
      id: 2,
      name: 'Classic Hoodie',
      price: 120,
      description: 'Warm and stylish',
      images: ['/models/m3.jpg', '/models/m1.jpg']
    },
    {
      id: 3,
      name: 'Athletic Shorts',
      price: 65,
      description: 'Perfect for workouts',
      images: ['/models/m4.jpg', '/models/m1.jpg']
    },
    {
      id: 4,
      name: 'Training Jacket',
      price: 150,
      description: 'Water resistant',
      images: ['/models/m5.jpg', '/models/m1.jpg']
    }
  ]

  const displayProducts = products.length > 0 ? products : sampleProducts

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    // Add to cart logic would go here
    console.log('Added to cart:', product)
  }

  const handleQuickView = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    // Quick view logic would go here
    console.log('Quick view:', product)
  }

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group"
        >
          <Link
            href={`/products/${product.id}`}
            className="block w-full flex flex-col gap-4 relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative h-80 w-full overflow-hidden rounded-xl">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={product.images[1] || product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              
              {/* Quick actions overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button 
                  className="bg-white p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                  onClick={(e) => handleQuickView(e, product)}
                >
                  <FiEye className="text-gray-800" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-gray-100">
                  <FiHeart className="text-gray-800" />
                </button>
              </div>
              
              {/* Sale badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold text-gray-900">RS. {product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">RS. {product.originalPrice}</span>
                )}
              </div>
            </div>
            
            <motion.button 
              className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              onClick={(e) => handleAddToCart(e, product)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiShoppingCart />
              Add to Cart
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default ProductsList