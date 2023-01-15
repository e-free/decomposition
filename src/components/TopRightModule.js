function TopRightModule (topRightModuleData){

  let moduleData = topRightModuleData.elem;
  return <div className="bottom-0 position-absolute p-2">
    <img className = "rounded-circle mb-3" src = {moduleData.imgSrc} alt={moduleData.title} />
    <h2 className="fs-5">
      <a href={moduleData.link} className = "text-decoration-none">{moduleData.title}</a>
    </h2>
    <p>{moduleData.text}</p>
  </div>

}
export default TopRightModule