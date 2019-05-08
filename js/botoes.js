var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');

if (emailUsuarioLogado == 'adriano@scouter.com.br') {

    const component = document.getElementById("component");

    divPai = document.createElement('div');
    divPai.setAttribute('class', 'cn-wrapper cn-wrapper4');
    divPai.setAttribute('id', 'cn-wrapper');
    component.appendChild(divPai);

    ulPai = document.createElement('ul');
    ulPai.setAttribute('id', 'pai');
    divPai.appendChild(ulPai);

    //------------ CRIANDO BOTÃO ADMINISTRACAO ---------------

    let liAdministracao = document.createElement('li');
    pai.appendChild(liAdministracao);

    let aAdministracao = document.createElement('a');
    aAdministracao.setAttribute('href', 'adminstracao.html');
    liAdministracao.appendChild(aAdministracao);

    let imgAdministracao = document.createElement('img');
    imgAdministracao.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMjSURBVFhH7ZhdaI5hHMbXfE6JEVbLRitKbYtaDQkpBxzszAlHUlIcEBE7cKLNLC3EASOfyUfMx9GGZKWsfJQcKTlA0uRzjBm/a64ta++z57Y8z0r71dX93Nf9v5//f/f7PO9738saYogAOjs7Z6Lt6DhqRHdQvocHD4ooRy0/Ddff0TMkjmANc2j6UEAl+oFaKaSatpR2uMcaXPB7dJrLvK5JaUHSdS7gOppiuwe8CWgNOoy0qq9ROh85iQrRN3SXGkfajoS4eagdNdlKFhLtQ6LEVizE7vKKl9pKDpI8Qc3uBkF8kQqEnbaSgQQjSNaB9tsKhrnvmHfG3eTQMpCoxt1gmPMcXXM3OUjyBp1wNxjmtKLz7iYHSS6iVyxktq1YiC/xylfaSg6SHFQymGYrFuZUaQJtha3kIMlb1OhuEMQXusA6W8lBko/orLtBEJ+D9PbvtZUcJLmMPqByW/3CwmUTu9EruMp2cpBkFnqKtEmIfVGIq3BxzWiU7WQh0VonnWMrEmKOoa+Ej7GVPCScivRMHbWVEcYnIj2zV22lB0lPIe0Hl9rqA2PatGqlF9pKD/LmkVi/Djdt9QI/38WdtJU+JNfv6x13e0FtBSoQttlKHxeYcSOKP8kFJrvFioLE4ymiDV2w1Qv8saqOtt5WepBXz1+TC9hD0+f0hpfLmFZYb/t6+sGbiwFDoumolmTafOoNbuNaRaoQnfLK0GJUj7rH9B2o9j5ajXJ8u38HN12ALqEOJ7uF5nI5jnYDeiy/G8WhK2gZ3dG0W9BLj+nNr0WFvv3A4SZakRu+8Reklcl4WMKvU5xZZLsHPB0XVqDbCqDVSe8QmuyQv4OJm5HOtJ9QTdyNGC9C4pGtSIiZjRq6on+fmed7KAwmbPJfeY+mwHa/ENt1cqONLbAbYpcjfeSfUdiRlMAZSAfzFhS8+yB2qwoUuoftWIgtRnp8HjA1/k0n8ICTlNkKgvg//4m0w3YQTKn2vCW2oiFIe70XxOeGivhi2h7oP6TJGJtJKoxW83a7jGgIalfwIHHOZURDgSsJ1JKnKvJWodgN8BD/GVlZvwCKr/C6LXnx0gAAAABJRU5ErkJggg==');
    aAdministracao.appendChild(imgAdministracao);

    //------------ CRIANDO BOTÃO INICIO ---------------

    let liInicio = document.createElement('li');
    pai.appendChild(liInicio);

    let aInicio = document.createElement('a');
    aInicio.setAttribute('href', 'inicio.html');
    liInicio.appendChild(aInicio);

    let imgInicio = document.createElement('img');
    imgInicio.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVFhH7ZXPK8NhHMeHg2xqBxNXtJKbQlspkTis+BtcRPlxkCwnF/4BRS5ywMVVU3JQrsqvg/KraOHEpJAfm9fnu0+U7za2r++o7V2vnuf7fj7P83l/17PNYUXRaLQOKvQxu6LxEDzDFbSobb9o5oJleIJ+mIMXGInFYgVaZo9o4oUDOIdGtcXvgUdYIUSpepPMtwXmIcYiozhTcUg33ME6h3nU/hB+PZzBIeu1jFuwBrM8i9xamp7YWMQhU/AG8lZJ34T1MgjBPVxTG4RmEKUfgEPKYQNuoUvtlKJRIUxQL4FHmWcWgM1NcAF74FX7x2KPj6YeSD8Am/tAbvkiG51qZyQNEmNsVSu5KCqhdoFRvt8DalsS58kdmtczB9U2i8Uq2IEw+NX+NRGkl3PlU10Cl9pxYQTgBi7Btp9WQhj3gR7yWxK/V0z88ArHsG+YNonebg1wAvLCxWI6mTQwBrMYoAV8aseVzQCoWa1PYf7/AKx3wNg31Gi5SfSwHGCGuggY/3JfYV0uc0DLTaLGegBY1UeTOCOSD5B7AdjXjjeu8z8JUI3XpvP8HcgHsBwgzNibgk0JmcA3YO0BphOtCawNM4rMAVjshCM4tZldAlRq25yXw/EOD0JLi0V3wBsAAAAASUVORK5CYII=');
    aInicio.appendChild(imgInicio);

    //------------ CRIANDO BOTÃO FORMULARIO ---------------

    let liFormulario = document.createElement('li');
    pai.appendChild(liFormulario);

    let aFormulario = document.createElement('a');
    aFormulario.setAttribute('href', 'formulario.html');
    liFormulario.appendChild(aFormulario);

    let imgFormulario = document.createElement('img');
    imgFormulario.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIiSURBVFhH7ZY9TxRRFIbXuIhCIl8WFrjo0tjYWGFFQK1siImNjfwASgwmRltIaLSyoaWyICGGjxAUQkKlsZBWFiFWJAsUdrLr8949w87uzpJhmJtQ+CZP7jnn3jnv2dnZj0ypVHoBxbJn4bEPTzP1ongA05x55BM8PkDBbKtiU9M9sdSb8HiO1aGlVV2UAT6yTPkEj3nWpgN8hxXP/DhtgP/PwMUZgHgQJoTl14M8AQOuKSKOPcAYpa9COevNIE/AqGuKYg/gS2e5A/coPRPKWduCPAF3XVN0lgEmVZOUs+QqWSK9ck1R7AF8CZscPi8trap+AOJuSnmhnDUb5AnodE1DotaFxy1LIwfw8hYQX6L3NBxXtspr0BE1QOp3gFXm76FEHNZUwwBpi/aB+R9i/TGZladE/CnqDryForC8N8hjsuMaIVqfmMOQ1S4T6+dfvuNRA5z3e2DErgubD6smUden4Sd8Jm5pGCAN1Zk/tHLYfB3ag2KqAzQzJ+6DbfjCmTYrpztAM3Pqt8kLoNteNZdsgNcskX+nT4Pr+q1Njbn2rKxXfgd2YJV6rbnExm82EolrN9WDMPzKH7vGiDgwX+FMo3lawuAd1JhjmCf/Bcu+ze9jILmPrUStH3ZhCa5Z2Y8w0POjt+Mbyw1Wme/BIvlVO+ZPGG1oAIl4y8wXoNWO+BOeHRj9rdi7AY5ghvCKHfErzHpgDt7AA4yzthVTmcw/S7zP392NbnYAAAAASUVORK5CYII=');
    aFormulario.appendChild(imgFormulario);

    //------------ CRIANDO BOTÃO LOGOUT ---------------

    let liLogout = document.createElement('li');
    pai.appendChild(liLogout);

    let aLogout = document.createElement('a');
    aLogout.setAttribute('href', 'login.html');
    liLogout.appendChild(aLogout);

    let imgLogout = document.createElement('img');
    imgLogout.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ9SURBVFhH7ZXNi41hHIZPM2NmZ2ThoywoC1mYxWyokcVYUUpIWCgMYcHCZtTYyML/YKSoWZASM0kpH2nSpIaSsFZqaERo0pzj+h3XOc30fpyvsZiaq+6ec+7f/dzvc2be95zCEouWYrG4Ej1Hg1r/Dy6yEQ2hdVqFUqnUh0p4b7TKYB3AO83aqdU8lLRRdgnNeLHLjjIPwPsf+u9YerUbh4IudC/KAl4/Qqsd5x3gIJpy9hvtd1Q/7G1nY/nilhx3VIVR6gECvLg/xpzPoD2O6oMNQ26Oi/drz4Nx5gECRvEhRsxMs6x3lA/BTWz448aj2gkY5x4gYNzJ/KW5Me18CN52w6hWKkRqHiAgUv1A0KedDsFVlTBrj3YqUWYu9wABmetmb2qlQ+akwVdamRCr+wBzst9Z2rWTELhm8KpWJsQaOUDckJXvh+y/LPMnho5oZUKs7gME5MbN79NKwvC1oV1amRBr9ACj5ge0kjB8YajmtxexbnKP0QWtXMg9tfuQVhKGdwyd01ow6Pxo9w6tJAyvGBrRWhDoi8d7FhWpX6OdhPm2OAB8Q63/nAq9J6KUdUIrHTLx8/vJ8BntlqAqHsG3dl7UzobQWcOfWVZoNw09p+z7wtKtnQ2hZYQ/uOkhS/Y3Vw3Y20vHT7vqv7EJ98zZeAt1OaobL175d95naeyDsGkvqvwwjaPNjnIh3kF2AP1y7yRL7T99GmzcScFXi+IwN1j7WTuMVMGPRy0uXL7hAl4/QMuNNAcFG9BdO8vwfhpNojH0DL1Hs45jPoXO87LNmtahcCsajvJ/l5kPfjCBBnnb8tOTCeXxXG9Bu9ExdBhtR2uNLLGYKBT+Aj5nmr/wEo2qAAAAAElFTkSuQmCC');
    aLogout.appendChild(imgLogout);

} else if (emailUsuarioLogado == 'recepcao@scouter.com.br' ) {

    const component = document.getElementById("component");

    divPai = document.createElement('div');
    divPai.setAttribute('class', 'cn-wrapper cn-wrapper3');
    divPai.setAttribute('id', 'cn-wrapper');
    component.appendChild(divPai);

    ulPai = document.createElement('ul');
    ulPai.setAttribute('id', 'pai');
    divPai.appendChild(ulPai);

    //------------ CRIANDO BOTÃO INICIO ---------------

    let liInicio = document.createElement('li');
    pai.appendChild(liInicio);

    let aInicio = document.createElement('a');
    aInicio.setAttribute('href', 'inicio-r.html');
    liInicio.appendChild(aInicio);

    let imgInicio = document.createElement('img');
    imgInicio.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVFhH7ZXPK8NhHMeHg2xqBxNXtJKbQlspkTis+BtcRPlxkCwnF/4BRS5ywMVVU3JQrsqvg/KraOHEpJAfm9fnu0+U7za2r++o7V2vnuf7fj7P83l/17PNYUXRaLQOKvQxu6LxEDzDFbSobb9o5oJleIJ+mIMXGInFYgVaZo9o4oUDOIdGtcXvgUdYIUSpepPMtwXmIcYiozhTcUg33ME6h3nU/hB+PZzBIeu1jFuwBrM8i9xamp7YWMQhU/AG8lZJ34T1MgjBPVxTG4RmEKUfgEPKYQNuoUvtlKJRIUxQL4FHmWcWgM1NcAF74FX7x2KPj6YeSD8Am/tAbvkiG51qZyQNEmNsVSu5KCqhdoFRvt8DalsS58kdmtczB9U2i8Uq2IEw+NX+NRGkl3PlU10Cl9pxYQTgBi7Btp9WQhj3gR7yWxK/V0z88ArHsG+YNonebg1wAvLCxWI6mTQwBrMYoAV8aseVzQCoWa1PYf7/AKx3wNg31Gi5SfSwHGCGuggY/3JfYV0uc0DLTaLGegBY1UeTOCOSD5B7AdjXjjeu8z8JUI3XpvP8HcgHsBwgzNibgk0JmcA3YO0BphOtCawNM4rMAVjshCM4tZldAlRq25yXw/EOD0JLi0V3wBsAAAAASUVORK5CYII=');
    aInicio.appendChild(imgInicio);

    //------------ CRIANDO BOTÃO LOGOUT ---------------

    let liLogout = document.createElement('li');
    pai.appendChild(liLogout);

    let aLogout = document.createElement('a');
    aLogout.setAttribute('href', 'login.html');
    liLogout.appendChild(aLogout);

    let imgLogout = document.createElement('img');
    imgLogout.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ9SURBVFhH7ZXNi41hHIZPM2NmZ2ThoywoC1mYxWyokcVYUUpIWCgMYcHCZtTYyML/YKSoWZASM0kpH2nSpIaSsFZqaERo0pzj+h3XOc30fpyvsZiaq+6ec+7f/dzvc2be95zCEouWYrG4Ej1Hg1r/Dy6yEQ2hdVqFUqnUh0p4b7TKYB3AO83aqdU8lLRRdgnNeLHLjjIPwPsf+u9YerUbh4IudC/KAl4/Qqsd5x3gIJpy9hvtd1Q/7G1nY/nilhx3VIVR6gECvLg/xpzPoD2O6oMNQ26Oi/drz4Nx5gECRvEhRsxMs6x3lA/BTWz448aj2gkY5x4gYNzJ/KW5Me18CN52w6hWKkRqHiAgUv1A0KedDsFVlTBrj3YqUWYu9wABmetmb2qlQ+akwVdamRCr+wBzst9Z2rWTELhm8KpWJsQaOUDckJXvh+y/LPMnho5oZUKs7gME5MbN79NKwvC1oV1amRBr9ACj5ge0kjB8YajmtxexbnKP0QWtXMg9tfuQVhKGdwyd01ow6Pxo9w6tJAyvGBrRWhDoi8d7FhWpX6OdhPm2OAB8Q63/nAq9J6KUdUIrHTLx8/vJ8BntlqAqHsG3dl7UzobQWcOfWVZoNw09p+z7wtKtnQ2hZYQ/uOkhS/Y3Vw3Y20vHT7vqv7EJ98zZeAt1OaobL175d95naeyDsGkvqvwwjaPNjnIh3kF2AP1y7yRL7T99GmzcScFXi+IwN1j7WTuMVMGPRy0uXL7hAl4/QMuNNAcFG9BdO8vwfhpNojH0DL1Hs45jPoXO87LNmtahcCsajvJ/l5kPfjCBBnnb8tOTCeXxXG9Bu9ExdBhtR2uNLLGYKBT+Aj5nmr/wEo2qAAAAAElFTkSuQmCC');
    aLogout.appendChild(imgLogout);

    //------------ CRIANDO BOTÃO INICIO 2 -------------

    let liInicio2 = document.createElement('li');
    pai.appendChild(liInicio2);

    let aInicio2 = document.createElement('a');
    aInicio2.setAttribute('href', 'inicio-r.html');
    liInicio2.appendChild(aInicio2);

    let imgInicio2 = document.createElement('img');
    imgInicio2.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVFhH7ZXPK8NhHMeHg2xqBxNXtJKbQlspkTis+BtcRPlxkCwnF/4BRS5ywMVVU3JQrsqvg/KraOHEpJAfm9fnu0+U7za2r++o7V2vnuf7fj7P83l/17PNYUXRaLQOKvQxu6LxEDzDFbSobb9o5oJleIJ+mIMXGInFYgVaZo9o4oUDOIdGtcXvgUdYIUSpepPMtwXmIcYiozhTcUg33ME6h3nU/hB+PZzBIeu1jFuwBrM8i9xamp7YWMQhU/AG8lZJ34T1MgjBPVxTG4RmEKUfgEPKYQNuoUvtlKJRIUxQL4FHmWcWgM1NcAF74FX7x2KPj6YeSD8Am/tAbvkiG51qZyQNEmNsVSu5KCqhdoFRvt8DalsS58kdmtczB9U2i8Uq2IEw+NX+NRGkl3PlU10Cl9pxYQTgBi7Btp9WQhj3gR7yWxK/V0z88ArHsG+YNonebg1wAvLCxWI6mTQwBrMYoAV8aseVzQCoWa1PYf7/AKx3wNg31Gi5SfSwHGCGuggY/3JfYV0uc0DLTaLGegBY1UeTOCOSD5B7AdjXjjeu8z8JUI3XpvP8HcgHsBwgzNibgk0JmcA3YO0BphOtCawNM4rMAVjshCM4tZldAlRq25yXw/EOD0JLi0V3wBsAAAAASUVORK5CYII=');
    aInicio2.appendChild(imgInicio2);

}else {

    const component = document.getElementById("component");

    divPai = document.createElement('div');
    divPai.setAttribute('class', 'cn-wrapper cn-wrapper4');
    divPai.setAttribute('id', 'cn-wrapper');
    component.appendChild(divPai);

    ulPai = document.createElement('ul');
    ulPai.setAttribute('id', 'pai');
    divPai.appendChild(ulPai);

    //------------ CRIANDO BOTÃO INICIO ---------------

    let liInicio = document.createElement('li');
    pai.appendChild(liInicio);

    let aInicio = document.createElement('a');
    aInicio.setAttribute('href', 'inicio.html');
    liInicio.appendChild(aInicio);

    let imgInicio = document.createElement('img');
    imgInicio.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVFhH7ZXPK8NhHMeHg2xqBxNXtJKbQlspkTis+BtcRPlxkCwnF/4BRS5ywMVVU3JQrsqvg/KraOHEpJAfm9fnu0+U7za2r++o7V2vnuf7fj7P83l/17PNYUXRaLQOKvQxu6LxEDzDFbSobb9o5oJleIJ+mIMXGInFYgVaZo9o4oUDOIdGtcXvgUdYIUSpepPMtwXmIcYiozhTcUg33ME6h3nU/hB+PZzBIeu1jFuwBrM8i9xamp7YWMQhU/AG8lZJ34T1MgjBPVxTG4RmEKUfgEPKYQNuoUvtlKJRIUxQL4FHmWcWgM1NcAF74FX7x2KPj6YeSD8Am/tAbvkiG51qZyQNEmNsVSu5KCqhdoFRvt8DalsS58kdmtczB9U2i8Uq2IEw+NX+NRGkl3PlU10Cl9pxYQTgBi7Btp9WQhj3gR7yWxK/V0z88ArHsG+YNonebg1wAvLCxWI6mTQwBrMYoAV8aseVzQCoWa1PYf7/AKx3wNg31Gi5SfSwHGCGuggY/3JfYV0uc0DLTaLGegBY1UeTOCOSD5B7AdjXjjeu8z8JUI3XpvP8HcgHsBwgzNibgk0JmcA3YO0BphOtCawNM4rMAVjshCM4tZldAlRq25yXw/EOD0JLi0V3wBsAAAAASUVORK5CYII=');
    aInicio.appendChild(imgInicio);

    //------------ CRIANDO BOTÃO FORMULARIO ---------------

    let liFormulario = document.createElement('li');
    pai.appendChild(liFormulario);

    let aFormulario = document.createElement('a');
    aFormulario.setAttribute('href', 'formulario.html');
    liFormulario.appendChild(aFormulario);

    let imgFormulario = document.createElement('img');
    imgFormulario.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIiSURBVFhH7ZY9TxRRFIbXuIhCIl8WFrjo0tjYWGFFQK1siImNjfwASgwmRltIaLSyoaWyICGGjxAUQkKlsZBWFiFWJAsUdrLr8949w87uzpJhmJtQ+CZP7jnn3jnv2dnZj0ypVHoBxbJn4bEPTzP1ongA05x55BM8PkDBbKtiU9M9sdSb8HiO1aGlVV2UAT6yTPkEj3nWpgN8hxXP/DhtgP/PwMUZgHgQJoTl14M8AQOuKSKOPcAYpa9COevNIE/AqGuKYg/gS2e5A/coPRPKWduCPAF3XVN0lgEmVZOUs+QqWSK9ck1R7AF8CZscPi8trap+AOJuSnmhnDUb5AnodE1DotaFxy1LIwfw8hYQX6L3NBxXtspr0BE1QOp3gFXm76FEHNZUwwBpi/aB+R9i/TGZladE/CnqDryForC8N8hjsuMaIVqfmMOQ1S4T6+dfvuNRA5z3e2DErgubD6smUden4Sd8Jm5pGCAN1Zk/tHLYfB3ag2KqAzQzJ+6DbfjCmTYrpztAM3Pqt8kLoNteNZdsgNcskX+nT4Pr+q1Njbn2rKxXfgd2YJV6rbnExm82EolrN9WDMPzKH7vGiDgwX+FMo3lawuAd1JhjmCf/Bcu+ze9jILmPrUStH3ZhCa5Z2Y8w0POjt+Mbyw1Wme/BIvlVO+ZPGG1oAIl4y8wXoNWO+BOeHRj9rdi7AY5ghvCKHfErzHpgDt7AA4yzthVTmcw/S7zP392NbnYAAAAASUVORK5CYII=');
    aFormulario.appendChild(imgFormulario);

    //------------ SCRIPT -----------------------------

    let liScript = document.createElement('li');
    pai.appendChild(liScript);

    let aScript = document.createElement('a');
    aScript.setAttribute('href', 'script.html');
    liScript.appendChild(aScript);

    let imgScript = document.createElement('img');
    imgScript.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjBQIVNSMkVlYoAAACeklEQVRIx7WVzUtUYRSHn3PvODPQlDghmbWIplUJJQx94CLI6GPTwkWBJGEYBrWMdkXUsv6CNi2CamGmaUH0QUWRQWQZuioKlDSxDFNwnHvuaeFM48zcmdFFZ/Ny3/Oe557fOe89V8iYxfUErWzGwSg2sfPWFZ4OcGTC1+pVSXOXIZsnyB6wTi4492Wu0BFaXLRNJunhg5OSoPfjLdDHQT9l/bKQ73Ey614GZdidDw4HjGe8tn3abE6+I5MB1TblzFHOZnhLjGad42VQBoKKXxaAO0kvUxzQxiCAYWWjlaiF3K88lDRHvC3FgEo2Khv9GjF3hMdEaEnXrRAgj2yH7fHWiOe8t6fUSYtV5xexgjlPNEETG7wfmiJGiFb9xZ2VZPDTv8EXGthPM7uoYtaOrygDCI9z3WIa9yMAslNOlQEYfoTVzrRo5tn1a/jjpGSW2cUdrx6/ZBENjdLAUVb924pxjAaNBnXaCQivImlnrZ7czZy19XaGpFZZZQCwmw7G3ctZASDqXmKUTpqyX28ZgB6mkxH3Yv5XJ557hU906KEKAAuRIMwAXlFeHgOESVhB2Qu7oHLPIpzUNG8KHEnaeef0omUBYjbhd1ma0x6hJQgvyRmGpEe+F06MonsgamN+n2FtNiwzGWHVXrsMSr8zKlp4PuAiidqodrOJ3HSc5zbfnAkprkzwTRTPxhjLdUxS9oriDpYGFB8ODoblD5T/D5AyWQZrlHyA4dqyszEHNzuEs0G/pdZiywbEpJbpfMALGm2rRq2iEBON2jYaeZ7Vsrgd12uSppuPJX6uOfFRttNiIfecTC8BgMW1jVYSOXUliqd85pZ7UzIS/gKoQO3zcGKjeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNS0wMlQxOTo1MzozNSswMjowMJt8qcYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDUtMDJUMTk6NTM6MzUrMDI6MDDqIRF6AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==');
    aScript.appendChild(imgScript);

    //------------ CRIANDO BOTÃO LOGOUT ---------------

    let liLogout = document.createElement('li');
    pai.appendChild(liLogout);

    let aLogout = document.createElement('a');
    aLogout.setAttribute('href', 'login.html');
    liLogout.appendChild(aLogout);

    let imgLogout = document.createElement('img');
    imgLogout.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ9SURBVFhH7ZXNi41hHIZPM2NmZ2ThoywoC1mYxWyokcVYUUpIWCgMYcHCZtTYyML/YKSoWZASM0kpH2nSpIaSsFZqaERo0pzj+h3XOc30fpyvsZiaq+6ec+7f/dzvc2be95zCEouWYrG4Ej1Hg1r/Dy6yEQ2hdVqFUqnUh0p4b7TKYB3AO83aqdU8lLRRdgnNeLHLjjIPwPsf+u9YerUbh4IudC/KAl4/Qqsd5x3gIJpy9hvtd1Q/7G1nY/nilhx3VIVR6gECvLg/xpzPoD2O6oMNQ26Oi/drz4Nx5gECRvEhRsxMs6x3lA/BTWz448aj2gkY5x4gYNzJ/KW5Me18CN52w6hWKkRqHiAgUv1A0KedDsFVlTBrj3YqUWYu9wABmetmb2qlQ+akwVdamRCr+wBzst9Z2rWTELhm8KpWJsQaOUDckJXvh+y/LPMnho5oZUKs7gME5MbN79NKwvC1oV1amRBr9ACj5ge0kjB8YajmtxexbnKP0QWtXMg9tfuQVhKGdwyd01ow6Pxo9w6tJAyvGBrRWhDoi8d7FhWpX6OdhPm2OAB8Q63/nAq9J6KUdUIrHTLx8/vJ8BntlqAqHsG3dl7UzobQWcOfWVZoNw09p+z7wtKtnQ2hZYQ/uOkhS/Y3Vw3Y20vHT7vqv7EJ98zZeAt1OaobL175d95naeyDsGkvqvwwjaPNjnIh3kF2AP1y7yRL7T99GmzcScFXi+IwN1j7WTuMVMGPRy0uXL7hAl4/QMuNNAcFG9BdO8vwfhpNojH0DL1Hs45jPoXO87LNmtahcCsajvJ/l5kPfjCBBnnb8tOTCeXxXG9Bu9ExdBhtR2uNLLGYKBT+Aj5nmr/wEo2qAAAAAElFTkSuQmCC');
    aLogout.appendChild(imgLogout);
}