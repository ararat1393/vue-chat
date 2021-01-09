
const state = {
  chat:  [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          type:'incoming',
          author: 'Vasya',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          type:'outgoing',
          author: 'Petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!',
        },
        {
          id: 3,
          author: 'Petya',
          type:'outgoing',
          created: '2019-08-02 05:20',
          text: 'А у тебя?',
        },
      ],
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          type: 'outgoing',
          author: 'Petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь?',
        },
        {
          id: 2,
          type: 'incoming',
          author: 'Vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!',
        },
        {
          id: 3,
          type: 'outgoing',
          author: 'Petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!',
        },
      ],
    },
  ],
  dialog:[],
  me:null
}

const getters = {
  getMessagesList: function (state){
    return state.chat;
  },
  getDialog: function (state) {
    return state.dialog;
  },
  getMe: function (state) {
    return state.me;
  }
}

const mutations = {
  SET_DIALOG:function (state,dialog){
    state.dialog = dialog;
  },
  SET_USER: function (state,user){
    state.me = user;
  },
  UPDATE_DIALOG: function (state, me){
    me.id = state.dialog.length + 1;
    state.dialog.push(me);
  }
}

const actions = {
  fetchChat({commit,state}){
    return new Promise((resolve, reject) => {
      return resolve(state.chat);
    })
  }
}

export default {state,getters,mutations,actions}
