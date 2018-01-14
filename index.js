<!DOCTYPE html>
<html>
<body>



	<form>

      <input type="text" placeholder="Search username" name="search">
      <button type="submit">Search</button>
	</form>  








<div id="demo"></div>

<script>

var myArray = [
{ "display": " mojombo ",
  "repos-url": "httpss://api.github.com/users/mojombo/repos"
},
{ "display": "defunkt ",
  "repos-url": "https://api.github.com/users/defunkt/repos"
},
{ "display": "pjhyett",
  "repos-url": "https://api.github.com/users/pjhyett/repos"
},
{ "display": "wycats",
  "repos-url": "https://api.github.com/users/wycats/repos"
},
{ "display": "ezmobius",
  "repos-url": "https://api.github.com/users/ezmobius/repos"
},
{ "display": "ivey",
   "repos-url": "https://api.github.com/users/ivey/repos"
},
{ "display": "evanphx",
  "repos-url":   "https://api.github.com/users/evanphx/repos"
},

{ "display": "vanpelt",
  "repos-url": "https://api.github.com/users/vanpelt/repos"
},

{  "display": "wayneeseguin",
   "repos-url": "https://api.github.com/users/wayneeseguin/repos"
},

{ "display": "brynary",
  "repos-url":  "https://api.github.com/users/brynary/repos"
},

{ "display": "kevinclark",
  "repos-url":  "https://api.github.com/users/kevinclark/repos"
},

{ "display": "technoweenie",
  "repos-url":  "https://api.github.com/users/technoweenie/repos"
},

{ "display": "macournoyer",
  "repos-url": "https://api.github.com/users/macournoyer/repos"
},

{ "display": "takeo",
  "repos-url": "https://api.github.com/users/takeo/repos"
},

{ "dissplay": "Caged",
  "repos-url": "https://api.github.com/users/Caged/repos"
},

{ "display": "topfunky",
  "repos-url": "https://api.github.com/users/topfunky/repos"
},
{ "display": "anotherjesse",
  "repos-url": "https://api.github.com/users/anotherjesse/repos"
},
{ "display": "roland",
  "repos-url": "https://api.github.com/users/roland/repos"
},

{ "display": "lukas",
  "repos-url": "https://api.github.com/users/lukas/repos"
},

{ "display": "fanvsfan",
  "repos-url": "https://api.github.com/users/fanvsfan/repos
},

{ "display": "tomtt",
  "repos-url": "https://api.github.com/users/tomtt/repos"
},
{ "display": "railsjitsu",
  "repos-url": "https://api.github.com/users/railsjitsu/repos"
},
{ "display": "nitay",
  "repos-url": "https://api.github.com/users/nitay/repos"
},
{ "display": "kevwil",
  "repos-url": "https://api.github.com/users/kevwil/repos"
},
{ "display": "KirinDave",
  "repos-url": "https://api.github.com/users/KirinDave/repos"
},
{ "display": "jamesgolick",
  "repos-url": "https://api.github.com/users/jamesgolick/repos"
},

{ "display": "atmos",
  "repos-url": "https://api.github.com/users/atmos/repos"
},

{ "display": "errfree",
  "repos-url": "https://api.github.com/users/errfree/repos"
},
{ "display": "mojodna",
  "repos-url": "https://api.github.com/users/mojodna/repos"
},
{ "display": "bmizerany",
  "repos-url": "https://api.github.com/users/bmizerany/repos"
}
]
  
]



var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/users";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        
		myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].login + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("demo").innerHTML = out;
}
</script>


</body>
</html>
