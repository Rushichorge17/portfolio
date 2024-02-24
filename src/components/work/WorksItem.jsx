import React from 'react';


const WorksItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
     <h3 className="work__title">{item.title}</h3>
     <a href={item.demoLink} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-item"></i>
        </a>
        <a href={item.codeLink} className="work__button work__button-code">
          View Code <i className="bx bx-code-alt work__button-item"></i>
        </a>
    </div>
  );
};  

export default WorksItem;
