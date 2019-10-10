const API_URL = 'http://localhost:5000/api';

const users = JSON.parse(localStorage.getItem('users')) || [];

$.get(`${API_URL}/book`)
.then(response => {
 response.forEach(book => {
    $('#books tbody').append(`
        <tr>
            <td>${book.name}</td>
            <td>${book.genre}</td>
            <td>${book.status}</td>
        </tr>`
        );
    });
})
.catch(error => {
 console.error(`Error: ${error}`);
});

users.forEach(function(users)
{
    $('#users tbody').append(`
    <tr>
        <td>${users.username}</td>
        <td>${users.password}</td>
        <td>${users.confirmpassword}</td>
    </tr>`
    );
});

$('#add-book').on('click', () => {
    const name = $('#name').val();
    const genre = $('#genre').val();
    const status = $('#status').val();

    const body = {
    name,
    genre,
    status
    };

    $.post(`${API_URL}/book`, body)
    .then(response => {
    location.href = 'booklist.html';
    })

    .catch(error => {
    console.error(`Error: ${error}`);
    });
});

var isAuthenticated = "";

$('#register').on('click', function() {
    
    const nuser = $('#username').val();
    const npassword = $('#password').val();
    const npassword2 = $('#confirmpassword').val();
  
    const there = users.find(users => users.username === nuser);
    
  
    if( npassword == npassword2)
    {
      if(there)
      {
        $('#errorrmessage').append("This user Already Exists");
      }
      else
      {
        users.push({ username: nuser, password: npassword});
        localStorage.setItem('users', JSON.stringify(users));
        location.href = 'login.html';
      }
    }
  });

  $('#login').on('click', function() {
    const user = $('#username').val();
    const password = $('#password').val();
    
    const there = users.find(users => users.username === user);
  
    if(there && password == there.password)
    {
        location.href = 'booklist.html';
    }
    else 
    {
      $('#errorrmessage').append("The password or the Username is wrong");
    }
  });
     