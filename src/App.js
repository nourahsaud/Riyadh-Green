import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav}from 'react-bootstrap';
import './Style.scss';
import Project from './components/Projects'
import About from './components/About';
import Rout from './components/Rout';

function App() {
  return (
    <div >
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">الرياض الخضراء</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features">نبذة</Nav.Link>
      <Nav.Link href="#pricing">المشاريع</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  <Rout/>
  <br/>

  <main class="main">
  <section class="card-lg__container">
    <p class="card__text-sm"> المملكة العربية السعودية</p>
    <h1 class="card__text-lg">الرياض الخضراء</h1>
    <p class="card__text-md">أحد مشاريع رؤية 2030 تحت رعاية ولي العهد محمد بن سلمان</p>
    <a href={< Rout/>} class="card__btn">المشاريع</a>
  </section>




  <section class="card-sm__container">
    <section class="card-sm" style={{  
  backgroundImage: "url(" + "https://www.okaz.com.sa/uploads/images/2019/03/20/1193024.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <p class="card__text-sm">فهو واحد من أكبر مشاريع التشجير طموحًا في العالم</p>
      <a href={< About/>} > <h1 class="card__text-lg">1</h1></a>
     
    </section>
   
    <section class="card-sm" style={{  
  backgroundImage: "url(" + "https://www.grg.sa/wp-content/uploads/2019/10/preview-lightbox-01_Green_Neighborhoods.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <p class="card__text-sm">يغطي برنامج التشجير في "مشروع الرياض الخضراء" معظم عناصر ومكونات المدينة</p>
      <h1 class="card__text-lg">2</h1>
    </section>
 
    <section class="card-sm" style={{  
  backgroundImage: "url(" + "https://pbs.twimg.com/media/FRekXt3XIAAjQMJ.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}} >
      <p class="card__text-sm">يشمل: 3330 حديقة حي، و43 متنزهًا كبيرًا، و9 آلاف مسجد، و6 آلاف مدرسة</p>
      <h1 class="card__text-lg">3  </h1>
    </section>
 
    <section class="card-sm" style={{  
  backgroundImage: "url(" + "https://www.sayidaty.net/sites/default/files/styles/681x999/public/2022-04/100448.jpeg?h=5ded6b27&itok=8BaMnKML" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <p class="card__text-sm">يغطي برنامج التشجير 16,400  (أبراج نقل الكهرباء ومسارات أنابيب البترول)</p>
      <h1 class="card__text-lg">4</h1>
    </section>
 
   </section>

</main>
  
		</div>
 
  );
}

export default App;
