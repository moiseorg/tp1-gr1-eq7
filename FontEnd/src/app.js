// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://api.github.com//orgs/moiseorg', true)
//request.open('GET','https://api.github.com/repos/tallapatrick/tp1-gr1-eq7', true)
//request.open('GET','https://api.github.com/repos/tallapatrick/tp1-gr1-eq7', true)

request.setRequestHeader("Authorization", `token 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`)


request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);

  var statusHTML = '';
  $.each(data, function(i, status) {
    //statusHTML += '<tr>';
    //statusHTML += '<td>' + status.title + '</td>';
    //statusHTML += '<td>' + status.created_at + '</td>';
    //statusHTML += '<td>' + status.milestones_url + '</td>';
    //statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

//
request.send();
