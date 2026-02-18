import {Container} from 'react-bootstrap'

export default function PageContainer({children, className = ''}) {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}