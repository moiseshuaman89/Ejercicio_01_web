Feature: Creacion de un Documento en GoogleApps

  @test_Prueba_web
  Scenario Outline: Mostrar la campaña de Incremento de Línea en compuerta Dashboard para validar que se muestre el texto de forma correcta
    Given ingresamos al buscador de GOOGLE
    When  hago clic en la opción Aplicaciones de GOOGLE y Selecciono GOOGLE DRIVE
    And   hago clic en la opcion Ir a Google Drive en la pagina de GOOGLE DRIVE
    And   Ingreso con mis credenciales "<usuario>" y "<contrasena>" en la pagina de Cuentas de GOOGLE
    And   hago clic en el boton Nuevo y seleciono la opcion Documentos de Google en la pantalla DRIVE
    And   ingreso al documento creado y modificamos el nombre del documento "<nombreDocumento>"

    Examples:
      | usuario           | contrasena      | nombreDocumento           |
      | pruebasweb01.MAHR | ExamenBCPWEB01  | E01_Moises Huaman Roncal |
