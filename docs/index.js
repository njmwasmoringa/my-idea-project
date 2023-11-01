
const  BASE_URL = "https://github.com/njmwasmoringa/my-idea-project";

/* CRUD 
    Create  - POST
    Read -  GET         /ideas        /ideas/{id}
    Update  PATCH      /ideas/{id}
    Delete  DELETE     /ideas/{id
*/


function apiClient(){

    function create(path, data){
        return fetch( `${BASE_URL}${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        } ).then(response=>{
            /// Handle errors
            if(response.status == 200) return response.json();
            throw new Error(response.statusText)
        })
    }
   

    function read(path){

        return fetch( `${BASE_URL}${path}`, {
            headers:{
                "Content-Type":"application/json"
            }
        } ).then(response=>{
            /// Handle errors
            if(response.status == 200) return response.json();
            throw new Error(response.statusText)
        })
    }

    function update(path, data){
        return fetch( `${BASE_URL}${path}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        } ).then(response=>{
            /// Handle errors
            if(response.status == 200) return response.json();
            throw new Error(response.statusText)
        })
    }

    function remove(path){
        return fetch( `${BASE_URL}${path}`, {
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        } ).then(response=>{
            /// Handle errors
            if(response.status == 200) return response.json();
            throw new Error(response.statusText)
        })
    }

}

let ideaImage;

document.addEventListener("DOMContentLoaded", ()=>{
    
    /* const fileInput = document.getElementById("idea_image");
    fileInput.addEventListener("change", (evt)=>{
        const file = evt.target.files[0];
        const fr = new FileReader();
        fr.onload = (fileReadEvent)=>{
            ideaImage = fileReadEvent.target.result;
        }
        fr.readAsDataURL(file);
    }) */

    fetch(`${BASE_URL}/ideas`).then(console.log)

    document.getElementById("idea-form").addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const form = evt.target;
        
        const ideaData = {
            ideaText: form["idea-text"].value,
            industry:form.industry.value
        }

        fetch(`${BASE_URL}/ideas`, {
            method:"post",
            body:JSON.stringify(ideaData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(console.log)
    });

});