$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function(device) {
    $('#devices tbody').append(`
    <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
    </tr>`
    );
   });

   $('#add-device').on('click', function() {
       const newuser = $('#user').val();
       const newname = $('#name').val();
       devices.push({ user: newuser, name: newname});
       localStorage.setItem('devices', JSON.stringify(devices));
       location.href = '/';
   });

$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log('command is: ${command}');
});


   