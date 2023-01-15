function MainMenuModule (props) {
let menuArr = props.menu.map(function (menuElem, index) {
  return <li key={`li-${index}`} className="pe-3"><a href={menuElem.url} className="text-decoration-none">{menuElem.text}</a></li>    
});
return <ul className="list-group list-group-horizontal list-inline pb-2 fs-5">
{menuArr}
</ul>
}

export default MainMenuModule