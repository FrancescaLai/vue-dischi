var app = new Vue({
    el: "#root",
    data: {
      albums: [],
      generi: [],
      scelta: ""
    },
    methods: function getCategories(categoria){

    },
    mounted: function(){
      var self = this;

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (risposta) {
        self.albums = risposta.data.response;

        self.albums.forEach((album) => {
          if ( this.generi.includes(album.genre) == false) {
            this.generi.push(album.genre);
          }
        });
    });
  }
});
