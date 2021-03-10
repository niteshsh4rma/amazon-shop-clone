import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div class="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._cb428684220_.jpg"
                    alt=""
                />

                <div className="home__row">

                    <Product
                        id="12321341"
                        title="Redmi Note 9 Shadow Black, 4GB RAM, 64GB Storage"
                        price={10999}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/716tvc8pVEL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Amazon Brand - Solimo Damask Dreams 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green"
                        price={799.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/914TqzaiO7L._SL1500_.jpg"
                    />

                </div>

                <div className="home__row">

                    <Product
                        id="4903850"
                        title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                        price={379.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Lapcare LUS-040 USB 2.0 CH Multimedia Speaker System"
                        price={549.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81IughHBXBL._SL1500_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
                        price={21990}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SL1500_.jpg"
                    />


                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD + 256GB SSD/Windows 10/144Hz/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1052AX"
                        price={64990}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
