import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';


//ToDo: создать CSS-классы для отображения или скрытия эконки удаления карточки +
function Card({ cardIt, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardIt.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`element__delete ${isOwn && 'element__delete_visible'}`);
  const isLiked = cardIt.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`);
  

  function handleClick() {
    onCardClick(cardIt);
  };

  function handleLikeClick() {
    onCardLike(cardIt);
  };

  function handleDeleteClick() {
    if(isOwn)
      onCardDelete(cardIt);
  };


  return (
    <li className="element">
      <img className="element__image" src={cardIt.link} alt={cardIt.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
      <div className="element__text-container">
        <h4 className="element__text">{cardIt.name}</h4>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <p className="element__like-number">{cardIt.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
 

export default Card;