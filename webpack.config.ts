import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  // Тип сборки (при development нет минификации кода)
  mode: "development",
  //корневой файл js
  entry: path.resolve(__dirname, "src", "index.ts"),
  // файл и путь для сборки
  output: {
    filename: "[name].[contenthash].js", // В скобках для динамического обзывания файла в зависимости от entry. contenthash для обхода кэширования браузера
    path: path.resolve(__dirname, "build"),
    clean: true, // Для очистки старых сборок при новой
  },
  plugins: [
    //  Для включения в сборку HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // Путь к файлу HTML, используемый как шаблон
    }),
    //  Для индикации прогресса сборки
    new webpack.ProgressPlugin(),
  ],
  module: {
    // Конфигурация лоадеров для обработки файлов (не JS)
    rules: [
      {
        test: /\.tsx?$/, // регулярка для нахождения ts файлов
        use: "ts-loader", // сам лоадер
        exclude: /node_modules/, // исключение папок
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //  расширение тех файлов, при импорте которых не нужно указывать расширения
  },
};

export default config;
