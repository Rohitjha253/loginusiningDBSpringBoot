export class gstoreAPIs{
    static async addCategory(categoryData){
        await fetch("http://localhost:8080/user", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(categoryData)
        })
    }
}