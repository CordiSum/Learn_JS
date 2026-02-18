import PageContainer from '../layout/PageContainer.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import RequestInput from '../ui/RequestInput.jsx'
import ResultPanel from '../ui/ResultPanel.jsx'

export default function TryItNow() {
  return (
    <PageContainer className="pb-5 text-center ">
      <SectionTitle className="h3">
        Try it now!
      </SectionTitle>

      <RequestInput />

      <ResultPanel />
    </PageContainer>
  )
}
