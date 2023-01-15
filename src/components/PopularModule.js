function PopularModule (props) {
let popularNews=props.popular.map(function(elem, index){
  return <li key={`li-${index}`} className="mb-1">
    <a className="text-decoration-none text-black"  href={elem.link}><span className="fw-bold">{elem.title}</span></a> – {elem.descr}
  </li>
});

return <div>
  <h2 className="fs-5 pt-4"><a href="https://ya.ru?s=popular" className="text-decoration-none">Популярное</a></h2> 
  <ul className="list-unstyled">
    {popularNews}
  </ul>
</div>
}
export default PopularModule