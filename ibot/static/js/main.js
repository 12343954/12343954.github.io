var audioElement = new Audio();
document.querySelector('#gallery').appendChild(
    JGallery.create([{
        title: 'road of my ai robot',
        items: [
            {
                url: './static/img/large/schema.jpg',
                thumbElement: JGallery.createElement('<span>簡介</span>'),
                audio: `./static/media/0.mp3`,
                // thumbUrl: './static/img/thumbs/d3.jpg',
                title: `語音介紹<br />
                Cooloo AI`,
                hash: '!0-over-view'
            }, {
                url: './static/img/large/d3.jpg',
                thumbUrl: './static/img/thumbs/d3.jpg',
                audio: `./static/media/1.mp3`,
                title: `第一步：攝像頭視圖(Eye-to-hand)<br />
                Step 1. 'Eye-to-hand' view`,
                hash: '!1-camera-view'
            }, {
                url: './static/img/large/d5.jpg',
                thumbUrl: './static/img/thumbs/d5.jpg',
                audio: `./static/media/2.mp3`,
                title: `第二部：工作區視圖<br />
                Step 2. Workbench view`,
                hash: '!2-workbench-view'
            }, {
                url: './static/img/large/d4.jpg',
                thumbUrl: './static/img/thumbs/d4.jpg',
                audio: `./static/media/3.mp3`,
                title: `第三步：攝像頭矯正，‘鳥瞰圖’<br />
                Step 3. Camera correction, ‘bird’s eye view’`,
                hash: '!3-birds-eye-view'
            }, {
                url: './static/img/large/d0.jpg',
                thumbUrl: './static/img/thumbs/d0.jpg',
                audio: `./static/media/4.mp3`,
                title: `第四步：物體識別<br />
                Step 4. Object detection`,
                hash: '!4-object-detection'
            }, {
                url: './static/img/large/d1.jpg',
                thumbUrl: './static/img/thumbs/d1.jpg',
                audio: `./static/media/5.mp3`,
                title: `第五步：角度+位置識別<br />
                Step 5. Angle+position detection`,
                hash: '!5-angle-position-detection'
            }, {
                url: './static/img/large/d6.jpg',
                thumbUrl: './static/img/thumbs/d6.jpg',
                audio: `./static/media/6.mp3`,
                title: `6. 服務器端<br/ >
                6. Serverend`,
                hash: '!6-serverend'
            }, {
                url: './static/img/large/d7.png',
                thumbUrl: './static/img/thumbs/d7.jpg',
                audio: `./static/media/7.mp3`,
                title: `7. 損失曲綫<br />
                7. avg-loss`,
                hash: '!7-avg-loss'
            }, {
                url: './static/img/large/video0.gif',
                thumbUrl: './static/img/thumbs/d8.jpg',
                audio: `./static/media/8.mp3`,
                title: `8. 運動計劃<br />
                8. Motion Plan`,
                hash: '!8-Motion-Plan'
            }, {
                url: './static/img/large/video5.gif',
                thumbUrl: './static/img/thumbs/d9.jpg',
                audio: `./static/media/9.mp3`,
                title: `9. 智能分揀<br />
                9. AI picking`,
                hash: '!9-Intelligent-picking'
            }, {
                url: './static/img/large/US.png',
                thumbElement: JGallery.createElement('<span>交流</span>'),
                // audio: `./static/media/0.mp3`,
                // thumbUrl: './static/img/thumbs/d3.jpg',
                title: `關於我們<br />
                About us`,
                hash: '!10-about-us'
            },
            // {
            //     url: './static/img/large/3.jpg',
            //     thumbUrl: './static/img/thumbs/3.jpg',
            //     title: 'Photo3',
            //     hash: 'photo-3'
            // },
            // {
            //     url: './static/img/large/4.jpg',
            //     thumbUrl: './static/img/thumbs/4.jpg',
            //     title: 'Photo4',
            //     hash: 'photo-4'
            // },
            // {
            //     url: './static/img/large/5.jpg',
            //     thumbUrl: './static/img/thumbs/5.jpg',
            //     title: 'Photo5',
            //     hash: 'photo-5'
            // },
            // {
            //     url: './static/img/large/6.jpg',
            //     thumbUrl: './static/img/thumbs/6.jpg',
            //     title: 'Photo6',
            //     hash: 'photo-6'
            // },
            // {
            //     url: './static/img/large/7.jpg',
            //     thumbUrl: './static/img/thumbs/7.jpg',
            //     title: 'Photo7',
            //     hash: 'photo-7'
            // },
            // {
            //     url: './static/img/large/8.jpg',
            //     thumbUrl: './static/img/thumbs/8.jpg',
            //     title: 'Photo8',
            //     hash: 'photo-8'
            // },
            // {
            //     url: './static/img/large/9.jpg',
            //     thumbUrl: './static/img/thumbs/9.jpg',
            //     title: 'Photo9',
            //     hash: 'photo-9'
            // },
            // {
            //     url: './static/img/large/10.jpg',
            //     thumbUrl: './static/img/thumbs/10.jpg',
            //     title: 'Photo10',
            //     hash: 'photo-10'
            // }
        ]
    },
        // {
        //     title: 'HTML',
        //     items: [
        //         {
        //             element: JGallery.createElement('<video src="SampleVideo_1280x720_1mb.mp4" loop autoplay/>'),
        //             thumbElement: JGallery.createElement('<span>Video</span>'),
        //             title: 'Video',
        //             hash: 'video'
        //         },
        //         {
        //             element: JGallery.createElement('<span style="font-size: 10vmax">Any HTML content</span>'),
        //             thumbElement: JGallery.createElement('<span>HTML</span>'),
        //             title: 'HTML',
        //             hash: 'html'
        //         }
        //     ]
        // }
    ], {
        // thumbnailsVisible: false,
        previewSize: 'contain',
        onChange: ({ album, item, prevItem }) => {
            console.log(item)
            if (item.audio) {
                let au = document.querySelector("#audio");
                au.src = item.audio;
                au.play()
            }
        },
    }).getElement());

