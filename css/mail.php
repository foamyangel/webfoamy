
<?php
 $destino= "ivanpinedita@gmail.com";
 $name=$_POST["name"]
 $mail=$_POST["mail"]
 $msg=$_POST["msg"]
 $contenido="name" . $name . "\email: " . $mail . "\msg: " .$msg;
 mail($destino, "contacto", $contenido);
 header("Location:kol.html")
 ?> 



