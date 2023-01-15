function MapModule ({data, location}) {
  return <>
    <h2 className="fs-5"><a className="text-decoration-none" href = {data.linkMap}>Карта в {location}</a></h2>
    <p><a className="text-decoration-none text-black" href = {data.linkDescription}>{data.description}</a></p>
  </>
}
export default MapModule