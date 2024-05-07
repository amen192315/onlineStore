import React from "react";
import { useState } from "react";
import data from '../utils/data'
import slideData from "../utils/slideData";
import '../App'
import styles from './ShowMore.module.scss'
import { ShoppingCart, Eye } from 'lucide-react';
import Slider from "./slider/Slider";

function ShowMore () {
    const [isOpen, setIsOpen] = useState(false)
    const [noOfElement, setNoOfElement] = useState(4)
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement)
    }
    const slice = data.slice(0, noOfElement)
    if(isOpen){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
    return (
        <section className="py-4 container">
            {isOpen && <div className={styles.overlay}>
              <div className={styles.modal}>
                <svg
                  className={styles.svgClose}
                  onClick={() => setIsOpen(false)}
                  height="200"
                  viewBox="0 0 200 200"
                  width="200"
                >
                  <title />
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <div>
                    <div>
                        <Slider slideData={slideData}/>
                    </div>
                </div>
              </div>
            </div>}
            <div className="row justify-content-center align-items-center">
                {slice.map((item, index) => {
                    return(
                        <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow show-more">
                                <img src={item.img} className="card-img-top"/>
                                <div className={styles.imgHover}>
                                    <button onClick={() => setIsOpen(true)} className={styles.btnHover}>
                                        <Eye color="white" size="28px"/>
                                    </button>
                                    <button className={styles.btnHover}>
                                        <ShoppingCart color="white" size="28px"/>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{item.h3}</h3>
                                    <p className="card=text">{item.p}</p>
                                </div>
                            </div>
                    </div>
                    )
                })}
                
            </div>
            <div className={styles.pos}>
                {
                    noOfElement === slice.length ? 
                    <button className={styles.btnShow} onClick={loadMore}> Показать еще</button> 
                    :  <button className={styles.btnShow} onClick={loadMore}> Товары этой категории отсутствуют </button>
                }
            </div>
        </section>
    )
}
export default ShowMore