if (navigator && navigator.language) {
    const userLanguage = navigator.language.toLowerCase();
    if(userLanguage.slice(0,2) == "pt"){
        window.location.href = "pt-br/index.html"
    }
}