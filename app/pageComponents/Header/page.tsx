'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'  
import Link from 'next/link' 

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Logo from "../../icons/paramarsh.png"

const navigation = [
  { name: 'Feedback', href: '/feedback' },
  {name: 'Booking Page', href: '/booking'}
  
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()  

 
  const navbarOnlyRoutes = [
  '/feedback',
  '/product',  
  '/product/2',  
  '/product/1', 
  '/product/3',
  '/product/4',
  '/product/5',
  '/product/6',
  '/product/7',
  '/product/8',
  '/product/9',
  '/product/10',
  '/pricing',
  '/eventspage',
  '/booking',
  '/search'
]

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center lg:flex-1">
            <Link href="/" legacyBehavior>
              <a className="-m-1.5 p-1.5 flex items-center">
                <Image
                  alt=""
                  src={Logo}
                  className="h-8 w-auto"
                />
                <h2 className="ml-2 text-lg font-bold text-gray-900">EzParking</h2>
              </a>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <Link href="#" legacyBehavior>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </Link> */}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" legacyBehavior>
                <a className="-m-1.5 p-1.5 flex items-center">
                  <Image
                    alt=""
                    src={Logo}
                    className="h-8 w-auto"
                />
                  <h2 className="ml-2 text-lg font-bold text-gray-900">EzParking</h2>
                </a>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} legacyBehavior>
                      <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="#" legacyBehavior>
                    <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

     
      {!navbarOnlyRoutes.includes(pathname) && (
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Checkout about EzParking. {' '}
                <Link href="#" legacyBehavior>
                  <a className="font-semibold text-indigo-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Empowering people to have better <span className="bg-yellow-200 px-1">Parking</span> Experience
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                 We are a team of passionate individuals who are dedicated to providing the best parking experience to our customers. We are committed to providing the best parking experience to our customers.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/search" legacyBehavior>
                  <a className="rounded-md border-2 border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Get started
                  </a>
                </Link>

                <Link href="/search" legacyBehavior>
                  <a className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      )}
    </div>
  )
}
