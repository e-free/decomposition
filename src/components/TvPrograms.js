function TvPrograms (props) {
  let programs = props.data.map(function(elem, index){
    return <li key={`tv-${index}`} className="mb-1">
      <a href={elem.link} className="text-decoration-none text-black" >
        <span>{elem.time}</span>&nbsp;
        <span>{elem.title}</span>&nbsp;
      </a> 
        <a href={elem.channelLink} className="text-decoration-none text-black-50" >
        <span>{elem.channel}</span> 
      </a>
    </li>
  })
  
  return <div>
    <h2 className="fs-5 pt-4"><a href="https://ya.ru?s=tv" className="text-decoration-none">Телепрограмма</a> <a  href="https://ya.ru/text/?text=efir" className="text-decoration-none" >Эфир</a></h2>
    <ul className="list-unstyled">
      {programs}
    </ul>
  </div>
};

export default TvPrograms
