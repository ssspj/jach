const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

//app.use("/api", userRoutes); // user 라우트 연결

// 모든 요청에 대해 index.html을 반환하는 라우트 설정

const routesPath = path.join(__dirname, "./routes"); // 라우트 파일들이 있는 디렉토리 경로
// 라우트 파일들을 모두 읽어서 각각을 Express 앱에 등록
fs.readdirSync(routesPath).forEach((file) => {
  const route = require(path.join(routesPath, file));
  app.use("/api", route);
});

// 모든 요청에 대해 index.html을 반환하는 라우트 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

app.listen(3001, () => {
  console.log("서버 실행");
});
