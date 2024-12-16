// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )





document.addEventListener("DOMContentLoaded", () => {
  const threadList = document.getElementById("thread-list");

  // APIのURL
  const API_URL = "https://railway.bulletinboard.techtrain.dev/threads";

  // データを取得する関数
  async function fetchThreads() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("スレッド情報の取得に失敗しました");
      }
      const threads = await response.json();
      displayThreads(threads);
    } catch (error) {
      console.error(error);
      threadList.innerHTML = "<li>スレッド情報を取得できませんでした。</li>";
    }
  }

  // スレッド情報を画面に表示する関数
  function displayThreads(threads) {
    threads.forEach(thread => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${thread.title}</h3>
        <p>ID: ${thread.id}</p>
        <p>${thread.description || "説明がありません"}</p>
      `;
      threadList.appendChild(li);
    });
  }

  // 初期化
  fetchThreads();
});

