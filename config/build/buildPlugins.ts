import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(pathHtml: string): WebpackPluginInstance[] {
  return [
    //  Для включения в сборку HTML
    new HtmlWebpackPlugin({
      template: pathHtml, // Путь к файлу HTML, используемый как шаблон
    }),
    //  Для индикации прогресса сборки
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
