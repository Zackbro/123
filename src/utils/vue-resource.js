const get = function (context ,url, list) {
  context.$http.get(url).then(function (res) {
    list = res.data;
    console.log(list);
  });
}

export default get