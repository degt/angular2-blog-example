import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { CommentsService } from '../comments.service';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService, CommentsService]
})
export class PostComponent implements OnInit {


    comments: Array<any> = [];
    posts:any;

    constructor(
        private route: ActivatedRoute,
        private p: PostService,
        private c: CommentsService
    ) { }

    ngOnInit() {

        
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            

            //Post
            this.p.getPost(id).subscribe(
                r => this.posts = r,
                error => console.error('Error: ' + error)
            );

            //Comments
            this.c.getCommentsByPostId(id).subscribe(
                r => this.comments = r,
                error => console.error('Error: ' + error)
            );

        });

    }

}


export interface Post {
    id: number;
    title: string;
    body: string;
}