import { Component, Query } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  form = new FormGroup({    
    area: new FormControl(),
    p1: new FormControl(),
    p2: new FormControl(),
    p3: new FormControl(),
    p4: new FormControl(),
    p5: new FormControl(),
    c1: new FormControl(),
    c2: new FormControl(),
    c3: new FormControl(),
    c4: new FormControl(),
    c5: new FormControl()
  });  

  
  submit(){

    let area= parseFloat(this.form.value.area);    
    console.log("Area: " + area)
    let cantidadPlantas = 0;
    let rango= 0;
    document.getElementById("p1").innerHTML = ""
    document.getElementById("p2").innerHTML = ""
    document.getElementById("p3").innerHTML = ""
    document.getElementById("p4").innerHTML = ""
    document.getElementById("p5").innerHTML = ""
    document.getElementById("promedioTotal").innerHTML = ""
    document.getElementById("rplantas").innerHTML = ""
    document.getElementById("cantidadPlantas").innerHTML = ""
    document.getElementById("cplantas").innerHTML = ""
    

    if (isNaN(parseInt(this.form.value.c1))){
      document.getElementById("p1").innerHTML = "0"
    }else{      
      if (isNaN(parseInt(this.form.value.p1))){
        Swal.fire('Debe ingresar el peso de cada planta')
        return;
      }else{              
        cantidadPlantas += parseInt(this.form.value.c1);
      }      
    }
      

    if (isNaN(parseInt(this.form.value.c2))){
      document.getElementById("p2").innerHTML = "0"
    }else{      
      if (isNaN(parseInt(this.form.value.p2))){
        Swal.fire('Debe ingresar el peso de cada planta')
        return;
      }else{              
        cantidadPlantas += parseInt(this.form.value.c2);
      } 
    }
      

    if (isNaN(parseInt(this.form.value.c3))){
      document.getElementById("p3").innerHTML = "0"
    }else{      
      if (isNaN(parseInt(this.form.value.p3))){
        Swal.fire('Debe ingresar el peso de cada planta')
        return;
      }else{              
        cantidadPlantas += parseInt(this.form.value.c3);
      } 
    }
      

    if (isNaN(parseInt(this.form.value.c4))){
      document.getElementById("p4").innerHTML = "0"
    }else{
      if (isNaN(parseInt(this.form.value.p4))){
        Swal.fire('Debe ingresar el peso de cada planta')
        return;
      }else{              
        cantidadPlantas += parseInt(this.form.value.c4);
      } 
    }

    if (isNaN(parseInt(this.form.value.c5))){
      document.getElementById("p5").innerHTML = "0"      
    }else{      
      if (isNaN(parseInt(this.form.value.p5))){
        Swal.fire('Debe ingresar el peso de cada planta')
        return;
      }else{              
        cantidadPlantas += parseInt(this.form.value.c5);
      } 
    }

    if(isNaN(area)){
      document.getElementById("cplantas").innerHTML = ""+ "0" +""
    }else{      
      let totalPlantas= area*300
      document.getElementById("cplantas").innerHTML = ""+ totalPlantas +""
    }

    document.getElementById("cantidadPlantas").innerHTML = ""+ cantidadPlantas +""
    let porcentajeTotal=0;

    if(document.getElementById("p1").textContent != "0"){
      let porcentaje= (parseInt(this.form.value.c1) * 100) / parseInt(document.getElementById("cantidadPlantas").textContent)
      porcentajeTotal = porcentajeTotal + porcentaje;
      let valor= porcentaje/100
      document.getElementById("p1").innerHTML = ""+ porcentaje.toFixed(2) +"%"
      rango = rango + (parseInt(this.form.value.p1) * valor)
    }

    if(document.getElementById("p2").textContent != "0"){
      let porcentaje= (parseInt(this.form.value.c2) * 100) / parseInt(document.getElementById("cantidadPlantas").textContent)
      porcentajeTotal = porcentajeTotal + porcentaje;
      let valor= porcentaje/100
      document.getElementById("p2").innerHTML = ""+ porcentaje.toFixed(2) +"%"
      rango = rango + (parseInt(this.form.value.p2) * valor)
    }

    if(document.getElementById("p3").textContent != "0"){
      let porcentaje= (parseInt(this.form.value.c3) * 100) / parseInt(document.getElementById("cantidadPlantas").textContent)
      porcentajeTotal = porcentajeTotal + porcentaje;
      let valor= porcentaje/100
      document.getElementById("p3").innerHTML = ""+ porcentaje.toFixed(2) +"%"
      rango = rango + (parseInt(this.form.value.p3) * valor)
    }

    if(document.getElementById("p4").textContent != "0"){
      let porcentaje= (parseInt(this.form.value.c4) * 100) / parseInt(document.getElementById("cantidadPlantas").textContent)
      porcentajeTotal = porcentajeTotal + porcentaje;
      let valor= porcentaje/100
      document.getElementById("p4").innerHTML = ""+ porcentaje.toFixed(2) +"%"
      rango = rango + (parseInt(this.form.value.p4) * valor)
    }

    if(document.getElementById("p5").textContent != "0"){
      let porcentaje= (parseInt(this.form.value.c5) * 100) / parseInt(document.getElementById("cantidadPlantas").textContent)
      porcentajeTotal = porcentajeTotal + porcentaje;
      let valor= porcentaje/100
      document.getElementById("p5").innerHTML = ""+ porcentaje.toFixed(2) +"%"
      rango = rango + (parseInt(this.form.value.p5) * valor)
    }
    let rangoTotal= (rango*2.2)/1000
    document.getElementById("promedioTotal").innerHTML = ""+ porcentajeTotal +"%"
    document.getElementById("rplantas").innerHTML = ""+ rangoTotal.toFixed(2) +""

  }


  delete(){   

    document.getElementById("p1").innerHTML = ""
    document.getElementById("p2").innerHTML = ""
    document.getElementById("p3").innerHTML = ""
    document.getElementById("p4").innerHTML = ""
    document.getElementById("p5").innerHTML = ""
    document.getElementById("promedioTotal").innerHTML = ""
    document.getElementById("rplantas").innerHTML = ""
    document.getElementById("cantidadPlantas").innerHTML = ""
    document.getElementById("cplantas").innerHTML = ""
    this.form.controls['p1'].setValue("");
    this.form.controls['p2'].setValue("");
    this.form.controls['p3'].setValue("");
    this.form.controls['p4'].setValue("");
    this.form.controls['p5'].setValue("");
    this.form.controls['c1'].setValue("");
    this.form.controls['c2'].setValue("");
    this.form.controls['c3'].setValue("");
    this.form.controls['c4'].setValue("");
    this.form.controls['c5'].setValue("");
    this.form.controls['area'].setValue("");
  }

}

