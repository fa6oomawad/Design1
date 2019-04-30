document.addEventListener('DOMContentLoaded',function(){
    const featurebox=document.querySelectorAll('.feature');
//styling the boxes depending on the mouse movement 
    featurebox.forEach(box=>{
      
        box.addEventListener('mouseover',function(){
            const icon=this.children[0];
            const text= this.children[1];
           
            this.classList.add('moveover');
            icon.style.color='white'
            text.style.color='white'

        })
        box.addEventListener('mouseout',function(){
            const icon=this.children[0];
            const text= this.children[1];
            this.classList.remove('moveover');
            icon.style.color='rgba(126, 126, 126, 0.658)'
            text.style.color='rgba(126, 126, 126, 0.658)'

        })
    })
})
