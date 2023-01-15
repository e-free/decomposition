function EfirModule (props) {
    let programs = props.data.map(function(elem, index){
      return <li key={`efir-${index}`} className="mb-1">
        <img src="https://via.placeholder.com/25x25" className="rounded-circle me-2" alt="efir"/>
        <a className="text-decoration-none text-black"  href={elem.link}>
          <span>{elem.title}</span>&nbsp;
        </a> 
          <a className="text-decoration-none text-black-50"  href={elem.channelLink}>
          <span>{elem.channel}</span> 
        </a>
      </li>
    })
    
    return <div>
      <h2 className="fs-5"><a href="https://ya.ru?s=efir" className="text-decoration-none">Эфир</a> </h2>
      <ul className="list-unstyled">
        {programs}
      </ul>
    </div>
  };
  
  export default EfirModule