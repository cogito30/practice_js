const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/video', (req, res) => {
    // 비디오 파일 경로 읽기
    const videoPath = path.join(__dirname, 'video.mp4');
    // 비디오 파일 읽기
    const stat = fs.statSync(videoPath);
    // 파일 사이즈 기록
    const fileSize = stat.size;
    // req 헤더의 range 기록
    const range = req.headers.range;

    // range 존재시: 헤더 추가 및 파일 데이터 스트리밍
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': `bytes`,
            'Content-Length': chunkSize,
            'Content-TYpe': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    }
    // range가 없는 경우: 헤더 추가 및 파일 내용 스트리밍
    else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

// 
app.use(express.static(path.join(__dirname, 'public')));


// 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PROT}`);
});
