function MainBannerModule ( {url, alt, src} ) {
  return <>
    {(src && <a href={url}><img src={src} alt = {alt ? alt : ""} /></a>)}
    
  </>

}
export default MainBannerModule