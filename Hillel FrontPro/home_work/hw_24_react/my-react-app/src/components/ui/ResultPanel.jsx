export default function ResultPanel() {
  return (
    <>
      <div className="fw-semibold mb-2">Result:</div>

      <pre className="p-3 bg-dark border rounded app-pre">
        {`{
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "gender": "male",
          "url": "https://swapi.dev/api/people/1/"
        }`}
      </pre>
    </>
  )
}
