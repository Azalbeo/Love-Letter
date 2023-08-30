document.getElementById('book').addEventListener('click',function(e){
    e = this
    e = this.style.pointerEvents = "none"
    setTimeout(function(){
        e.style.pointerEvents = ""
    }, 1000)
})