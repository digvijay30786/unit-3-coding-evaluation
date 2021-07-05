function myNotes() {
    let title = document.getElementById('title').value;
    let day = document.getElementById('day').value;
    let notes = document.getElementById('notes').value;
    
    if (title!="" && day!="" && notes!="")
    {
        var note = {
            title,
            day,
            notes
        }

        let arr;
        var arr1 = localStorage.getItem('nodeData');
        
        if (arr1 == null)
        {
            arr = [];
        }
        else
        {
            arr = JSON.parse(arr1);
        }
        arr.push(note);
        localStorage.setItem('nodeData', JSON.stringify(arr));
        
        document.getElementById('title').value="";
        document.getElementById('day').value="";
        document.getElementById('notes').value="";

    }
    else
    {
      alert('All Fields are Required');
    }

}

var DivId = document.getElementById('cont');

function renderData()
{
    var div = document.createElement('div');
    div.setAttribute('class', 'table');

    var table = document.createElement('table');
    table.setAttribute('border', "2");
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    var th1 = document.createElement('th');

    th.innerText = "Day-Count";
    th1.innerText = "Notes";

    tr.append(th, th1);
    thead.append(tr);
    table.append(thead);
    div.append(table);
    var tbody = document.createElement('tbody');
   
    table.append(tbody);
    for (let i = 0; i < 16;i++)
    {
        var tr1 = document.createElement('tr');
        var data = document.createElement('th');
        var data1 = document.createElement('th');
        data.innerHTML = `Day-${i + 1}`;
        data1.innerHTML = `<a href=javascript:void(0) onclick=notes(${i+1})>Link (click)</a>`;
        tr1.append(data, data1);
        tbody.append(tr1);
    }

    DivId.append(div);
    
}

export {myNotes,renderData}