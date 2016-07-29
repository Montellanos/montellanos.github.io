    // Initialize Firebase

    $(document).ready(function() {
        var config = {
            apiKey: "AIzaSyCxMzC3JgNj66Y4plb0TyvcW7IX_-BVm7Q",
            authDomain: "saludmaps.firebaseapp.com",
            databaseURL: "https://saludmaps.firebaseio.com",
            storageBucket: "saludmaps.appspot.com",
        };
        firebase.initializeApp(config);
    });

    $('#login').on('click', function() {
        var email = $('#email').val();
        var pass = $('#password').val();
        if (email && pass) {
            firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
                console.log('everything went fine');
                console.log('user object:' + user);
            }).catch(function(error) {
                console.log('there was an error');
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + ' - ' + errorMessage);
            });

        } else {
            console.log('fill in both fields');
        }
    });









    function adddata() {
        var postData = {
            nombre: $('#nombre').val(),
            tipo: $('#tipo').val(),
            latitud: $('#latitud').val(),
            longitud: $('#longitud').val(),
            id_plan: $('#plan').val(),
            direccion: $('#direccion').val(),
            descripcion: 'Lo mejor en atencion al cliente',
            horario: 'Las 24 horas',
            telefono: $('#telefono').val(),
            especialidades: $('#especialidades').val(),
            analisis: $('#analisis').val()

        };

        var newPostKey = firebase.database().ref().child('instituciones').push().key;

        var updates = {};
        updates['/instituciones/' + newPostKey] = postData;

        firebase.database().ref().update(updates);

        location.reload();

    }
