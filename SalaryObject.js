//JavaScript Object
//Main module (Provide other classes, thus as much modules ?)
$(document).ready(function(){
  alert("Formulaire de calcul de salaire");

});


 class SalaryBrut {
    //Gross salary
    constructor(salAnBrut) {
      this.salAnBrut = salAnBrut;
    }

    
    //Properties

    salAnnBrut() {
      return euroFormat(this.salAnBrut);
    }
  
    salMensBrut() {
      return euroFormat(this.salAnBrut/12);
    }
  
    salJourBrut() {
      return euroFormat(this.salAnBrut/260);
    }
  
    salHorairBrut() {
      return euroFormat(this.salAnBrut/1820);
    }


    //Methods

       ///Annual net salary
       netAnnualPay (status) {
        let salAnnuelBrut = parseInt(document.getElementById("anBrut").value);
        let taux = 0;
        switch (status) {
          case "cadre":
             taux = 0.745;
            return euroFormat((salAnnuelBrut * taux));
            case "fonc":
               taux = 0.9;
              return euroFormat((salAnnuelBrut * taux));
              case "port":
                 taux = 0.5;
                return euroFormat((salAnnuelBrut * taux));
                case "indep":
                   taux = 0.55;
                  return euroFormat((salAnnuelBrut * taux));
                  case "auto":
                     taux = 0.75;
                    return euroFormat((salAnnuelBrut * taux));
                      case "smic":
                     taux = 0.792;
                    return euroFormat((salAnnuelBrut * taux));
                      case "autre":
                     taux = 0.75;
                    return euroFormat((salAnnuelBrut * taux));
                    default:
                       taux = 0.77;
                      return euroFormat((salAnnuelBrut * taux));
        }
    
    }
  
    ///Monthyly net salary
    netMonthlyPay (status) {
       let divider = 12;
      let salAnnuelBrut = parseInt(document.getElementById("anBrut").value);
      let taux = 0;
      switch (status) {
        case "cadre":
           taux = 0.745;
          return euroFormat((salAnnuelBrut * taux)/divider);
          case "fonc":
             taux = 0.9;
            return euroFormat((salAnnuelBrut * taux)/divider);
            case "port":
               taux = 0.5;
              return euroFormat((salAnnuelBrut * taux)/divider);
              case "indep":
                 taux = 0.55;
                return euroFormat((salAnnuelBrut * taux)/divider);
                case "auto":
                   taux = 0.75;
                  return euroFormat((salAnnuelBrut * taux)/divider);
                        case "smic":
                     taux = 0.792;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                        case "autre":
                     taux = 0.77;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                  default:
                     taux = 0.77;
                    return euroFormat((salAnnuelBrut * taux)/divider);
      }
  
  }



    ///Daily net salary
    netDailyPay (status) {
       let divider =260.04
      let salAnnuelBrut = parseInt(document.getElementById("anBrut").value);
      let taux = 0;
      switch (status) {
        case "cadre":
           taux = 0.745;
          return euroFormat((salAnnuelBrut * taux)/divider);
          case "fonc":
             taux = 0.9;
            return euroFormat((salAnnuelBrut * taux)/divider);
            case "port":
               taux = 0.5;
              return euroFormat((salAnnuelBrut * taux)/divider);
              case "indep":
                 taux = 0.55;
                return euroFormat((salAnnuelBrut * taux)/divider);
                case "auto":
                   taux = 0.75;
                  return euroFormat((salAnnuelBrut * taux)/divider);
                        case "smic":
                     taux = 0.792;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                        case "autre":
                     taux = 0.77;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                  default:
                     taux = 0.77;
                    return euroFormat((salAnnuelBrut * taux)/divider);
      }
  
  }

      ///Hourly wage
      netHourlyPay (status) {
         let divider =1820.28
        let salAnnuelBrut = parseInt(document.getElementById("anBrut").value);
        let taux = 0;
        switch (status) {
          case "cadre":
             taux = 0.745;
            return euroFormat((salAnnuelBrut * taux)/divider);
            case "fonc":
               taux = 0.9;
              return euroFormat((salAnnuelBrut * taux)/divider);
              case "port":
                 taux = 0.5;
                return euroFormat((salAnnuelBrut * taux)/divider);
                case "indep":
                   taux = 0.55;
                  return euroFormat((salAnnuelBrut * taux)/divider);
                  case "auto":
                     taux = 0.75;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                        case "smic":
                     taux = 0.792;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                        case "autre":
                     taux = 0.77;
                    return euroFormat((salAnnuelBrut * taux)/divider);
                    default:
                       taux = 0.77;
                      return euroFormat((salAnnuelBrut * taux)/divider);
        }
    
    }

  }
  
// -----------------------------------------Helpers------------------------------------------------------
function fixedTwo (number) {
   let fixed = Math.round(number*100)/100;
   return fixed;
}
function euroFormat (euro) {
   return fixedTwo(euro) + " €";
}

function currencyFormat (amount) {
   return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
}



//---------------------------------Main function----------------------------------------------------
  
  function managerSalary(idStatus) {
      const yearSmic = 19074.00;

      if (idStatus === 'smic') {
         let salAnnuelBrut = yearSmic;
         let newSalaryBrut = new SalaryBrut(salAnnuelBrut);
         document.getElementById("anBrut").value = newSalaryBrut.salAnnBrut();
          document.getElementById("anNet").value = newSalaryBrut.netAnnualPay(idStatus);
          document.getElementById("mensBrut").value = newSalaryBrut.salMensBrut();
          document.getElementById("mensNet").value = newSalaryBrut.netMonthlyPay(idStatus);
          document.getElementById("jourBrut").value = newSalaryBrut.salJourBrut();
          document.getElementById("jourNet").value = newSalaryBrut.netDailyPay(idStatus);
          document.getElementById("horairBrut").value = newSalaryBrut.salHorairBrut();
          document.getElementById("horairNet").value = newSalaryBrut.netHourlyPay(idStatus);

          document.getElementById("affich").innerHTML = "Vous gangez : " + document.getElementById("anBrut").value +
           " Bruts ,  ce qui fait : " + document.getElementById("anNet").value + "  Nets.";
      }

      else{
          let salAnnuelBrut = parseInt(document.getElementById("anBrut").value);
          let newSalaryBrut = new SalaryBrut(parseInt(salAnnuelBrut));
          document.getElementById("anBrut").value = newSalaryBrut.salAnnBrut();
          document.getElementById("anNet").value = newSalaryBrut.netAnnualPay(idStatus);
          document.getElementById("mensBrut").value = newSalaryBrut.salMensBrut();
          document.getElementById("mensNet").value = newSalaryBrut.netMonthlyPay(idStatus);
          document.getElementById("jourBrut").value = newSalaryBrut.salJourBrut();
          document.getElementById("jourNet").value = newSalaryBrut.netDailyPay(idStatus);
          document.getElementById("horairBrut").value = newSalaryBrut.salHorairBrut();
          document.getElementById("horairNet").value = newSalaryBrut.netHourlyPay(idStatus);

           document.getElementById("affich").innerHTML = "Vous gangez : " + document.getElementById("anBrut").value +
           " Bruts ,  ce qui fait : " + document.getElementById("anNet").value + "  Nets.";
      }
       
      }
    


 
    