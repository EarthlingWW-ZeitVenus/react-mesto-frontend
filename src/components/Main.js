import React from 'react';
import Card from './Card';
import pencilBig from '../images/Pencil-big.svg';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);


  return (

    <main className="content">
      
    <section className="profile profile_align_top-center">
      <div className="profile__info-area">
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser && currentUser.avatar})` }}>
          <div className="profile__overlay">
            <img className="profile__edit-avatar" src={pencilBig} alt="иконка с изображением карандаша" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__full-name">{currentUser && currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__profession">{currentUser && currentUser.about}</p>
        </div>
      </div>
      <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements elements_align_top-bottom">
      <ul className="elements__list">
        {props.cards.map(cardItem =>
          {
            return (
              <Card key={cardItem._id} cardIt={cardItem} onCardClick={props.forwardMainOnCardClick} onCardLike={props.forwardMainOnCardLike} onCardDelete={props.forwardMainOnCardDelete} />    
            )
          })
        }
      </ul>
    </section>

    </main>

  )
}


export default Main;