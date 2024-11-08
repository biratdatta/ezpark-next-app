import { CheckIcon } from '@heroicons/react/20/solid';

 const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '₹190',
    description: "Ideal for individual learners seeking to start their educational journey.",
    features: [
      'Access to 10 courses',
      'Community support',
      'Progress tracking',
      'Certificate of completion for each course',
    ],
    featured: false,  
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '₹490',
    description: 'Comprehensive plan with personalized support and unlimited resources.',
    features: [
      'Unlimited course access',
      '1-on-1 mentorship',
      'Exclusive webinars',
      'Downloadable resources',
      'Customized learning plans',
    ],
    featured: true, // Keep this featured
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '₹990',
    description: 'For institutions and educators looking to offer extensive learning experiences.',
    features: [
      'Unlimited course creation',
      'Advanced analytics for student performance',
      'Dedicated support representative',
      'Custom integrations with LMS',
      'API access for external applications',
    ],
    featured: false,  
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#f0e6ff] to-[#d6d1e7] opacity-30" // Light gradient
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid fugiat dolorum
        voluptatibus.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 gap-x-6"> {/* Add horizontal gap */}
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 transition-transform duration-200 ease-in-out hover:scale-105', // Scale effect on hover
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                'text-base font-semibold leading-7',
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-gray-900' : 'text-gray-900',
                  'text-5xl font-bold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>
                /month
              </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'mt-6 text-base leading-7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-600' : 'text-gray-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
