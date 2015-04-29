var user = {
    'name': '纪南',
    'pwd': '123456'
  };

/* 请求路由测试 */

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
  ajax('POST', '/ajax/users', user, function(data){
    console.log(data);
    console.log(typeof data);
    alert('add user');
  });
}

function updateUser(){
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

/* 请求http接口测试 */

function httpGet(){
  ajax('GET', '/ajax/http', {}, function(data){
    console.log(data);
    alert('httpGet');
  });
}

function httpGetById(id){
  ajax('GET', '/ajax/http/' + id, {}, function(data){
    console.log(data);
    alert('httpGetById');
  });
}

function httpPost(){
  ajax('POST', '/ajax/http', user, function(data){
    console.log(data);
    alert('httpPost');
  });
}

function httpPut(id){
  ajax('PUT', '/ajax/http/' + id, user, function(data){
    console.log(data);
    alert('httpPut');
  });
}

function httpDel(id){
  ajax('GET', '/ajax/http/' + id, {}, function(data){
    console.log(data);
    alert('httpDel');
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