app.factory('SidenavFactory', function() {
  return {
      showSidenav: function(path) {
        if(path==="app/templates/login.html")
        {
          return false;
        }
        else {
          return true;
        }
      }
    };
});
