function queryUsers(){
  ajax('GET', '/ajax/users', {}, function(data){
    console.log(data);
    alert('query users');
  });
}

function getUser(){
  ajax('GET', '/ajax/users/12', {}, function(data){
    console.log(data);
    alert('get user');
  });
}

function addUser(){
  var user = {
    name: 'jishuang',
    pwd: '123'
  }
  ajax('POST', '/ajax/users', user, function(data){
    console.log(data);
    alert('add user');
  });
}

function updateUser(){
  var user = {
    name: 'jinan',
    pwd: '123'
  }
  ajax('PUT', '/ajax/users/12', user, function(data){
    console.log(data);
    alert('update user');
  });
}

function deleteUser(){
  ajax('DELETE', '/ajax/users/124', {}, function(data){
    console.log(data);
    alert('delete user');
  });
}

function httpGet(){
  ajax('GET', '/ajax/httpGet', {}, function(data){
    console.log(data);
    alert('httpGet');
  });
}

function ajax(type, url, data, callback) {
  $.ajax({
    cache: true,
    type: type,
    url: url,
    data: data,
    async: true,
    error: function(request) {
      alert('ajax error');
    },
    success: function(data) {
      callback(data);
    }
  });
}