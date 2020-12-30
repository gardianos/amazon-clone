import React from 'react'
import  './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
       <div className="home__container">
           <img 
           className="home__image"
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt=""
           />
           <div className="home__row">
               <Product
               id="1" 
                title='The lean startup' price={29.99}
               image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
               rating={5}/>
               <Product
               id="12" 
               title='Kemi per te shitur speca dhe patligjona' price={239.99}
               image='https://www.recetakuzhine.net/wp-content/uploads/2014/05/stuffed-peppers-tomato-7783587.jpg'
               rating={5}/>
           </div>

           <div className="home__row">
           <Product id="123" 
                title='Laptopa te teknologjise se fundit' price={429.99}
               image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4oc60?ver=5a22&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true'
               rating={5}/>
           <Product id="1234" 
                title='t shirt code te mira dhe te lira' price={25.99}
               image='https://www.impericon.com/360x520x85/media/catalog/product/c/o/codeorange_iamking_lg.jpg'
               rating={5}/>
           <Product id="12345" 
                title='Shitet golf 3 me cmim te volitshem' price={1050.99}
               image='https://cdn.motor1.com/images/mgl/XPEQk/s1/vw-golf-iii-1991-1997.jpg'
               rating={5}/>
           </div>

           <div className="home__row">
           <Product id="123456" 
                title='Jemi duke shitur kete tavoline pune me cmim me te mire ne trege' price={219.99}
               image='https://image.architonic.com/img_pro2-4/125/3211/tray-bureau-ima0045okrect-b.jpg'
               rating={5}/>
           </div>
           
       </div>
        </div>
    );
}

export default Home
