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