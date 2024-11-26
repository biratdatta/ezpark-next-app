
'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What makes EzParking the best parking solution?",
    answer:
      "EzParking offers a seamless parking experience with features like real-time availability, easy reservation, and secure payment options. We prioritize convenience and efficiency for all users.",
  },
  {
    question: 'How do I get started with EzParking?',
    answer:
      'Getting started is easy! Simply sign up for a free account, enter your vehicle details, and you can start reserving parking spots instantly. No hassle, just park and go!',
  },
  {
    question: 'Can I use EzParking for my business or commercial needs?',
    answer:
      'Absolutely! EzParking offers customized solutions for businesses, including bulk parking space reservations and special pricing plans. Contact us for more details about our business services.',
  },
  {
    question: 'How do I contact EzParking support if I need assistance?',
    answer:
      'If you need any help, our support team is available 24/7. You can reach out to us via email at support@ezparking.com, or use the live chat feature on our website for instant assistance.',
  },
  {
    question: 'What payment methods does EzParking accept?',
    answer:
      'EzParking accepts all major credit and debit cards, as well as popular digital payment methods such as PayPal, Apple Pay, and Google Pay, ensuring a secure and hassle-free transaction process.',
  },
  {
    question: 'Can I cancel or modify my parking reservation?',
    answer:
      'Yes! You can easily modify or cancel your reservation through the app or website up to 24 hours before your booked time. A small cancellation fee may apply depending on the booking terms.',
  },
  {
    question: 'Is EzParking available in my city?',
    answer:
      'EzParking is available in multiple cities nationwide. You can check availability in your area by visiting our app or website and entering your location details.',
  },
];


export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
