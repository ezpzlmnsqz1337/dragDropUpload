<?php 
	if(isset($_FILES['file'])){
		print_r($_FILES);
	    $errors= array();

		$root_dir = dirname(__FILE__);

    	$file_name = $_FILES['file']['name'];
        $file_size = $_FILES['file']['size'];
        $file_tmp = $_FILES['file']['tmp_name'];
        $file_type = $_FILES['file']['type'];
        $file_ext = strtolower(end(explode('.',$_FILES['file']['name'])));

	    
        if(empty($errors)==true){
              echo move_uploaded_file($file_tmp,$root_dir."/files/".$file_name);
              echo "Success";
        }else{
              print_r($errors);
              echo "Failed";
        }
	    
	    /*$expensions= array("jpeg","jpg","png","md");
	    
	    if(in_array($file_ext,$expensions)=== false){
	          $errors[]="extension not allowed, please choose a JPEG or PNG file.";
	    }
	    
	    if($file_size > 2097152){
	          $errors[]='File size must be excately 2 MB';
	    }*/
	}
?>