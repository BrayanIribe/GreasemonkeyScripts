/**
 * Written by Brayan Iribe.
 * First revision: 08/15/21.
 * 
 * The purpose of this script is to remove the useless modal shown in main CIA page of ITSON.
 */

// ==UserScript==
// @name     apps2.itson.edu.mx.user.js
// @version  1
// @grant    none
// ==/UserScript==

window.addEventListener("load", async () => {

    // Give some time to show the modal animation
    await new Promise((solve) => setTimeout(solve, 500));
    // Remove modal container
    document.getElementById("AvisoCierreRegistro").remove()
    // Remove dark background overlay
    document.querySelectorAll(".modal-backdrop").forEach(e => e.remove());
    // Remove modal open class, so we can show the scrollbars
    document.body.classList.remove('modal-open')

    // If loader is shown, skip the "loading"
    const loader = document.getElementById('cargando');
    if (loader) {
        document.getElementById('boton').click()
    }

});