function TabModule (props) {
  let items = props.items;
 
  return (
    <div>
      <div className="tab">
        {items.map((item, index) => (
          <button
            className={`tablinks fw-bold fs-5 ps-0 fw-bold fs-5 ps-0 text-primary bg-body border-0 ${item.active ? "active" : ""}`}
          key = {index}>{item.title}</button>
        ))}
      </div>
      
    </div>
  );
}

export default TabModule