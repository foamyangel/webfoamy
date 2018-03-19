<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
   
    <form  action="correo.php" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    Your name:<br>
    <input name="name" type="text" value="" size="30"/><br>
    Your email:<br>
    <input name="email" type="text" value="" size="30"/><br>
    Your message:<br>
    <textarea name="message" rows="7" cols="30"></textarea><br>
    <input type="submit" value="Send email" id="boton">
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
		echo "All fields are required, please fill <a href=\"\">the form</a> again.";
	    }
    else{		
	    $from="From: $name<$email>\r\nReturn-path: $email";
        mail("Foamyangel@hotmail.com",  $message, $from);
		echo Email sent!;
        echo "hola mundo";
        echo "<p>Esta es mi quinta frase hecha con Php!</p>" ;
        echo "<a href="mensaje1.html" class="dropdown-toggle" data-toggle="dropdown" role="button" >" ;
	    }
    }  
?>
						