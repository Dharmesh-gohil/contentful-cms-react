import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
      <section className="hero">
          <div className="hero-center">
              <div className="hero-title">
                  <h1>contentful CMS</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique adipisci totam magnam voluptas tempora reiciendis, dolorem aliquid ipsum pariatur? Reprehenderit deserunt ab possimus similique molestiae.</p>
              </div>
              <div className="img-container">
                  <img src={ heroImg} alt="woman and browser" className="img" />
              </div>
          </div>    
      </section>
  )
}
export default Hero