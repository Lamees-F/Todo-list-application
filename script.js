window.onload = function() {
    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var list = document.getElementById("list");
    var flag = 1;

    button.addEventListener("click",addToDoList);

    list.addEventListener("click",boxChecked);

    function addToDoList(){
        if (input.value === ""){
            alert("you must write something!");
        }
        else{
            if(list.style.borderTop === ""){
                list.style.borderTop = "2px solid white";
            }
            var text = input.value;
            var item = `<li id="li-${flag}">${text}
                        <input id="box-${flag}"
                        class="checkboxes" type="checkbox">
                        </li>`;
            
            list.insertAdjacentHTML('beforeend',item);
            flag++;
            console.log(flag);
            form.reset();
        }
    }

    function boxChecked(event){
        const element = event.target;
        if(element.type === 'checkbox'){
            element.parentNode.style.textDecoration = 
            "line-through";
        }
    }
}