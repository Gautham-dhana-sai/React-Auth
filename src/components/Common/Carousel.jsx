import "../../styles/carousel.css"
import "../../styles/allignment.css"
import { useEffect, useState } from "react"

const Carousel = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="carousel-row">
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 70}%)` }}
        >
          {slides.map((text, i) => (
            <div key={i} className="carousel-slide box">
              <div className="small-square box icon-center"></div>
                <div className="wid-180 pad-5">
                  <strong>{text}</strong>
                  <div>Statement</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel