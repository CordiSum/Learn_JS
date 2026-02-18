import { Row } from 'react-bootstrap'
import PageContainer from '../layout/PageContainer.jsx'
import InfoBlock from '../ui/InfoBlock.jsx'

export default function InfoSection() {
  return (
    <PageContainer className="pb-5 ">
      <Row className="pt-4 d-flex justify-content-between">

        <InfoBlock title="What is this?" md={3}>
          <p>
            The Star Wars API, or "swapi" (Swah-pee) is the world's first
            quantified and programmatically-accessible data source for all the
            data from the Star Wars canon universe!
          </p>
          <p>
            We've taken all the rich contextual stuff from the universe and
            formatted into something easier to consume with software.
          </p>
        </InfoBlock>

        <InfoBlock title="How can I use it?" md={4}>
          <p>
            All the data is accessible through our HTTP web API.
          </p>
          <p>
            Helper libraries for popular programming languages are also provided.
          </p>
        </InfoBlock>

        <InfoBlock title="What happened with old swapi.co?" md={3}>
          <p>
            swapi.co is not supported and maintained anymore.
          </p>
          <p>
            This project is open source and you can contribute on GitHub.
          </p>
        </InfoBlock>

      </Row>
    </PageContainer>
  )
}
