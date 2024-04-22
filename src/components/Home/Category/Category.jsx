import React from 'react';
import './category.css';
import {useNavigate} from 'react-router-dom'

const Category = ({ categories }) => {
const navigate=useNavigate()
if(!categories){
  return <div>Loading</div>
}
  return (
    <div className="shop_by_categories">
      <div className='categories'>
        {categories?.data?.map((item) => (
          <div key={item.id} className="box" onClick={()=>navigate(`/category/${item.id}`)}>
            <div className="imgBox">
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
            </div>
            <div className="content">
              <h2>{item.attributes.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
