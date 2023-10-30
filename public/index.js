document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelector("#idea-form").addEventListener("submit", evt=>{
        evt.preventDefault();
        const form = evt.target;
        const formData = new FormData(form);

        fetch("http://localhost:3005/ideas", {
            method:"POST",
            body: formData,
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    });

})