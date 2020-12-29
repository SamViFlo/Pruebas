let rec;
    if (!("webkitSpeechRecognition" in window)){
        alert("Disculpas, no puedes usar la API");
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-EC";
        rec.continuous = true;
        rec.interin = true;
        rec.addEventListener("result",iniciar);
    }
    function iniciar(event){
        for(let i = event.resultIndex; i < event.result.length; i++){
            document.getElementById('texto').innerHTML = event.result[i][0].transcript;
        }
    }

    rec.start();