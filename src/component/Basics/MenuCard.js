import React from 'react'

const MenuCard = ({menuData}) => {
    
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {
        return  (
            <>
            <div>
        <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtitle">{curElem.id}</span>
          <span className="card-author subtle">{curElem.name}</span>
          <h2 className="card-title">{curElem.name}</h2> 
          <span className="card-description subtle">
          {curElem.description}
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis praesentium aliquid maxime, quas inventore itaque veniam sequi qui consectetur, ullam quaerat sit commodi minima nostrum quidem dignissimos deserunt consequatur blanditiis. 
          </span>
          <div className="card-read">Read</div>
        </div>
       <img src={curElem.image} alt ="images" width ="350px" height="200px" className="card-media" />

        <span className="card-tag subtle">Order Now</span>
      </div>
    </div>
    </div>
</>

        )
})}
    

    </section>
    </>
  )
}

export default MenuCard