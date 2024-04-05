if (window.location.search.indexOf('name') > -1) {
    // get the value of the name parameter
    var name = window.location.search.split('=')[1];
    // display a welcome message
    document.write('<p>Welcome, ' + name + '!</p>');
}