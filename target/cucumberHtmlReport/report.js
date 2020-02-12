$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/hitoriaDeUsuario/feature/RedaccionWord.feature");
formatter.feature({
  "line": 1,
  "name": "Creacion de un Documento en GoogleApps",
  "description": "",
  "id": "creacion-de-un-documento-en-googleapps",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Mostrar la campaña de Incremento de Línea en compuerta Dashboard para validar que se muestre el texto de forma correcta",
  "description": "",
  "id": "creacion-de-un-documento-en-googleapps;mostrar-la-campaña-de-incremento-de-línea-en-compuerta-dashboard-para-validar-que-se-muestre-el-texto-de-forma-correcta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test_Prueba_web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "ingresamos al buscador de GOOGLE",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hago clic en la opción Aplicaciones de GOOGLE y Selecciono GOOGLE DRIVE",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "hago clic en la opcion Ir a Google Drive en la pagina de GOOGLE DRIVE",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso con mis credenciales \"\u003cusuario\u003e\" y \"\u003ccontrasena\u003e\" en la pagina de Cuentas de GOOGLE",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "hago clic en el boton Nuevo y seleciono la opcion Documentos de Google en la pantalla DRIVE",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "ingreso al documento creado y modificamos el nombre del documento \"\u003cnombreDocumento\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "creacion-de-un-documento-en-googleapps;mostrar-la-campaña-de-incremento-de-línea-en-compuerta-dashboard-para-validar-que-se-muestre-el-texto-de-forma-correcta;",
  "rows": [
    {
      "cells": [
        "usuario",
        "contrasena",
        "nombreDocumento"
      ],
      "line": 13,
      "id": "creacion-de-un-documento-en-googleapps;mostrar-la-campaña-de-incremento-de-línea-en-compuerta-dashboard-para-validar-que-se-muestre-el-texto-de-forma-correcta;;1"
    },
    {
      "cells": [
        "pruebasweb01.MAHR",
        "ExamenBCPWEB01",
        "E01_Moises Huaman Roncal_"
      ],
      "line": 14,
      "id": "creacion-de-un-documento-en-googleapps;mostrar-la-campaña-de-incremento-de-línea-en-compuerta-dashboard-para-validar-que-se-muestre-el-texto-de-forma-correcta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5137216419,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Mostrar la campaña de Incremento de Línea en compuerta Dashboard para validar que se muestre el texto de forma correcta",
  "description": "",
  "id": "creacion-de-un-documento-en-googleapps;mostrar-la-campaña-de-incremento-de-línea-en-compuerta-dashboard-para-validar-que-se-muestre-el-texto-de-forma-correcta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test_Prueba_web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "ingresamos al buscador de GOOGLE",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hago clic en la opción Aplicaciones de GOOGLE y Selecciono GOOGLE DRIVE",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "hago clic en la opcion Ir a Google Drive en la pagina de GOOGLE DRIVE",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso con mis credenciales \"pruebasweb01.MAHR\" y \"ExamenBCPWEB01\" en la pagina de Cuentas de GOOGLE",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "hago clic en el boton Nuevo y seleciono la opcion Documentos de Google en la pantalla DRIVE",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "ingreso al documento creado y modificamos el nombre del documento \"E01_Moises Huaman Roncal_\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "google_steps.ingresamosaGoogle()"
});
formatter.result({
  "duration": 4763560006,
  "status": "passed"
});
formatter.match({
  "location": "google_steps.hagoLicEnLaOpciónAplicacionesDeGOOGLE()"
});
formatter.result({
  "duration": 5762933675,
  "status": "passed"
});
formatter.match({
  "location": "google_steps.hagoClicEnLaOpcionIrAGoogleDriveEnLaPaginaDeGOOGLEDRIVE()"
});
formatter.result({
  "duration": 3022762877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pruebasweb01.MAHR",
      "offset": 30
    },
    {
      "val": "ExamenBCPWEB01",
      "offset": 52
    }
  ],
  "location": "google_steps.ingresoMiYEnLaPaginaDeCuentasDeGOOGLE(String,String)"
});
formatter.result({
  "duration": 2902117319,
  "status": "passed"
});
formatter.match({
  "location": "google_steps.hagoClicEnElBotonNuevoYSelecionoLaOpcionDocumentosDeGoogleEnLaPantallaDRIVE()"
});
formatter.result({
  "duration": 10044214613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E01_Moises Huaman Roncal_",
      "offset": 67
    }
  ],
  "location": "google_steps.ingresoAlDocumentoCreadoYModificamosElNombreDelDocumento(String)"
});
formatter.result({
  "duration": 13736316882,
  "status": "passed"
});
formatter.after({
  "duration": 3538270360,
  "status": "passed"
});
});