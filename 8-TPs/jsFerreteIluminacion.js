/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioLamparas;
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioConDescuento;
 	var precioBruto;
 	var descuento
 	var iibb

 	cantidadLamparas = document.getElementById('Cantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	precioLamparas = 35;
 	marcaLamparas = document.getElementById('Marca').value;
 	descuento = 0;
 	precioBruto = precioLamparas*cantidadLamparas;


//A)
 		if (cantidadLamparas>5) 
	 		{
	 			descuento = 50;
	 		}
//B)	 	
	 	if (cantidadLamparas==5) 
	 		{
	 			if (marcaLamparas == "ArgentinaLuz") 
	 			{
	 				descuento = 40;
	 			}	
	 			
	 			else
	 			{
					descuento = 30;
	 			}
	 		}
//C)
	 	if (cantidadLamparas==4) 
	 		{
	 			if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") 
	 			{
	 				descuento = 25;
	 			}	
	 			
	 			else
	 			{
					descuento = 20;
	 			}
	 		}
//D)
	 	if (cantidadLamparas==3) 
	 		{
	 			if (marcaLamparas =="ArgentinaLuz")
	 			{
	 				descuento = 15;
	 			}

	 			else
	 			{	
	 				if (marcaLamparas == "FelipeLamparas")
	 				{
	 					descuento = 10;
	 				}

	 				else
	 				{	
	 					descuento = 5;
	 				}
	 			}
	 		}
//E)	
		if (precioConDescuento>119) 
			{
				iibb = (precioConDescuento + ((precioConDescuento*10)/100));
				console.log("Usted pago " + iibb + " de IIBB");
			}





	
	precioConDescuento = (precioBruto-((descuento*precioBruto)/100));
	document.getElementById('precioDescuento').value=precioConDescuento

}
