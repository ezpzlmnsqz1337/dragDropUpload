    function allowDrop(ev) {
        ev.preventDefault();
        console.log("DRAG OVER");
        $('#dropzone').css("border-color", "#111111");
    }

    function dragStart(ev) {
        console.log("DRAG START");
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function dragEnd(ev) {
        console.log("DRAG END");
        $('#dropzone').css("border-color", "#E2F3FA");
        console.log("dragEnd");
        // Remove all of the drag data
        var dt = ev.dataTransfer;
        if (dt.items) {
            // Use DataTransferItemList interface to remove the drag data
            for (var i = 0; i < dt.items.length; i++) {
                dt.items.remove(i);
            }
        } else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    }

    function drop(ev) {
        console.log('File(s) dropped', ev);
        ev.preventDefault();
        // If dropped items aren't files, reject them
        var dt = ev.dataTransfer;
        //get the file
        var url = './scripts/upload.php';
        var data = new FormData();
        $.each(dt.files, function(key, value) {
            data.append(key, value);
        });

        console.log('Data: ', data);
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function() {
                console.log('File: ' + file.name + ' has started uploading!');
            }
        });
    }

    var url = 'php/upload.php';
    var form = $('dropzone')[0];
    // Listen for form submit
    function formSubmit(e){
        e.preventDefault();
        e.stopPropagation();

        // Gather files and begin FormData
        var files = $('input[type=file]').files;
        console.log(files);
        var formData = new FormData();

        // Append files to files array
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            formData.append('files[]', file);
        }
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function(response) {
                console.log(response);
            }
        });
        return false;
    }

    function dropSub(e){
        e.preventDefault();
        e.stopPropagation();
        // Define processing URL and form element 
        console.log("SUBMIT!");
        $('#dropzone')[0].submit();
        return false;
    }