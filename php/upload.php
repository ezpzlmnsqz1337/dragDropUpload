<?php 
      if(isset($_FILES['files'])){
            print_r($_FILES);
            $errors= array();
            $file_name = $_FILES['files']['name'];
            $file_size =$_FILES['files']['size'];
            $file_tmp =$_FILES['files']['tmp_name'];
            $file_type=$_FILES['files']['type'];
            $file_ext=strtolower(end(explode('.',$_FILES['files']['name'])));
            
            /*$expensions= array("jpeg","jpg","png","md");
            
            if(in_array($file_ext,$expensions)=== false){
                  $errors[]="extension not allowed, please choose a JPEG or PNG file.";
            }
            
            if($file_size > 2097152){
                  $errors[]='File size must be excately 2 MB';
            }*/
            
            if(empty($errors)==true){
                  move_uploaded_file($file_tmp,"files/".$file_name);
                  echo "Success";
            }else{
                  print_r($errors);
                  echo "Failed";
            }
   }
?>