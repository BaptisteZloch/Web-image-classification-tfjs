const loadFile = function(event) {
    let image = $('#img-uploaded');
    image.src = URL.createObjectURL(event.target.files[0]);
    $('#predict-block').removeAttr('hidden');
    $('#upload-block').attr('hidden', 'hidden');
};