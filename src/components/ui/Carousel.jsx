import * as React from "react"
import * as CarouselPrimitive from "embla-carousel-react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef(({ className, opts, orientation = "horizontal", ...props }, ref) => {
  const viewportRef = React.useRef(null)
  const [emblaRef, emblaApi] = CarouselPrimitive.useEmblaCarousel({
    direction: orientation === "vertical" ? "ttb" : "ltr",
    ...opts,
  })

  React.useImperativeHandle(ref, () => emblaApi, [emblaApi])

  return (
    <div ref={emblaRef} className={cn("overflow-hidden", className)} {...props}>
      <div className={cn("flex", orientation === "vertical" && "flex-col")}>
        {props.children}
      </div>
    </div>
  )
})
Carousel.displayName = "Carousel"

export { Carousel }
