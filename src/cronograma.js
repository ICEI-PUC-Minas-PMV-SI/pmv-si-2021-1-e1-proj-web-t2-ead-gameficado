var cal = {
    // Propriedades
    mName : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], // Meses
    data : null, // Eventos para uma data selecionada
    sDay : 0, // Dia selecionado
    sMth : 0, // Mês selecionado
    sYear : 0, // Ano selecionado
    sMon : false, // Semana começando na segunda?
  
    //Desenha o calendário para o mês selecionado
    list : function () {
      // Cálculos básicos - Dias do mês, primeiro dia e último dia
      // Nota - Jan é 0 e Dez é 11.
      // Nota - Dom é 0 e Sáb é 6.
      cal.sMth = parseInt(document.getElementById("cal-mes").value); // mês selecionado
      cal.sYear = parseInt(document.getElementById("cal-ano").value); // ano selecionado
      var daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), // número de dias do mês selecionado
          startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // primeiro dia do mês
          endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(); // último dia do mês
  
      // Carregando dados localmente
      cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
      if (cal.data==null) {
        localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
        cal.data = {};
      } else {
        cal.data = JSON.parse(cal.data);
      }
  
       // Determina o número de espaços em branco antes de começar o mês
      var squares = [];
      if (cal.sMon && startDay != 1) {
        var blanks = startDay==0 ? 7 : startDay ;
        for (var i=1; i<blanks; i++) { squares.push("b"); }
      }
      if (!cal.sMon && startDay != 0) {
        for (var i=0; i<startDay; i++) { squares.push("b"); }
      }
  
      // Povoa os dias do mês
      for (var i=1; i<=daysInMth; i++) { squares.push(i); }
  
      // Determina o número de espaços em branco depois do final do mês
      if (cal.sMon && endDay != 0) {
        var blanks = endDay==6 ? 1 : 7-endDay;
        for (var i=0; i<blanks; i++) { squares.push("b"); }
      }
      if (!cal.sMon && endDay != 6) {
        var blanks = endDay==0 ? 6 : 6-endDay;
        for (var i=0; i<blanks; i++) { squares.push("b"); }
      }
  
      // Desenho do calendário
      // Container
      var container = document.getElementById("cal-container"),
          cTable = document.createElement("table");
      cTable.id = "calendario";
      container.innerHTML = "";
      container.appendChild(cTable);
  
      // Nomes dos dias
      var cRow = document.createElement("tr"),
          cCell = null,
          days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      if (cal.sMon) { days.push(days.shift()); }
      for (var d of days) {
        cCell = document.createElement("td");
        cCell.innerHTML = d;
        cRow.appendChild(cCell);
      }
      cRow.classList.add("head");
      cTable.appendChild(cRow);
  
      // Dias no mês
      var total = squares.length;
      cRow = document.createElement("tr");
      cRow.classList.add("day");
      for (var i=0; i<total; i++) {
        cCell = document.createElement("td");
        if (squares[i]=="b") { cCell.classList.add("blank"); }
        else {
          cCell.innerHTML = "<div class='dd'>"+squares[i]+"</div>";
          if (cal.data[squares[i]]) {
            cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
          }
          cCell.addEventListener("click", function(){
            cal.show(this);
          });
        }
        cRow.appendChild(cCell);
        if (i!=0 && (i+1)%7==0) {
          cTable.appendChild(cRow);
          cRow = document.createElement("tr");
          cRow.classList.add("day");
        }
      }
  
      // Remove edições anteriores
      cal.close();
    },
  
    // Abre o evento para o dia selecionado
    show : function (el) {
      // Procura por dados existentes
      cal.sDay = el.getElementsByClassName("dd")[0].innerHTML;
  
      // Desenha o formulário do evento
      var tForm = "<h1>" + (cal.data[cal.sDay] ? "Editar" : "Adicionar") + " Evento</h1>";
      tForm += "<div id='evt-date'>" + cal.sDay + " " + cal.mName[cal.sMth] + " " + cal.sYear + "</div>";
      tForm += "<textarea id='evt-details' required>" + (cal.data[cal.sDay] ? cal.data[cal.sDay] : "") + "</textarea>";
      tForm += "<input type='button' value='Fechar' onclick='cal.close()'/>";
      tForm += "<input type='button' value='Deletar' onclick='cal.del()'/>";
      tForm += "<input type='submit' value='Salvar'/>";
  
      // Adiciona o formulário
      var eForm = document.createElement("form");
      eForm.addEventListener("submit", cal.save);
      eForm.innerHTML = tForm;
      var container = document.getElementById("cal-evento");
      container.innerHTML = "";
      container.appendChild(eForm);
    },
  
    // Fecha o evento
    close : function () {
      document.getElementById("cal-evento").innerHTML = "";
    },
  
    // Salva o evento
    save : function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
      cal.data[cal.sDay] = document.getElementById("evt-details").value;
      localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, JSON.stringify(cal.data));
      cal.list();
    },
  
    // Deleta o evento
    del : function () {
      if (confirm("Remover evento?")) {
        delete cal.data[cal.sDay];
        localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, JSON.stringify(cal.data));
        cal.list();
      }
    }
  };
  
  // Desenha o seletor de mês e ano
  window.addEventListener("load", function () {
    // Pega a data atual
    var now = new Date(),
        nowMth = now.getMonth(),
        nowYear = parseInt(now.getFullYear());
  
    // Menu de meses
    var month = document.getElementById("cal-mes");
    for (var i = 0; i < 12; i++) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = cal.mName[i];
      if (i==nowMth) { opt.selected = true; }
      month.appendChild(opt);
    }
  
    // Menu de meses
    var year = document.getElementById("cal-ano");
    for (var i = nowYear-5; i<=nowYear+5; i++) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      if (i==nowYear) { opt.selected = true; }
      year.appendChild(opt);
    }
  
    // Desenha o calendário
    document.getElementById("cal-ok").addEventListener("click", cal.list);
    cal.list();
  });