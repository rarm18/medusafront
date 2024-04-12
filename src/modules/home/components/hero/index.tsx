import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div>
        <img className="w-full rounded-lg" src="https://cdn.shoplightspeed.com/shops/620311/themes/9901/assets/slide-2-image.jpg?20220825193044" alt=""/>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            A modern boutique with vintage charm. 
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Wuzy offers a curated selection of jewelry, clothing, home essentials, and other artisan gifts.
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
