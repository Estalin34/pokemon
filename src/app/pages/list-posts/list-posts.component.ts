import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../services/posts/posts.service';
import { FormBuilder,FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {

  posts: Post[] = [];
form:FormGroup;
  constructor(public postsService: PostsService,private formBuilder:FormBuilder) {
    this.form= this.formBuilder.group({
      userId:["",Validators.required],
      title:["",Validators.required],
      body: ["", [Validators.required, Validators.minLength(10)]],
      
    })
  }

  ngOnInit(): void {
    this.postsService.getPost().subscribe((posts) => {
      console.log(posts); // Verifica que los datos están siendo recibidos
      this.posts = posts;
    });
  }
  
  createPost():void{
    const post =this.form.value;
    if(this.form.valid){
      this.postsService.createPost(post).subscribe((post)=>{
        // this.posts.push(post);
        this.posts.unshift(post);
        this.form.reset();
      })
    }
  }
}