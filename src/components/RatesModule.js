function RatesModule(props){
  let rates = props.rates.map(function(rate, index) {
    return <li key={`li-${index}`}>
      <span className="fw-bold pe-1">{rate.name}</span>
      <span className="fw-normal pe-1">{rate.val}</span>
      <span className="text-black-50 pe-2">{rate.diff}</span>
    </li>     
  });

  return <ul className="list-group list-group-horizontal list-inline pb-2 small">
    {rates}
  </ul>

}

export default RatesModule