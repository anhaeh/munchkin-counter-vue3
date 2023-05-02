import { defineStore } from 'pinia'

export const useMunchkinStore = defineStore('munchkins', {
  state: () => {
    return {
      players: []
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    addPlayer: function (player) {
      const newPlayer = Object.assign({
        id: this.players.length + 1,
        level: 1,
        items: 0
      }, player)
      this.players.push(newPlayer)
    },
    getPlayer: function(playerId) {
      return this.players.find(x => x.id === parseInt(playerId))
    },
    getImageUrl: function(imageId) {
      return new URL(`../assets/images/munchkins/avatar_${imageId}.png`, import.meta.url).href
    },
    removePlayer: function(playerId) {
      return this.players = this.players.filter(x => x.id !== parseInt(playerId))
    },
  },
  persist: true
})