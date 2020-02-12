package hitoriaDeUsuario.page;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;


public class GooglePage extends BasePage {
    //Pagina Google
    public @FindBy(xpath = "//img[@id='hplogo']") WebElement imgLogoGoogle;
    public @FindBy(xpath = "//a[@title='Google Apps']") WebElement btnAplicacionGoogle;
    public @FindBy(xpath = "//a[@data-pid='49']") WebElement btnAplicacionDrive;
    //Pagina Google Drive
    public @FindBy(xpath = "//div/a[text()='Ir a Google Drive']") WebElement btnIrGoogleDrive;
    // Pagina cuentas de Google
    public @FindBy(xpath = "//input[@name='identifier']") WebElement textCorreoOTelefono;
    public @FindBy(xpath = "//input[@name='password']") WebElement textContrasena;
    public @FindBy(xpath = "//span/span[text()='Siguiente']") WebElement btnSiguienteCuentaGoogle;
    //Drive
    public @FindBy(xpath = "//button[@guidedhelpid='new_menu_button']") WebElement btnNuevoDocumento;
    public @FindBy(xpath = "//span/div[text()='Documentos de Google']") WebElement btnDocWordGoogle;
    //Documento
    public @FindBy(xpath = "//div/span[text()='Compartir']") WebElement btnCompartirDocumento;
    public @FindBy(xpath = "//input[@data-tooltip='Cambiar nombre']") WebElement textNombreDocumento;

    public GooglePage() throws IOException {
        super();
    }

    public GooglePage irPantallaGoogle() throws Exception{
        getDriver().get("https://www.google.com/");
        Thread.sleep(1000);
        return new GooglePage();
    }

    public GooglePage irAplicacionGoogle() throws Exception{
        if(WaitUntilWebElementIsVisible(imgLogoGoogle)){
            System.out.println("Valiadacion Correcta.");
            waitAndClickElement(btnAplicacionGoogle);
            this.driver.switchTo().defaultContent();
            this.driver.switchTo().frame(0);
            waitAndClickElement(btnAplicacionDrive);
        }else {
            System.out.println("No se encontro el Elemento");
        }
        return new GooglePage();
    }

    public GooglePage clicEnLaOpcionIrAGoogleDrive() throws Exception{
        if(WaitUntilWebElementIsVisible(btnIrGoogleDrive)){
            System.out.println("Valiadacion Correcta.");
            waitAndClickElement(btnIrGoogleDrive);
        }else {
            System.out.println("No se encontro el Elemento");
        }
        return new GooglePage();
    }

    public GooglePage ingresarUsuarioYContrasena(String usuario, String contrasena) throws Exception{
        if(WaitUntilWebElementIsVisible(btnSiguienteCuentaGoogle)){
            sendKeysToWebElement(textCorreoOTelefono,usuario);
            waitAndClickElement(btnSiguienteCuentaGoogle);
            sendKeysToWebElement(textContrasena,contrasena);
            waitAndClickElement(btnSiguienteCuentaGoogle);
            System.out.println("OK ingresarUsuarioYContrasena");
        }else {
            System.out.println("No se encontro el Elemento");
        }
        return new GooglePage();
    }

    public GooglePage crearNuevoDocumentoGoogle() throws Exception{
        if(WaitUntilWebElementIsVisible(btnNuevoDocumento)){
            waitAndClickElement(btnNuevoDocumento);
            waitAndClickElement(btnDocWordGoogle);
            System.out.println("OK crearNuevoDocumentoGoogle");
            Thread.sleep(1000);
        }else {
            System.out.println("No se encontro el Elemento");
        }
        return new GooglePage();
    }

    public GooglePage validarYModificarNombreDocumento(String nombreDocumento) throws Exception{
        ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
        Date dateActual = new Date();
        SimpleDateFormat formatoFecha= new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
        String textNombreDoc= nombreDocumento + "_" +formatoFecha.format(dateActual);
        driver.switchTo().window(newTab.get(1));
        if(WaitUntilWebElementIsVisible(textNombreDocumento)){
            sendKeysToWebElement(textNombreDocumento,textNombreDoc);
            sendIntroToWebElement(textNombreDocumento);
            System.out.println("OK validarYModificarNombreDocumento");
            Thread.sleep(3000);
        }else {
            System.out.println("No se encontro el Elemento");
        }
        return new GooglePage();
    }


}
