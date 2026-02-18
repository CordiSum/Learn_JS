import { Col } from 'react-bootstrap'

export default function InfoBlock({ title, children, md = 4 }) {
  return (
    <Col md={md} className=''>
      <h4 className="text-center">{title}</h4>
      {children}
    </Col>
  )
}
