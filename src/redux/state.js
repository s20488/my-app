import avatar from '../avatar.jpg'

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Carl', img: avatar},
                {id: 2, name: 'Viktor', img: avatar},
                {id: 3, name: 'Leo', img: avatar}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Hi'}
            ],
            sidebar: [
                {id: 1, name: 'Carl', img: avatar},
                {id: 2, name: 'Viktor', img: avatar},
                {id: 3, name: 'Leo', img: avatar}
            ]
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first post.', likesCount: 11}
            ],
            newPostText: 'test'
        },
    },
    getState() {
      return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

window.store = store;

export default store;