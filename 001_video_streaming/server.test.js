// server.test.js
const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = require('./server'); // server.js 파일을 불러옴

describe('Video Streaming API', () => {
    it('should return 200 and stream video file', async () => {
        const response = await request(app).get('/video');
        
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('video/mp4');
    });

    it('should support range requests', async () => {
        const response = await request(app)
            .get('/video')
            .set('Range', 'bytes=0-1023');
        
        expect(response.status).toBe(206);
        expect(response.headers['content-range']).toMatch(/bytes 0-1023/);
    });
});
