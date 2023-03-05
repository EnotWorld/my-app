let rerenderEntireThee = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        postsElements: [
            {id: 1, message: 'Hi world', likesCount: 20},
            {id: 2, message: 'Mistery', likesCount: 321},
            {id: 3, message: 'Ssshhh', likesCount: 3434}
        ],
        newPostText: 'Mistery'
    },
    messagesPage: {
        messagesElements: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Ho is you'},
            {id: 3, message: 'Yo my friend'},
            {id: 4, message: 'Yo my friend'},
            {id: 5, message: 'Yo my friend'}
        ],
        dialogsElements: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Bob'},
            {id: 4, name: 'Mister'},
            {id: 5, name: 'Xxx'},
            {id: 6, name: 'Yyy'}
        ],
        newMessageText: 'Hi, '
    }
}

export const subscribe = (observer) => {
    rerenderEntireThee = observer;
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsElements.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThee();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThee();
}


export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messagesElements.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireThee();
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireThee();
}

export default state;