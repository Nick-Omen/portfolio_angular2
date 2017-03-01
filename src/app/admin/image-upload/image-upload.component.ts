import {Component, OnInit} from '@angular/core';
import {ImageUploadService} from "./image-upload.service";

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.sass'],
    providers: [ImageUploadService],
})
export class ImageUploadComponent implements OnInit {

    constructor(private imageUploadService: ImageUploadService) {
        this.imageUploadService.progress.subscribe(
            data => {
                console.log('progress = ' + data);
            });
    }

    onChange(event) {
        console.log('onChange');
        let files = event.srcElement.files;
        console.log(files);
        this.imageUploadService.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
            console.log('sent');
        });
    }

    ngOnInit() {
    }

}
