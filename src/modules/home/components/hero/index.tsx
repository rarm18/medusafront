import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="bg-[url('https://wuzystore.s3.amazonaws.com/banner-bg.jpg')] w-full bg-center bg-no-repeat bg-cover absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
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
            Wuzy offers a curated selection of jewelry
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            clothing, home essentials, and other artisan gifts.
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
