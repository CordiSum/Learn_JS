import PageContainer from '../layout/PageContainer.jsx'

export default function Hero() {
  return (
    <PageContainer className="py-5 text-center bg-dark">
      <h1 className="display-5 fw-bold mb-2 text-warning">SWAPI</h1>

      <div className="fs-4 mb-3 text-warning">
        The Star Wars API
      </div>

      <div className="mb-4">
        <a href="#" className="text-decoration-none text-light ">
          (what happened to swapi.co?)
        </a>
      </div>

      <div className="fs-5 mb-2">
        All the Star Wars data you've ever wanted:
      </div>

      <div className="fs-5 mb-2">
        Planets, Spaceships, Vehicles, People, Films and Species
      </div>

      <div className="fs-5 mb-4">
        From all SEVEN Star Wars films
      </div>

      <h4 className="mb-4">
        Now with The Force Awakens data!
      </h4>

      <hr className="my-4" />
    </PageContainer>
  )
}
