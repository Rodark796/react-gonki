import React, { useState } from 'react';

function CardOfProduct(props) {

      let [number, setNumber] = useState(5)
      let changeNumber = () => {
         setNumber(prev => prev+5)
      }
      let [heart, setHeart] = useState(props.datacard.isLiked)
      let heartClass = heart ? './assests/images/like.svg': './assets/images/nolike.svg'
      let changeFavourite = () => {
        setHeart(prev => !prev)
      }

      let [number1, setNumber1] = useState(0)
      let changeNumberPlus = () => {
         setNumber1(prev => !prev+1)
      }
      let changeNumberMinus = () => {
         setNumber1(prev => {
            if (prev ===0) return 0 
            return prev-1
         })
      }

      return(
         
         <div className="card">
            <img src={props.datacard.img} alt='cardimage' />
            <div className="text-block">
               <h3>{props.datacard.title}</h3>
               <div className="text-price">{props.datacard.price} €</div>
               <div className="button-in-cart" onClick={changeNumber}>  
                  Добавить в корзину
               </div>
            </div>
            <div className='favourite' >
               <img className="favourite-icon" src={heartClass} alt="like" 
               onClick={changeFavourite} />
            </div>
            <div className="count-block">
               <div className="count-button minus" onClick={changeNumberMinus}>-</div>
               <div className="count-block-text-block">
                  <div className="count-block-text1">{number1}</div>
                  <p className="count-block-text2">В корзине</p>
               </div>
               <div className="count-button plus" onClick={changeNumberPlus}>+</div>
            </div>
         </div>
      )
   }


 export default CardOfProduct;