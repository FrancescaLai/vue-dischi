var app = new Vue({
    el: "#root",
    data: {
      albums: []
    },
    mounted: function(){
      var self = this;

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (risposta) {
        self.albums = risposta.data.response;
    });
  }
});
