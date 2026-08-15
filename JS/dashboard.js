const isLoggedIn = localStorage.getItem("isLoggedIn");

if(isLoggedIn !== "true"){

    window.location.href = "../html/login.html";
}
else{

    document.body.style.visibility = "visible";
}

const searchBox = document.querySelector(".search-box");

const ticketRows = document.querySelectorAll(".ticket-table tbody tr");

searchBox.addEventListener("input",()=>{

    const searchValue =  searchBox.value.toLowerCase();

    ticketRows.forEach((row)=>{

        const rowText = row.textContent.toLowerCase();

        if(rowText.includes(searchValue)){

            row.style.display = "";

        }
        else{

            row.style.display = "none";

        }

    });

});


// delete buttons

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const confirmDelete = confirm("Are you sure you want to delete this ticket?");

        if(confirmDelete){

             const row = button.closest("tr");

             row.remove();

        }

       

    });

});


// view button


const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach((button) =>{

    button.addEventListener("click",() => {

      const row = button.closest("tr");

      const cells = document.querySelectorAll("td");

      const ticketId = cells[0].textContent;

      const customer = cells[1].textContent;

      const issue = cells[2].textContent;

      const priority = cells[3].textContent;

      const status = cells[4].textContent;

      alert(

        "Ticket ID : " + ticketId +
        "\nCustomer : " + customer +
        "\nIssue : " + issue +
        "\nPriority : " + priority +
        "\nStatus : " +  status

      );

    });

});


// Edit button

const editModal = document.getElementById("editModal");

const editTicketId = document.getElementById("editTicketId");

const editCustomer = document.getElementById("editCustomer");

const editIssue = document.getElementById("editIssue");

const editPriority = document.getElementById("editPriority");

const editStatus =  document.getElementById("editStatus");

const cancelEditBtn = document.getElementById("cancelEditBtn");

const editButttons = document.querySelectorAll(".edit-btn");

editButttons.forEach((button)=>{

   button.addEventListener("click", () => {

      const row = button.closest("tr");

      const cells  = row.querySelectorAll("td");

      editTicketId.value = cells[0].textContent.trim();

      editCustomer.value = cells[1].textContent.trim();

      editIssue.value = cells[2].textContent.trim();

      editPriority.value = cells[3].textContent.trim();

      editStatus.value = cells[4].textContent.trim();

      editModal.style.display = "flex";


   });

});

