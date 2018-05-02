
    function rt() {
        var a = document.SForm.SInput.value;
        var result ;
        switch (a) {
            case "one":result = "yes";break;
            case "two":result = "yes";break;
            case "three":result = "No";break;
            default:result = "None";
                break;
        }
        document.SForm.Sresult.value =result;
    }
