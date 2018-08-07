
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    const cWidth = window.innerWidth - 450;
    let bigBrush = document.getElementById("up");
    let smallBrush = document.getElementById("down");

    canvas.width = cWidth
    canvas.height = window.innerHeight;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle= '#BADA55';
    ctx.lineJoin='round';
    ctx.lineCap='round';
    ctx.lineWidth= 50;
    

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;
    

    function draw(e) {
        if (isDrawing === true) {
            console.log(e);
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            lastX = e.offsetX;
            lastY = e.offsetY;
            hue++;

            // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            //     direction = !direction;
            // }

            // if (direction) {
            //     ctx.lineWidth++;
            // } else {
            //     ctx.lineWidth--;
            // }
        }
    }

    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    } )

    canvas.addEventListener('mouseup', () => isDrawing = false )

    canvas.addEventListener('mouseout', () => isDrawing = false )

    bigBrush.addEventListener("click", () =>  ctx.lineWidth += 25 )
    smallBrush.addEventListener("click", () => ctx.lineWidth -= 25 )

