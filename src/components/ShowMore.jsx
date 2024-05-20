import React from "react";
import { useState } from "react";
import data from '../utils/data'
import slideData from "../utils/slideData";
import '../App'
import styles from './ShowMore.module.scss'
import { ShoppingCart, Eye, Trash2 } from 'lucide-react';
import Slider from "./slider/Slider";

function ShowMore () {
    const [isOpen, setIsOpen] = useState(false)
    const [isTrash, setIsTrash] = useState(false)
    const [isOrder, setIsOrder] = useState(false)
    const [noOfElement, setNoOfElement] = useState(4)
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)

    const order = () => {
        setIsOrder(true)
        setIsTrash(false)
    }
    const loadMore = () => {
        setNoOfElement(noOfElement + 4)
    }

    const trashSlice = data.slice(0, count)

    const bootsAddInTrash = () => {
        setIsTrash(true)
        setCount(count + 1)
        setSum(sum + 11000)
    }
    const bootsDelInTrash = () => {
        if(sum > 0){
            setCount(count - 1)
            setSum(sum - 11000)
        } else{
            alert('Товаров в вашей корзине нет')
        }
    }


    const slice = data.slice(0, noOfElement)
    if(isOpen || isTrash || isOrder){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
    return (
        <section className="py-4 container">

            {/* TRASH */}
            {/* TRASH */}
            {/* TRASH */}

            {
                isTrash && <div className={styles.overlayTrash}>
                <div className={styles.modalTrash}>
                  <svg
                    className={styles.svgCloseTrash}
                    onClick={() => setIsTrash(false)}
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                  >
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                  </svg>
                  <div>
                      <div className={styles.over}>
                          {
                            trashSlice.map((el) => {
                                return(
                                    <div>
                                        <div className={styles.trashFlex}>
                                            <img src={el.img} alt="" />
                                            <div>
                                                <p>{el.h3}</p>
                                                <h3>{el.p}</h3>
                                            </div>
                                            <button onClick={bootsDelInTrash} className={styles.btnHover}>
                                                <Trash2 size="22px" color="#a8a8a8"/>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                          }
                      </div>
                      <div className={styles.btnTresh}>
                        <div className={styles.resTrash}>Итого: <h3>{sum}</h3></div>
                        <button onClick={order}>Перейти в корзину</button>
                      </div>
                  </div>
                </div>
              </div> 
            }

            {/* ORDER */}
            {/* ORDER */}
            {/* ORDER */}

            {
                isOrder && <div className={styles.overlayOrder}>
                <div className={styles.modalOrder}>
                  <svg
                    className={styles.svgClose}
                    onClick={() => setIsOrder(false)}
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                  >
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                  </svg>
                  <div className={styles.mainOrder}>
                      <div>
                            <div className={styles.flexCont}>
                                <h3>Оформление заказа</h3>
                                <p>Заказ 3456 67</p>
                            </div>
                            {
                                count >= 1 ? 
                                     <div className={styles.orderTrash}> 
                                        <p>Товаров в заказе: <span>{count} шт</span></p>
                                        <p>Общая сумма заказа: <span>{sum} руб</span></p>
                                        <div className={styles.over}>
                          {
                            trashSlice.map((el) => {
                                return(
                                    <div>
                                        <div className={styles.trashFlex}>
                                            <img src={el.img} alt="" />
                                            <div>
                                                <p>{el.h3}</p>
                                                <h3>{el.p}</h3>
                                            </div>
                                            <button onClick={bootsDelInTrash} className={styles.btnHover}>
                                                <Trash2 size="22px" color="#a8a8a8"/>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                          }

                      </div>
                          
                                    </div> 
                                : 
                                <div className={styles.orderTrash}> <h2>Товара в корзине не обнаружено</h2> </div>
                            }
                      </div>
                  </div>
                <form action="#" className={styles.formOrder}>
                    <input className={styles.inputOrder} type="text" placeholder="Ваше имя" />
                    <input className={styles.inputOrder} type="text" placeholder="Номер телефона" />
                    <input className={styles.inputOrder} type="text" placeholder="E-mail" />
                </form>
                <div><button className={styles.primaryBtn}>Оформить заказ</button></div>
                </div>
              </div>
            }

            {/* MODAL WITH SLIDE */}
            {/* MODAL WITH SLIDE */}
            {/* MODAL WITH SLIDE */}

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
                                    <button onClick={bootsAddInTrash} className={styles.btnHover} >
                                        <ShoppingCart color="white" size="28px" />
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