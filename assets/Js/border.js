let contador_Click = 0;
document.getElementById('mi_imagen').addEventListener('click', function() {
    if(contador_Click == 0){
        this.classList.add('border_imagen');
        contador_Click += 1;
    }else{
        this.classList.toggle('border_imagen');
        contador_Click -= 1;
    }
});