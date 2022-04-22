//English
$(function() {
    $(".en").click(function() {
        //header
        //logotipo$(".logo").children().eq(0).text("PATTI ASESORES Y CONSULTORES");
        $(".container").children().eq(1).text("Beginning");
        $(".container").children().eq(2).text("Services");
        $(".container").children().eq(3).text("About us");
        $(".container").children().eq(4).text("Conatct");
        //$(".container-contact").children().eq(3).text("CONTACT");
       // $(".language-selected").text("English");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#parrafo").text("parrafo124");

        $("#title").text("SERVICES");
        
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("ser");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");

        //informacion
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("ser");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
        //informacion
        $(".whatsapp-1-1").text("Contact us in a single click via Whatsapp!");
       
      
       
        
       
       
       
       

       
       

       


    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        //$(".logo").children().eq(0).text("PATTI ASESORES Y CONSULTORES");
        $(".container").children().eq(1).text("Inicio");
        $(".container").children().eq(2).text("Servicios");
        $(".container").children().eq(3).text("Sobre Nosotros");
        $(".container").children().eq(4).text("Contacto");
        //$(".container-contact").children().eq(3).text("CONTACTO");
       // $(".language-selected").text("Español");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#parrafo").text("parrafo12");

        $("#title").text("SERVICIOS");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("indor");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
        //informacion
        $(".whatsapp-1-1").text("¡Contáctenos en un solo clic a través de Whatsapp!");
     
    });
});