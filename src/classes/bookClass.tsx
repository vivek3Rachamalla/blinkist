
class BookDetails {
    id: number;
    title: string;
    author: string;
    time: string;
    category: string;
    image: string;
    status: string;
  
    constructor(id: number, title: string, author: string,time: string, category: string, image: string,status: string){
      this.id =id;
      this.image = image;
      this.title = title;
      this.author = author;
      this.time = time;
      this.category = category;
      this.status = status;
    }
  
  }

  export default BookDetails