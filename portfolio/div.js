      function load() {
        document.getElementById("homebutton").disabled = true;
      }
      function profile(x) {
        document.getElementById("profile").style.display = "black";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("profilebutton").disabled = true;
        document.getElementById("projectbutton").disabled = false;
        document.getElementById("aboutbutton").disabled = false;
        document.getElementById("contactbutton").disabled = false;
        document.getElementById("homebutton").disabled = false;
      }
      function project() {
        document.getElementById("profile").style.display = "none";
        document.getElementById("projects").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("profilebutton").disabled = false;
        document.getElementById("projectbutton").disabled = true;
        document.getElementById("aboutbutton").disabled = false;
        document.getElementById("contactbutton").disabled = false;
        document.getElementById("homebutton").disabled = false;
      }
      function about() {
        document.getElementById("profile").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("profilebutton").disabled = false;
        document.getElementById("projectbutton").disabled = false;
        document.getElementById("aboutbutton").disabled = true;
        document.getElementById("contactbutton").disabled = false;
        document.getElementById("homebutton").disabled = false;
      }
      function contact() {
        document.getElementById("profile").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("profilebutton").disabled = false;
        document.getElementById("projectbutton").disabled = false;
        document.getElementById("aboutbutton").disabled = false;
        document.getElementById("contactbutton").disabled = true;
        document.getElementById("homebutton").disabled = false;
      }
      function home() {
        document.getElementById("profile").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("profilebutton").disabled = false;
        document.getElementById("projectbutton").disabled = false;
        document.getElementById("aboutbutton").disabled = false;
        document.getElementById("contactbutton").disabled = false;
        document.getElementById("homebutton").disabled = true;
      }
      function project(x) {
        var projecttag1 = "project";
        var projecttag2 = String(x);
        var projecttag = projecttag1.concat(projecttag2);
        document.getElementById("profile").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("profilebutton").disabled = false;
        document.getElementById("projectbutton").disabled = false;
        document.getElementById("aboutbutton").disabled = false;
        document.getElementById("contactbutton").disabled = false;
        document.getElementById("homebutton").disabled = false;
        
        document.getElementById(projecttag).style.display = "block";
      }
