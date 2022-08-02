import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
          src="https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357203.jpg?w=1380&t=st=1659215053~exp=1659215653~hmac=264a22be278e032700dae3a8ddb47b20765efff1acff7e33ac8f37862e2c3465"
          alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="Tata Sampann 100% Chana Dal Fine Besan, Gram Flour  (1 kg)"
            price={119}
            image={"https://rukminim1.flixcart.com/image/280/280/knknc7k0/flour/v/l/e/fine-besan-besan-tata-sampann-original-imag27vfgxfy4qae.jpeg?q=70"}
            rating={4}
          />

          <Product
            id="5"
            title="Sunfeast Dark Fantasy Choco Fills Cream Filled  (300 g)"
            price={500.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/280/280/l0tweq80/cookie-biscuit/6/d/v/-original-imagcj64ufcuhukb.jpeg?q=70"
          />



          <Product
            id="2"
            title="Dukes Kaju Kukkies with real taste of Kaju Cookies  (400 g)"
            price={45}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/kobspe80/cookie-biscuit/d/d/p/kaju-kukkies-dukes-original-imag2thhbvzyfrpm.jpeg?q=70"
          />

        </div>

        <div className="home__row">
          <Product
            id="4"
            title="Maggi Mega Pack Masala Instant Noodles Vegetarian  (12 x 70 g)"
            price={151}
            rating={3}
            image="https://rukminim1.flixcart.com/image/416/416/l5jxt3k0/noodle/x/a/s/-original-imagg7asqgmsajtt.jpeg?q=70"
          />

          <Product
            id="3"
            title="INDIA GATE Feast Rozzana Basmati Rice"
            price={107}
            rating={3}
            image="https://rukminim1.flixcart.com/image/280/280/knqd3m80/rice/9/o/d/white-feast-rozzana-na-basmati-rice-pouch-india-gate-original-imag2c7wfzxrfwdy.jpeg?q=70" />

          <Product
            id="6"
            title="Fortune Refined Soyabean Oil Can  (5 L)"
            price={777}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/kqidx8w0/edible-oil/d/7/n/refined-can-soyabean-oil-fortune-original-imag4gb2gr2tykhp.jpeg?q=70"
          />
        </div>

        <div className="home__row">
          <Product
            id="7"
            title="SriSatymev ® Hybird Broccoli Seeds (50 Seeds) | Vegetable Seeds"
            price={114}
            rating={4}
            image="https://m.media-amazon.com/images/I/81dOnK2fB+L._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="8"
            title="DISHANKART Fresh Potato, 2 kg Pack"
            price={100}
            rating={4}
            image="https://m.media-amazon.com/images/I/71P46K9QwqL._AC_UL480_QL65_.jpg"
          />
        </div>

      </div>
    </div>
  )
}

export default Home