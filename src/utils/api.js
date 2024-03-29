import {apiData} from './constants';

class Api {
  constructor(apiData) {
    this._url = apiData.url;
    this._cohortId = apiData.cohortId;
    this._token = apiData.token;
    this._authUrl = apiData.authUrl;
  }


//Обработка логики then
  _thenResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }

//Получить массив карточек с сервера
  getAllCards() {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      headers: {
        "authorization": this._token,
      }
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Добавление новой карточки на сервер
  addCard(cardName, cardLink) {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      method: 'POST',
      headers: {
        "authorization": this._token,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "name": cardName,
        "link": cardLink
      })
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Удаление карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._url}/${this._cohortId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        "authorization": this._token,
      }
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Простановка или удаление лайка
  changeLikeStatus(cardId, isLiked) {
    return fetch(`${this._url}/${this._cohortId}/cards/likes/${cardId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        "authorization": this._token,
      }
    })
    .then(res => this._thenResponse(res));
  }

  //Получает с сервера информацию о пользователе
  getProfile() {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      headers: {
        "authorization": this._token,
        "content-type": "application/json"
      }
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Редактирует на сервере информацию о пользователе
  editProfile(profileName, profileAbout) {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      method: 'PATCH',
      headers: {
        "authorization": this._token,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "name": profileName,
        "about": profileAbout
      })
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Меняет иконку аватара пользователя
  changeAvatar(avatarUrl) {
    return fetch(`${this._url}/${this._cohortId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        "authorization": this._token,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "avatar": avatarUrl
      })
    })
    .then(res => {return this._thenResponse(res)});
  }

  //Регистрация пользователя
  register(email, password) {
    // debugger;
    return fetch(`${this._authUrl}/signup`, {
      method: 'POST',
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      // debugger;
      // console.log(`Вот такой ответ приходит при успешной регистрации - ${res.data.json}`)
      return this._thenResponse(res);
    });
  }

  //Авторизация пользователя
  login(email, password) {
    debugger;
    return fetch(`${this._authUrl}/signin`, {
      method: 'POST',
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      console.log(res);
      debugger;
      return this._thenResponse(res);
    });
  }

  //Временное решение, пока сервер Практикума не заработает
  // login(email, password) {
  //   console.log(email);
  //   console.log(password);
  //   let promise = new Promise(function (resolve, reject) {
  //     setTimeout(
  //       () =>
  //         resolve({
  //           token:
  //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUxNDhlNWJiODhmZGNhOTIxYjZhYzciLCJpYXQiOjE1OTkyMTExNzN9.Q3DVLh7t0f0BjyG9gh3UlUREYQxl2chdGTGy701lF6I',
  //         }),
  //       2000,
  //     );
  //   });
  //   return promise;
  // }

  checkToken(token) {
    return fetch(`${this._authUrl}/users/me`, {
      method: 'GET',
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
    })
    .then(res => {
      debugger;
      console.log(res);
      return this._thenResponse(res);
    })
  }

}

const api = new Api(apiData);

export default api;
