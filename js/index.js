

var bookmarkName = document.getElementById('bookmarkName');
var bookmarkLink = document.getElementById('bookmarkLink');
var submitBtn = document.getElementById('submitBtn');
var tbody = document.getElementById('tbody');
// var deleteBtn = document.getElementById('deleteBtn');
// var visitBtn = document.getElementById('visitBtn');
var linkList;
if (localStorage.getItem('links') != null) {
    linkList = JSON.parse(localStorage.getItem('links'));
    displayLinks(linkList)
} else {
    linkList = [];
}


function addLink() {
if (    valiateform(bookmarkName) && valiateform(bookmarkLink)) {
    
            var link = {
                name: bookmarkName.value,
                link: bookmarkLink.value
            };
            linkList.push(link);
            localStorage.setItem('links', JSON.stringify(linkList));
            displayLinks(linkList);
            clear();
        }
            // Swal({
            //     title: "your input not Corect",
            //     text: "URL must be www.exaple",
            //     icon: "error"
            //   });
            
        
    } 

function displayLinks(arr) {
    var cartona = '';
    for (i = 0; i < arr.length; i++) {
        cartona += ` 
         <tr>
                    <td>${i + 1}</td>
                    <td>${bookmarkName.value}</td>
                    <td> 
                        <button class="btn btn-visit  text-white" data-index="0" id="visitBtn" > 
                        <i class="fa-solid fa-eye pe-2"></i>Visit
                      </button></td>
                    <td><button class="btn btn-delete bg-danger pe-2" onclick="deletelink(${i})" data-index="0" id="deleteBtn">
                        <i class="fa-solid fa-trash-can text-white" ></i>
                        Delete
                      </button></td>
                </tr>`
    }
    tbody.innerHTML = cartona;
}

function deletelink(deleatindex) {
    linkList.splice(deleatindex, 1);
    localStorage.setItem('links', JSON.stringify(linkList))
    displayLinks(linkList);
}
function clear() {
    bookmarkLink.value = null
    bookmarkName.value = null
}
function valiateform(elment){
    var regex = {
        bookmarkLink:/^(www\.)\w{2,256}$/,
        bookmarkName: /^[a-z]\w{3,256}$/
    };
    if(regex[elment.id].test(elment.value)){
        elment.classList.add('is-valid')
        elment.classList.remove('is-invalid')
    }else{
        elment.classList.add('is-invalid')
        elment.classList.remove('is-valid')};
    
};