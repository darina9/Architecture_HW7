import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";



const state = {
  cards: 
    [
      {
        id: 1,
        src: img1,
        title: "Какая-то акция 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores corrupti voluptate possimus maxime fugiat quisquam fuga nesciunt iste blanditiis?",
      },
      {
        id: 2,
        src: img2,
        title: "Какая-то акция 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores corrupti voluptate possimus maxime fugiat quisquam fuga nesciunt iste blanditiis?",
      },
      {
        id: 3,
        src: img3,
        title: "Какая-то акция 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores corrupti voluptate possimus maxime fugiat quisquam fuga nesciunt iste blanditiis?",
      },
   
    ]
}



const getters = {
  getCards: state => state.cards
}


const store = new Vuex.Store({
  state, 
  getters,
});

export default store;