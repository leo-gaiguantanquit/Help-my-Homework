

function loading(bool){
    const load_bar = document.getElementById("loaderID");
    if (bool == true){
        if (load_bar.classList.contains("loader")){
            null;
        } else{
            load_bar.classList.add("loader");
        }
    } else{
        if (load_bar.classList.contains("loader")){
            load_bar.classList.remove("loader");
        }
    }
}

setTimeout(() =>{
    loading(false);
}, 2000);
