var app = new Vue({
    el: "#root",
    data: {
      albums: [],
      generi: [],
      scelta: ""
    },

    mounted: function(){
      var self = this;

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (risposta) {
        self.albums = risposta.data.response;

        self.albums.forEach((album) => {
          if ( self.generi.includes(album.genre) == false) {
            self.generi.push(album.genre);
          }
        });
    });
  }
});
