import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

//ToDo: создать CSS-классы для отображения или скрытия эконки удаления карточки
function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.cardIt.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`element__delete ${isOwn && 'element__delete_visible'}`);
  const isLiked = props.cardIt.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`);
  

  function handleClick() {
    props.onCardClick(props.cardIt);
  };

  function handleLikeClick() {
    props.onCardLike(props.cardIt);
  };

  function handleDeleteClick() {
    if(isOwn)
      props.onCardDelete(props.cardIt);
  };

  return (
    <li className="element">
      <img className="element__image" src={props.cardIt.link} alt={props.cardIt.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
      <div className="element__text-container">
        <h4 className="element__text">{props.cardIt.name}</h4>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <p className="element__like-number">{props.cardIt.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
 

export default Card;