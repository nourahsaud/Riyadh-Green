import React ,{useState}from 'react';
import '../App.css';


function Projects() {
  const [count ,setCount] = useState(0);
  const [images , setImages] = useState(['https://www.grg.sa/wp-content/uploads/2019/10/preview-lightbox-01_Green_Neighborhoods.jpg','https://www.sayidaty.net/sites/default/files/styles/681x999/public/2022-04/100448.jpeg?h=5ded6b27&itok=8BaMnKML','https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,h_1080,c_fill,q_auto,g_center/cnnarabic/2021/01/28/images/176210.jpg']);
  const [name , setName] = useState(['المنتزهات الكبرى','حدائق الأحياء','الأحياء الخضراء']);
  const [num , setNum] = useState(['01','02','03']);
  const changeIm=()=>{
    if(count<images.length-1){
      setCount(count+1)
      } 
    else{
      setCount(0)
    }
    }
  return (
    <div>

<main class="main">

  <section class="card-sm__container2">
    <section class="card-sm2" >
      <img  onClick={changeIm} src=  {images[count]}/>
      <a href="#" > <h1 class="card__text-lg">{name[count]}</h1></a>
     
    </section>
    <section >
        <div className='numberCard'>
      <p class="card__text-sm"></p>
      <a href="#" > <h1 class="card__text-lg">{num[count]}</h1></a>
      </div>
    </section>
    </section>

</main>
    </div>
  )
}

export default Projects