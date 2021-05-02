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
      /*faccio qst console qui sotto per sapere quali sono le chiavi/valore che mi arrivano da questa api (tipo Year, Genre, Poster ecc) */
        console.log(risposta.data);
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
