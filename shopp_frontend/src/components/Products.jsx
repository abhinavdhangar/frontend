
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '/products/1',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  

import { useQuery,gql } from "@apollo/client"
import { useEffect, useState } from "react"
const PRODUCTS = gql`
{
  products{
    
    data
    {
      id
      attributes{
        UrlSlug
        Name
       Price
         Description_Header
         Description
        Rating
        Header_Image{data{attributes{caption}}}
        Product_Images{data{
        attributes{caption}
        }}
      }
    }
  }
}
`



  export default function Products() {
 const { loading, error, data } = useQuery(PRODUCTS)
  const [productData, setproductData] = useState([])
  useEffect(() => {
    if (data) {
     setproductData (data.products.data)
    }
  }
  , [data])
 productData.map(product=>{console.log(product.attributes.UrlSlug)})






  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productData.map((product) => (
              <a key={product.id} href={`product/${product.attributes.UrlSlug}`} className="group">
                <div className="w-full shadow-lg aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.attributes.Header_Image.data.attributes.caption}
                    alt={product.attributes.Name}
                    className="w-full shadow-lg  h-[436px] md:h-[350px] object-cover object-center  group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.attributes.Name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.attributes.Price.header} $</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  