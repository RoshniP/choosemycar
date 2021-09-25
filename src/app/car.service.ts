import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class BookService { 

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get("https://book-server1.herokuapp.com/books");
  }
  
  getBook(id:any){        //for edit book page
    return this.http.get("https://book-server1.herokuapp.com/book/"+id)
  }

  newBook(item: any){
    return this.http.post("https://book-server1.herokuapp.com/insertbook", {"book" : item})
    .subscribe(data => {console.log(data)})
  }

  updateBook(book: any){
    return this.http.put("https://book-server1.herokuapp.com/updatebook", book)
    .subscribe((data)=>{console.log(data)})
  }

  deleteBook(id: any){
    return this.http.delete("https://book-server1.herokuapp.com/removebook/"+id);
  }
}
 