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

        var yearOrdered = risposta.data.response.sort(function(a, b){
          return a.year - b.year;
        });

        self.albums.forEach((item) => {
          if ( self.generi.includes(item.genre) == false) {
            self.generi.push(item.genre);
          }
        });
    });
  }
});
