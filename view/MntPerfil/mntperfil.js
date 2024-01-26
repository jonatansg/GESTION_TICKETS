$(document).on("click","#btnactualizar", function(){
    var pass = $("#txtpass").val();
    var newpass = $("#txtpassnew").val();
 
    /* TODO: Validamos que los campos no esten vacíos antes de guardar */
     if (pass.length == 0 || newpass.length == 0) {
         swal("¡Error!", "Campos Vacíos", "error");
     }else{
         /* TODO: Validamos que la contraseñas sean iguales */
         if (pass==newpass){
 
             /* TODO: Procedemos con la actualización */
             var usu_id = $('#user_idx').val();
             $.post("../../controller/usuario.php?op=password", {usu_id:usu_id,usu_pass:newpass}, function (data) {
                 swal("¡Correcto!", "Actualizado Correctamente", "success");
             });
 
         }else{
             /* TODO: Mensaje de alerta en caso de error */
             swal("¡Error!", "Las contraseñas no coinciden", "error");
         }
     }
 });