import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.sass'],
})
export class ImageUploadComponent implements OnInit {
    canvasShow: boolean = false;
    @Input() label: string = '';
    @Input() imageSrc: string = '';
    @Output() onFile: EventEmitter<any> = new EventEmitter(false);

    constructor(private el: ElementRef) {
    }

    inputChange(event) {
        let files = event.target.files;
        this.onFile.emit(files);
        this.canvasShow = true;
        this.drawImageOnCanvas(files[0])
    }

    ngOnInit() {
    }

    drawImageOnCanvas(file) {

        let canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
        let ctx = canvas.getContext('2d');
        let reader: FileReader = new FileReader();

        reader.onload = function (e: any) {
            let img = new Image();
            img.onload = function () {
                let imgWidth, imgHeight;
                let allowedWidth = canvas.parentNode.offsetWidth;
                if (allowedWidth < img.width) {
                    imgWidth = allowedWidth;
                    imgHeight = imgWidth * (img.height / img.width);
                } else {
                    imgWidth = img.width;
                    imgHeight = img.height;
                }
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                ctx.drawImage(img, 0, 0);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
