import PageContainer from './PageContainer.jsx'

export default function Footer() {
  return (
    <footer className="border-top bg-dark py-4 mt-4">
      <PageContainer>
        <div className="text-center text-light">
          <div>SWAPI — The Star Wars API</div>
          <div className="small">
            Unofficial branch •{' '}
            <a className="text-decoration-none" href="https://github.com/Juriy/swapi">
              GitHub
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
