import Container from './Container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className="border-1 border-base-200 mb-8" />
        <div className="flex gap-10 justify-center">
          <a
            href="https://github.com/francescocirulli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/Frankc_eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://medium.com/@frankcc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
