package hitoriaDeUsuario.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

import util.Driver;

public class google_steps extends Driver{

    @Given("^ingresamos al buscador de GOOGLE$")
    public void ingresamosaGoogle() throws Throwable{
        googlePage.irPantallaGoogle();
    }

    @When("^hago clic en la opción Aplicaciones de GOOGLE y Selecciono GOOGLE DRIVE$")
    public void hagoLicEnLaOpciónAplicacionesDeGOOGLE() throws Throwable{
        googlePage.irAplicacionGoogle();
    }

    @And("^hago clic en la opcion Ir a Google Drive en la pagina de GOOGLE DRIVE$")
    public void hagoClicEnLaOpcionIrAGoogleDriveEnLaPaginaDeGOOGLEDRIVE() throws Throwable {
        googlePage.clicEnLaOpcionIrAGoogleDrive();
    }

    @And("^Ingreso con mis credenciales \"([^\"]*)\" y \"([^\"]*)\" en la pagina de Cuentas de GOOGLE$")
    public void ingresoMiYEnLaPaginaDeCuentasDeGOOGLE(String usuario, String contrasena) throws Throwable {
        googlePage.ingresarUsuarioYContrasena( usuario, contrasena);
    }

    @And("^hago clic en el boton Nuevo y seleciono la opcion Documentos de Google en la pantalla DRIVE$")
    public void hagoClicEnElBotonNuevoYSelecionoLaOpcionDocumentosDeGoogleEnLaPantallaDRIVE() throws Throwable{
        googlePage.crearNuevoDocumentoGoogle();
    }

    @And("^ingreso al documento creado y modificamos el nombre del documento \"([^\"]*)\"$")
    public void ingresoAlDocumentoCreadoYModificamosElNombreDelDocumento(String nombreDocumento) throws Throwable {
        googlePage.validarYModificarNombreDocumento(nombreDocumento);
    }
}
