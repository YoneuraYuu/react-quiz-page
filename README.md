# はじめに
- 本リポジトリはReact学習者の「よね」が作ったwebアプリ「ReactQuiz」のソースファイルを格納しております。

# 概要
- 本webアプリではアプリ「みんはや」形式の早押しクイズが楽しめるwebアプリです。
- 問題が一文字ずつ表示され、「PUSH」ボタンを押下し、回答を入力することで答えの正誤判定が行えます。
- 正誤判定画面では、以下が表示されます。
   - 問題文
   - 自分の押しポイント
   - 答え
   - 自身の回答
- 作問調整ページも設けており、txtファイルを読み込ませることで、自作の問題をアプリ上に表示することもできます。

# デモ動画
## ランダム出題
![demo_normal](https://github.com/user-attachments/assets/52aedbe7-33dc-4b9e-86ce-981203bacaa2)
## 作問調整
![demo_adjust](https://github.com/user-attachments/assets/59d0ff19-17d1-4196-88e6-5addf357d693)

# 使用言語
- TypeScript v4.9.5

# 使用技術
- react v19.0.0
- react-dom v19.0.0
- react-router-dom v7.3.0
- zustand v5.0.3

# 利用方法
- 当リポジトリのソースをローカルにcloneし、「react-quiz」フォルダにて`yarn start`のコマンドを実行してください。
- 作成したサイトのURLは[こちらになります](https://www.yoneura.com/)
