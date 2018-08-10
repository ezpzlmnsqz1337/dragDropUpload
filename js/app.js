const url = 'php/upload.php';
const form = $('#dropzone')[0];

form.addEventListener('submit', e => {
    e.preventDefault();

    const files = $('input[type=file]')[0].files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('files[]', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(data => {
        console.log(data);
    });
});