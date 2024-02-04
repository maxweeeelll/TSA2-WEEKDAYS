function showBox(day) {
    const box = document.getElementById('box');
    const button = document.getElementById(day);
    const label = document.getElementById(day + 'Label');
    const colors = ['#e74c3c', '#f39c12', '#d35400', '#27ae60', '#8e44ad', '#2980b9', '#c0392b', '#33E3FF', '#52FF33', '#618092' , '#BEC460', '#DE539C', '#0B2AEC'];

  
    const initialColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = initialColor;
    button.style.backgroundColor = initialColor;
    label.style.color = initialColor;

    
    box.classList.remove('hidden');
    box.style.transition = 'none';
    box.style.transform = 'translateY(0)';
    box.style.backgroundColor = initialColor;

    
    setTimeout(() => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        box.style.backgroundColor = color;
        button.style.backgroundColor = color;
        label.style.color = color;
    }, 100);

   
    box.style.right = '150px'; 
    
    box.style.top = '280px'; 

}
