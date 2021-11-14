let contextSW = '/sw.js';
let url = window.location.href;

let player = $('#player')
let photoUser = $('#photoUser')

let btnCamera = $('#btnCamera')
let btnCameraBack = $('#btnCameraBack')
let btnTakePhoto = $('#btnTakePhoto')

const camera = new Camera(player[0]);

btnCamera.on('click', () => {

    camera.on()
    .then(result => {
        if (!result) {
            alert('Error al iniciar la cámara');
        }
    });


})

btnCameraBack.on('click', () => {
    console.log('camara back')
    camera.onBack().then(result => {
        if (!result) {
            alert('Error al iniciar la cámara');
        }
    });
})

btnTakePhoto.on('click', () => {

    camera.off();
    const [foto, tipo] = camera.takePhoto();
    const card = `
          <div class="card text-center" style="width: 18rem; margin: 0 auto; /* Added */
          float: none; margin-bottom: 10p">
              <img   src="${foto}"class="card-img-top" alt="...">
              <div class="card-body">
                  <p class="card-text">${tipo}</p>
              </div>
          </div>
      `;
      $("#photoUser").append(card);

})


if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        contextSW = '/sw.js';
    }
    navigator.serviceWorker.register(contextSW);
}