const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Product() {
  return (
    <div className="tw-bg-gray-100 bodyContainer">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-8 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl tw-py-8 sm:tw-py-12 lg:tw-max-w-none lg:tw-py-16">
          <div className="tw-flex tw-justify-center tw-items-center">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">
              Product Categories
            </h2>
           
          </div>

          <div className="tw-mt-6 tw-space-y-12 lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-x-6 lg:tw-space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="tw-group tw-relative">
                <div className="tw-relative tw-h-80 tw-w-full tw-overflow-hidden tw-rounded-lg tw-bg-white sm:tw-aspect-h-1 sm:tw-aspect-w-2 lg:tw-aspect-h-1 lg:tw-aspect-w-1 tw-group-hover:tw-opacity-75 sm:tw-h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                  />
                </div>
                <p className="tw-text-base tw-mt-3 tw-font-semibold tw-text-gray-900">
                  {callout.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
