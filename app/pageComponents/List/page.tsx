import Image from 'next/image'
import Music from '@/app/images/music.jpeg'
import Maths from '@/app/images/maths.jpeg'
import Dance from '@/app/images/regular-dance-classes.jpg'
import Music2  from '@/app/images/music2.jpeg'
const products = [
  {
    id: 1,
    name: 'Music Tuitions',
    href: '/product',
    imageSrc: Music, // Update this to pass the image correctly
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹352',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Maths Tuition',
    href: '/product',
    imageSrc: Maths,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹325',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Dance Tuitions',
    href: '/product',
    imageSrc: Dance,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹500',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Music Tuitions',
    href: '/product',
    imageSrc: Music2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹350',
    color: 'Black',
  },
]

export default function List() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Events Happening Around You</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  width={300}  
                  height={300} 
                  layout="responsive"  
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
