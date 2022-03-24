// jQuery Tooltip Start //
$description = $(".description");

  $('.enabled').hover(function() {
    
    $(this).attr("class", "enabled");
    $description.addClass('active');
    $description.html($(this).attr('name'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
});
// jQuery Tooltip End //

// Mobile Drop Down Menu Start //

document.getElementById("states-dropdown").onchange = function() {
    if(this.value === "alabama") {
        alabamaFunctionMobile();
    } 
    else if(this.value === "alaska") {
        alaskaFunctionMobile();
    }

    else if(this.value === "arizona") {
        arizonaFunctionMobile();
    }

    else if(this.value === "arkansas") {
        arkansasFunctionMobile();
    }

    else if(this.value === "california") {
        californiaFunctionMobile();
    }

    else if(this.value === "colorado") {
        coloradoFunctionMobile();
    }

    else if(this.value === "connecticut") {
        connecticutFunctionMobile();
    }

    else if(this.value === "delaware") {
        delawareFunctionMobile();
    }

    else if(this.value === "florida") {
        floridaFunctionMobile();
    }

    else if(this.value === "georgia") {
        georgiaFunctionMobile();
    }

    else if(this.value === "hawaii") {
        hawaiiFunctionMobile();
    }

    else if(this.value === "idaho") {
        idahoFunctionMobile();
    }

    else if(this.value === "illinois") {
        illinoisFunctionMobile();
    }

    else if(this.value === "indiana") {
        indianaFunctionMobile();
    }

    else if(this.value === "iowa") {
        iowaFunctionMobile();
    }

    else if(this.value === "kansas") {
        kansasFunctionMobile();
    }

    else if(this.value === "kentucky") {
        kentuckyFunctionMobile();
    }

    else if(this.value === "louisiana") {
        louisianaFunctionMobile();
    }

    else if(this.value === "maine") {
        maineFunctionMobile();
    }

    else if(this.value === "maryland") {
        marylandFunctionMobile();
    }

    else if(this.value === "massachusetts") {
        massachusettsFunctionMobile();
    }

    else if(this.value === "michigan") {
        michiganFunctionMobile();
    }

    else if(this.value === "minnesota") {
        minnesotaFunctionMobile();
    }

    else if(this.value === "mississippi") {
        mississippiFunctionMobile();
    }

    else if(this.value === "missouri") {
        missouriFunctionMobile();
    }

    else if(this.value === "montana") {
        montanaFunctionMobile();
    }

    else if(this.value === "nebraska") {
        nebraskaFunctionMobile();
    }

    else if(this.value === "nevada") {
        nevadaFunctionMobile();
    }

    else if(this.value === "newhampshire") {
        newhampshireFunctionMobile();
    }

    else if(this.value === "newjersey") {
        newjerseyFunctionMobile();
    }

    else if(this.value === "newmexico") {
        newmexicoFunctionMobile();
    }

    else if(this.value === "newyork") {
        newyorkFunctionMobile();
    }

    else if(this.value === "northcarolina") {
        northcarolinaFunctionMobile();
    }

    else if(this.value === "northdakota") {
        northdakotaFunctionMobile();
    }

    else if(this.value === "ohio") {
        ohioFunctionMobile();
    }

    else if(this.value === "oklahoma") {
        oklahomaFunctionMobile();
    }

    else if(this.value === "oregon") {
        oregonFunctionMobile();
    }

    else if(this.value === "pennsylvania") {
        pennsylvaniaFunctionMobile();
    }

    else if(this.value === "rhodeisland") {
        rhodeislandFunctionMobile();
    }

    else if(this.value === "southcarolina") {
        southcarolinaFunctionMobile();
    }

    else if(this.value === "southdakota") {
        southdakotaFunctionMobile();
    }

    else if(this.value === "tennessee") {
        tennesseeFunctionMobile();
    }

    else if(this.value === "texas") {
        texasFunctionMobile();
    }

    else if(this.value === "utah") {
        utahFunctionMobile();
    }

    else if(this.value === "vermont") {
        vermontFunctionMobile();
    }

    else if(this.value === "virginia") {
        virginiaFunctionMobile();
    }

    else if(this.value === "washington") {
        washingtonFunctionMobile();
    }

    else if(this.value === "westvirginia") {
        westvirginiaFunctionMobile();
    }

    else if(this.value === "wisconsin") {
        wisconsinFunctionMobile();
    }

    else if(this.value === "wyoming") {
        wyomingFunctionMobile();
    }

}



// Mobile Drop Down Menu Start //

// State Bubbles Start //

function alabamaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Alabama";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";

}

function alabamaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="al">Alabama</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function alaskaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Alaska";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function alaskaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Alaska";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function arizonaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Arizona";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function arizonaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Arizona";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function arkansasFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Arkansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function arkansasFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ar">Arkansas</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function californiaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "California";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function californiaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ca">California</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function coloradoFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="co">Colorado</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function coloradoFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Colorado";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function connecticutFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Connecticut";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function connecticutFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ct">Connecticut</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function delawareFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="de">Delaware</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function delawareFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Delaware";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function floridaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Florida";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function floridaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Florida";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function georgiaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Georgia";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function georgiaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Georgia";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function hawaiiFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Hawaii";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function hawaiiFunction() {
  document.getElementById("bubble-heading").innerHTML = "Hawaii";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function idahoFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Idaho";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function idahoFunction() {
  document.getElementById("bubble-heading").innerHTML = "Idaho";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function illinoisFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Illinois";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function illinoisFunction() {
  document.getElementById("bubble-heading").innerHTML = "Illinois";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function indianaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Indiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function indianaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Indiana";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function iowaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Iowa";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function iowaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Iowa";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function kansasFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Kansas";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function kansasFunction() {
  document.getElementById("bubble-heading").innerHTML = "Kansas";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function kentuckyFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Kentucky";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function kentuckyFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ky">Kentucky</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function louisianaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Louisiana";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function louisianaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="la">Louisiana</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function maineFunction() {
    document.getElementById("bubble-heading").innerHTML = "Maine";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function maineFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Maine";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function marylandFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Maryland";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function marylandFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="md">Maryland</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function massachusettsFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ma">Massachusetts</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function massachusettsFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Massachusetts";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function michiganFunction() {
    document.getElementById("bubble-heading").innerHTML = "Michigan";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function michiganFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Michigan";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function minnesotaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="mn">Minnesota</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function minnesotaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Minnesota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function mississippiFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ms">Mississippi</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function mississippiFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Mississippi";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function missouriFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Missouri";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function missouriFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="mo">Missouri</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function montanaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="mt">Montana</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function montanaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Montana";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function nebraskaFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="ne">Nebraska</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function nebraskaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Nebraska";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function nevadaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Nevada";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function nevadaFunction() {
  document.getElementById("bubble-heading").innerHTML = "Nevada";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function  newhampshireFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "New Hampshire";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  newhampshireFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="nh">New Hampshire</span>`; 
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function newjerseyFunction() {
    document.getElementById("bubble-heading").innerHTML = "New Jersey";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function newjerseyFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "New Jersey";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function newmexicoFunction() {
    document.getElementById("bubble-heading").innerHTML = "New Mexico";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function newmexicoFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "New Mexico";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  newyorkFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "New York";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  newyorkFunction() {
  document.getElementById("bubble-heading").innerHTML = "New York";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function  northcarolinaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "North Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  northcarolinaFunction() {
  document.getElementById("bubble-heading").innerHTML =`<span id="nc">North Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function northdakotaFunction() {
    document.getElementById("bubble-heading").innerHTML = "North Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function northdakotaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "North Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  ohioFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Ohio";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  ohioFunction() {
  document.getElementById("bubble-heading").innerHTML = "Ohio";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function oklahomaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Oklahoma";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  oklahomaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="ok">Oklahoma</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function  oregonFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Oregon";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  oregonFunction() {
  document.getElementById("bubble-heading").innerHTML = "Oregon";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function  pennsylvaniaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Pennsylvania";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  pennsylvaniaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="pa">Pennsylvania</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function rhodeislandFunction() {
    document.getElementById("bubble-heading").innerHTML = "Rhode Island";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function rhodeislandFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Rhode Island";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  southcarolinaFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "South Carolina";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  southcarolinaFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="sc">South Carolina</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function southdakotaFunction() {
    document.getElementById("bubble-heading").innerHTML = "South Dakota";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function southdakotaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "South Dakota";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("dem-heading").innerHTML = "Body";
}

function tennesseeFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="tn">Tennessee</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function tennesseeFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Tennessee";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function texasFunction() {
    document.getElementById("bubble-heading").innerHTML = "Texas";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function texasFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Texas";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  utahFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Utah";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  utahFunction() {
  document.getElementById("bubble-heading").innerHTML = "Utah";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function  vermontFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Vermont";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  vermontFunction() {
  document.getElementById("bubble-heading").innerHTML = "Vermont";
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function virginiaFunction() {
    document.getElementById("bubble-heading").innerHTML = "Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function virginiaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  washingtonFunctionMobile() {
  document.getElementById("mobile-heading-1").innerHTML = "Washington";
  document.getElementById("mobile-heading-2").innerHTML = "Heading";
  document.getElementById("mobile-body-2").innerHTML = "Body";
  document.getElementById("mobile-heading-3").innerHTML = "Heading";
  document.getElementById("mobile-body-3").innerHTML = "Body";
}

function  washingtonFunction() {
  document.getElementById("bubble-heading").innerHTML = `<span id="wa">Washington</span>`;
  document.getElementById("bubble-body").innerHTML = "";
  document.getElementById("rep-heading").innerHTML = "Heading";
  document.getElementById("rep-body").innerHTML = "Body";
  document.getElementById("dem-heading").innerHTML = "Heading";
  document.getElementById("dem-body").innerHTML = "Body";
}

function westvirginiaFunction() {
    document.getElementById("bubble-heading").innerHTML = "West Virginia";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function westvirginiaFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "West Virginia";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function wisconsinFunction() {
    document.getElementById("bubble-heading").innerHTML = `<span id="wi">Wisconsin</span>`;
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function wisconsinFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Wisconsin";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

function wyomingFunction() {
    document.getElementById("bubble-heading").innerHTML = "Wyoming";
    document.getElementById("bubble-body").innerHTML = "";
    document.getElementById("rep-heading").innerHTML = "Heading";
    document.getElementById("rep-body").innerHTML = "Body";
    document.getElementById("dem-heading").innerHTML = "Heading";
    document.getElementById("dem-body").innerHTML = "Body";
}

function wyomingFunctionMobile() {
    document.getElementById("mobile-heading-1").innerHTML = "Wyoming";
    document.getElementById("mobile-heading-2").innerHTML = "Heading";
    document.getElementById("mobile-body-2").innerHTML = "Body";
    document.getElementById("mobile-heading-3").innerHTML = "Heading";
    document.getElementById("mobile-body-3").innerHTML = "Body";
}

// Data Bubbles End //








