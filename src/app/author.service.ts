import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(){ 
    return this.http.get("https://book-server1.herokuapp.com/authors");
  }
 
  getAuthor(id: any){         //for edit author page
    return this.http.get("https://book-server1.herokuapp.com/author/"+id);
  }
  
  newAuthor(item: any){
    return this.http.post("https://book-server1.herokuapp.com/insertauthor", {"author" : item})
    .subscribe(data => {console.log(data)})
  }

  updateAuthor(author: any){
    return this.http.put("https://book-server1.herokuapp.com/updateauthor", author)
    .subscribe((data)=>{console.log(data)})
  }

  deleteAuthor(id: any){
    return this.http.delete("https://book-server1.herokuapp.com/removeauthor/"+id);
  }
}
